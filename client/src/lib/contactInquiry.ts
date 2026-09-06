export type ContactInquiry = {
  name: string;
  email: string;
  message: string;
  honey?: string;
};

export type ContactInquirySubmissionStatus =
  | "success"
  | "activation-pending"
  | "invalid"
  | "error";

type ContactInquiryPayload = {
  name: string;
  email: string;
  message: string;
  _honey: string;
  _subject: string;
  _template: string;
  _url: string;
};

type ContactInquiryFetch = (
  input: RequestInfo | URL,
  init?: RequestInit
) => Promise<Response>;

type SubmissionOptions = {
  fetchImpl?: ContactInquiryFetch;
  timeoutMs?: number;
};

export const CONTACT_INQUIRY_ENDPOINT =
  "https://formsubmit.co/ajax/hello@bde.io";

const requestTimeoutMs = 12_000;

const fieldLimits = {
  name: 120,
  email: 254,
  message: 1500,
  honey: 200,
} as const;

function cleanSingleLineValue(value: string, limit: number) {
  return value
    .replace(/\r\n?|\n/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, limit);
}

function cleanMultilineValue(value: string, limit: number) {
  return value
    .replace(/\r\n?|\n/g, "\n")
    .trim()
    .slice(0, limit);
}

function isResponseRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isActivationPendingResponse(responseBody: Record<string, unknown>) {
  const message = responseBody.message;
  if (typeof message !== "string") return false;

  const hasActivation = /\bactivat(?:e|ion|ed)\b/i.test(message);
  const hasEmailConfirmation =
    /\b(?:confirm(?:ation)?|verify|verification)\b/i.test(message) &&
    /\b(?:email|inbox)\b/i.test(message);

  return hasActivation || hasEmailConfirmation;
}

function isAcceptedResponse(responseBody: Record<string, unknown>) {
  return responseBody.success === true || responseBody.success === "true";
}

export function prepareContactInquiry(
  inquiry: ContactInquiry
): ContactInquiryPayload | null {
  const name = cleanSingleLineValue(inquiry.name, fieldLimits.name);
  const email = cleanSingleLineValue(inquiry.email, fieldLimits.email);
  const message = cleanMultilineValue(inquiry.message, fieldLimits.message);

  if (!name || !email || !message) return null;

  return {
    name,
    email,
    message,
    _honey: cleanSingleLineValue(inquiry.honey ?? "", fieldLimits.honey),
    _subject: "New request from bde.io",
    _template: "table",
    _url: "https://bde.io/",
  };
}

export async function submitContactInquiry(
  inquiry: ContactInquiry,
  options: SubmissionOptions = {}
): Promise<ContactInquirySubmissionStatus> {
  const payload = prepareContactInquiry(inquiry);
  if (!payload) return "invalid";

  const controller = new AbortController();
  const timeoutId = setTimeout(
    () => controller.abort(),
    options.timeoutMs ?? requestTimeoutMs
  );

  try {
    const response = await (options.fetchImpl ?? fetch)(
      CONTACT_INQUIRY_ENDPOINT,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        referrerPolicy: "origin",
        body: JSON.stringify(payload),
        signal: controller.signal,
      }
    );
    const responseBody: unknown = await response.json();

    if (!response.ok || !isResponseRecord(responseBody)) return "error";
    if (isActivationPendingResponse(responseBody)) return "activation-pending";

    return isAcceptedResponse(responseBody) ? "success" : "error";
  } catch {
    return "error";
  } finally {
    clearTimeout(timeoutId);
  }
}
