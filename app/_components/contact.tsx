"use client";

import Link from "next/link";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CONTACT } from "../_content/site";

type ContactContextValue = { openContact: () => void };

const ContactContext = createContext<ContactContextValue | null>(null);

export function useContact() {
  const value = useContext(ContactContext);
  if (!value) throw new Error("useContact deve ser usado dentro de <ContactProvider>");
  return value;
}

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openContact = useCallback(() => setOpen(true), []);
  const closeContact = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeContact();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeContact]);

  return (
    <ContactContext value={{ openContact }}>
      {children}

      {open && (
        <div className="modal">
          <div className="modal-backdrop" onClick={closeContact} />
          <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="contactTitle">
            <button type="button" className="modal-close" onClick={closeContact} aria-label="Fechar">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
            <h3 id="contactTitle" className="modal-title gold-text">
              Contato
            </h3>
            <div className="gold-rule modal-rule" />
            <div className="modal-body">
              <p className="modal-contact">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" d="M3 7l9 6 9-6M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                </svg>
                {CONTACT.email}
              </p>
              <p className="modal-contact">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 0 1 2-2h1.6c.5 0 .9.3 1 .8l.8 3a1 1 0 0 1-.3 1L6.9 9.2a12 12 0 0 0 5.9 5.9l1.4-1.4a1 1 0 0 1 1-.3l3 .8c.5.1.8.5.8 1V17a2 2 0 0 1-2 2h-.5C9.4 18.6 5.4 14.6 5 7.5V7a2 2 0 0 1 2-2Z"
                    transform="translate(3 1)"
                  />
                </svg>
                {CONTACT.phone}
              </p>
              <p className="modal-hours">{CONTACT.hours}</p>
              <Link href="/atuacao" className="btn btn-outline" onClick={closeContact}>
                Ver áreas de atuação
              </Link>
            </div>
          </div>
        </div>
      )}
    </ContactContext>
  );
}

export function ContactButton({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const { openContact } = useContact();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        openContact();
      }}
    >
      {children}
    </button>
  );
}
