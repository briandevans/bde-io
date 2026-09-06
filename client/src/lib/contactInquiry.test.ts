import { describe, expect, it, vi } from "vitest";
import {
  CONTACT_INQUIRY_ENDPOINT,
  prepareContactInquiry,
  submitContactInquiry,
} from "./contactInquiry";

const inquiry = {
  name: "Avery / Northstar",
  email: "avery@example.com",
  message: "I would like to discuss a new market.\nNo rush.",
};

function response(body: unknown, ok = true) {
  return {
    ok,
    json: async () => body,
  } as Response;
}

describe("contact inquiry submission", () => {
  it("normalizes and caps the required fields while retaining the honeypot payload", () => {
    expect(
      prepareContactInquiry({
        name: ` Avery\r\n / ${"N".repeat(140)} `,
        email: ` avery@${"example".repeat(50)}.com `,
        message: `\r\nA thoughtful request.\r\n${"M".repeat(1600)}`,
        honey: "  robot.example  ",
      })
    ).toEqual({
      name: `Avery / ${"N".repeat(112)}`,
      email: `avery@${"example".repeat(50)}.com`.slice(0, 254),
      message: `A thoughtful request.\n${"M".repeat(1600)}`.slice(0, 1500),
      _honey: "robot.example",
      _subject: "New request from bde.io",
      _template: "table",
      _url: "https://bde.io/",
    });

    expect(prepareContactInquiry({ ...inquiry, message: " \n " })).toBeNull();
  });

  it("does not submit incomplete trimmed values", async () => {
    const fetchImpl = vi.fn(async () => response({ success: true }));

    await expect(
      submitContactInquiry({ ...inquiry, name: "  \n " }, { fetchImpl })
    ).resolves.toBe("invalid");
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("posts the documented JSON fields and accepts only strict success responses", async () => {
    const fetchImpl = vi.fn(async () => response({ success: true }));

    await expect(
      submitContactInquiry({ ...inquiry, honey: "bot.example" }, { fetchImpl })
    ).resolves.toBe("success");
    expect(fetchImpl).toHaveBeenCalledWith(
      CONTACT_INQUIRY_ENDPOINT,
      expect.objectContaining({
        method: "POST",
        referrerPolicy: "origin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
    );

    const [, request] = fetchImpl.mock.calls[0];
    expect(JSON.parse(request.body)).toEqual({
      ...inquiry,
      _honey: "bot.example",
      _subject: "New request from bde.io",
      _template: "table",
      _url: "https://bde.io/",
    });

    await expect(
      submitContactInquiry(inquiry, {
        fetchImpl: async () => response({ success: "true" }),
      })
    ).resolves.toBe("success");
  });

  it("returns a separate state when the provider needs form activation", async () => {
    await expect(
      submitContactInquiry(inquiry, {
        fetchImpl: async () =>
          response({
            success: "false",
            message:
              "This form needs Activation. We sent an email with an Activate Form link.",
          }),
      })
    ).resolves.toBe("activation-pending");
  });

  it("treats non-success, malformed, and non-2xx responses as errors", async () => {
    for (const result of [
      response({ success: false }),
      response({ success: "false" }),
      response({ success: 1 }),
      response({}),
      response(null),
      response({ success: true }, false),
    ]) {
      await expect(
        submitContactInquiry(inquiry, { fetchImpl: async () => result })
      ).resolves.toBe("error");
    }

    await expect(
      submitContactInquiry(inquiry, {
        fetchImpl: async () =>
          ({
            ok: true,
            json: async () => Promise.reject(new Error("Invalid JSON")),
          }) as Response,
      })
    ).resolves.toBe("error");
  });

  it("returns an error when the request exceeds its timeout", async () => {
    const fetchImpl = vi.fn(
      (_input: RequestInfo | URL, init?: RequestInit) =>
        new Promise<Response>((_resolve, reject) => {
          init?.signal?.addEventListener("abort", () => {
            reject(new DOMException("Aborted", "AbortError"));
          });
        })
    );

    await expect(
      submitContactInquiry(inquiry, { fetchImpl, timeoutMs: 1 })
    ).resolves.toBe("error");
  });
});
