import * as Dialog from "@radix-ui/react-dialog";
import {
  createContext,
  useContext,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type FormEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import {
  submitContactInquiry,
  type ContactInquirySubmissionStatus,
} from "@/lib/contactInquiry";

type SubmissionState = "idle" | ContactInquirySubmissionStatus;

type ContactDialogProps = {
  children: ReactNode;
};

type ContactDialogTriggerProps = ComponentPropsWithoutRef<"button">;

type ContactDraft = {
  name: string;
  email: string;
  message: string;
  honey: string;
};

type ContactDialogContextValue = {
  registerTrigger: (trigger: HTMLButtonElement) => void;
};

const emptyDraft: ContactDraft = {
  name: "",
  email: "",
  message: "",
  honey: "",
};

const ContactDialogContext = createContext<ContactDialogContextValue | null>(
  null
);

function getFormText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export function ContactDialogTrigger({
  children,
  onClick,
  ...props
}: ContactDialogTriggerProps) {
  const dialog = useContext(ContactDialogContext);

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    dialog?.registerTrigger(event.currentTarget);
    onClick?.(event);
  }

  return (
    <Dialog.Trigger asChild>
      <button {...props} onClick={handleClick} type={props.type ?? "button"}>
        {children}
      </button>
    </Dialog.Trigger>
  );
}

export function ContactDialog({ children }: ContactDialogProps) {
  const [open, setOpen] = useState(false);
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [draft, setDraft] = useState<ContactDraft>(emptyDraft);
  const submitInFlight = useRef(false);
  const activeTriggerRef = useRef<HTMLButtonElement | null>(null);

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (nextOpen && submissionState === "success") {
      setSubmissionState("idle");
    }
  }

  function handleFormInput() {
    if (submissionState !== "idle") setSubmissionState("idle");
  }

  function updateDraft(field: keyof ContactDraft, value: string) {
    setDraft(current => ({ ...current, [field]: value }));
  }

  function handleCloseAutoFocus(event: Event) {
    event.preventDefault();
    activeTriggerRef.current?.focus();
  }

  async function handleInquirySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitInFlight.current) return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    submitInFlight.current = true;
    setIsSubmitting(true);
    setSubmissionState("idle");

    try {
      const result = await submitContactInquiry({
        name: getFormText(formData, "name"),
        email: getFormText(formData, "email"),
        message: getFormText(formData, "message"),
        honey: getFormText(formData, "_honey"),
      });

      setSubmissionState(result);
      if (result === "success") setDraft(emptyDraft);
    } finally {
      submitInFlight.current = false;
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <ContactDialogContext.Provider
        value={{
          registerTrigger: trigger => {
            activeTriggerRef.current = trigger;
          },
        }}
      >
        {children}
        <Dialog.Portal>
          <Dialog.Overlay className="contact-dialog__overlay" />
          <Dialog.Content
            className="contact-dialog__content"
            onCloseAutoFocus={handleCloseAutoFocus}
          >
            <Dialog.Close className="contact-dialog__close">
              <span aria-hidden="true">×</span>
              <span className="sr-only">Close contact form</span>
            </Dialog.Close>
            <div className="contact-dialog__heading">
              <p className="contact-dialog__eyebrow">BDE Ventures</p>
              <Dialog.Title className="contact-dialog__title">
                Start a conversation.
              </Dialog.Title>
              <Dialog.Description className="contact-dialog__description">
                Tell us a little about what you&apos;re building.
              </Dialog.Description>
            </div>

            <form
              className="contact-dialog__form"
              onInput={handleFormInput}
              onSubmit={handleInquirySubmit}
            >
              <fieldset
                className="contact-dialog__fields"
                disabled={isSubmitting}
              >
                <label className="contact-dialog__field" htmlFor="contact-name">
                  <span>
                    Name / company <b aria-hidden="true">*</b>
                  </span>
                  <input
                    autoComplete="name"
                    id="contact-name"
                    maxLength={120}
                    name="name"
                    onChange={event => updateDraft("name", event.target.value)}
                    placeholder="Your name or company"
                    required
                    type="text"
                    value={draft.name}
                  />
                </label>
                <label
                  className="contact-dialog__field"
                  htmlFor="contact-email"
                >
                  <span>
                    Email <b aria-hidden="true">*</b>
                  </span>
                  <input
                    autoComplete="email"
                    id="contact-email"
                    maxLength={254}
                    name="email"
                    onChange={event => updateDraft("email", event.target.value)}
                    placeholder="you@company.com"
                    required
                    type="email"
                    value={draft.email}
                  />
                </label>
                <label
                  className="contact-dialog__field contact-dialog__field--message"
                  htmlFor="contact-message"
                >
                  <span>
                    Request <b aria-hidden="true">*</b>
                  </span>
                  <textarea
                    id="contact-message"
                    maxLength={1500}
                    name="message"
                    onChange={event =>
                      updateDraft("message", event.target.value)
                    }
                    placeholder="Tell us what you have in mind."
                    required
                    rows={5}
                    value={draft.message}
                  />
                </label>
                <label
                  aria-hidden="true"
                  className="contact-dialog__honeypot"
                  htmlFor="contact-website"
                >
                  Website
                  <input
                    autoComplete="off"
                    id="contact-website"
                    maxLength={200}
                    name="_honey"
                    onChange={event => updateDraft("honey", event.target.value)}
                    tabIndex={-1}
                    type="text"
                    value={draft.honey}
                  />
                </label>
              </fieldset>
              <div className="contact-dialog__actions">
                <button
                  className="contact-dialog__submit"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "Sending…" : "Submit"}
                </button>
              </div>
              {submissionState === "success" && (
                <p
                  aria-live="polite"
                  className="contact-dialog__status contact-dialog__status--success"
                  role="status"
                >
                  Your request was submitted. Thank you.
                </p>
              )}
              {submissionState === "invalid" && (
                <p
                  className="contact-dialog__status contact-dialog__status--error"
                  role="alert"
                >
                  Please complete your name or company, email, and request.
                </p>
              )}
              {submissionState === "activation-pending" && (
                <p
                  className="contact-dialog__status contact-dialog__status--error"
                  role="alert"
                >
                  The contact form isn&apos;t available yet. Please try again
                  later.
                </p>
              )}
              {submissionState === "error" && (
                <p
                  className="contact-dialog__status contact-dialog__status--error"
                  role="alert"
                >
                  Your request wasn&apos;t submitted. Please try again.
                </p>
              )}
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </ContactDialogContext.Provider>
    </Dialog.Root>
  );
}
