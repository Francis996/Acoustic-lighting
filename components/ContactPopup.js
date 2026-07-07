"use client";

import { useEffect, useState } from "react";
import { InquiryHiddenFields, PhoneWhatsAppField, inquiryAction } from "./inquiryConfig";

const AUTO_POPUP_DELAY = 45000;
const AUTO_POPUP_KEY = "floseek-contact-popup-auto-seen";

const triggerTextPattern =
  /(contact|quote|inquiry|requirements?|catalog|sales|send model|send your|request)/i;
const triggerHrefPattern =
  /(^\/contact(?:\/|#|\?|$)|#(?:contact|contact-form|quote|product-inquiry|floor-quote|linear-quote|ceiling-wall-quote)$|mailto:.*(?:contact|quote|inquiry|requirements?))/i;

function isPopupTrigger(element) {
  if (!element || typeof element.closest !== "function") {
    return false;
  }

  const trigger = element.closest("a, button");

  if (!trigger || trigger.closest(".contact-popup")) {
    return false;
  }

  if (trigger.hasAttribute("data-contact-popup")) {
    return true;
  }

  const href = trigger.getAttribute("href") || "";
  const text = trigger.textContent?.trim() || "";
  const isCtaElement = trigger.matches(
    ".btn, .header-cta, .trust-cta, .contact-info-card, .article-inline-cta a, .article-final-cta a"
  );

  if (href.startsWith("https://wa.me") || href.startsWith("tel:")) {
    return false;
  }

  return (
    triggerHrefPattern.test(href) ||
    (isCtaElement && triggerTextPattern.test(text))
  );
}

export function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [sourcePage, setSourcePage] = useState("");

  const openPopup = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(AUTO_POPUP_KEY, "true");
      setSourcePage(window.location.href);
    }
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setSourcePage(window.location.href);

    const hasAutoShown = window.sessionStorage.getItem(AUTO_POPUP_KEY) === "true";
    const timer = hasAutoShown ? null : window.setTimeout(openPopup, AUTO_POPUP_DELAY);

    const onClick = (event) => {
      if (!isPopupTrigger(event.target)) {
        return;
      }

      event.preventDefault();
      openPopup();
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("has-contact-popup", isOpen);

    return () => {
      document.body.classList.remove("has-contact-popup");
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="contact-popup" role="presentation" onMouseDown={closePopup}>
      <section
        className="contact-popup-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-popup-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="contact-popup-close"
          type="button"
          aria-label="Close inquiry form"
          onClick={closePopup}
        >
          x
        </button>

        <div className="contact-popup-copy">
          <p className="eyebrow">Project Inquiry</p>
          <h2 id="contact-popup-title">Tell us about your acoustic lighting project.</h2>
          <p>
            Share your product interest, quantity and project details. The FLOSEEK
            team will reply with catalog, quotation and customization support.
          </p>
        </div>

        <form
          className="inquiry-form contact-popup-form"
          action={inquiryAction}
          method="post"
          onSubmit={() => {
            if (typeof window !== "undefined") {
              window.sessionStorage.setItem(AUTO_POPUP_KEY, "true");
            }
          }}
        >
          <InquiryHiddenFields subject="Acoustic Lighting Popup Inquiry" />
          <input type="hidden" name="Source Page" value={sourcePage} readOnly />

          <label>
            Name
            <input type="text" name="Name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="Email" placeholder="you@company.com" required />
          </label>
          <PhoneWhatsAppField />
          <label>
            Company
            <input type="text" name="Company" placeholder="Company name" />
          </label>
          <label>
            Country
            <input type="text" name="Country" placeholder="Country / region" />
          </label>
          <label className="full">
            Product Interest
            <select name="Product Interest" defaultValue="Acoustic Pendant Lights">
              <option>Acoustic Pendant Lights</option>
              <option>Acoustic Linear Lights</option>
              <option>Acoustic Ceiling & Wall Lighting</option>
              <option>Acoustic Floor Lamps</option>
              <option>Custom Acoustic Lighting</option>
            </select>
          </label>
          <label className="full">
            Project Details
            <textarea
              name="Message"
              rows="4"
              placeholder="Tell us model, quantity, dimensions, color, deadline or drawing requirements."
            ></textarea>
          </label>
          <button className="btn primary full" type="submit">
            Submit Inquiry
          </button>
          <p className="form-note">
            Your inquiry will be sent directly to sales@kingornan.com.
          </p>
        </form>
      </section>
    </div>
  );
}
