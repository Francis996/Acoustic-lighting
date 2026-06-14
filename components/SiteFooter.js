import { localizeHref } from "../i18n/routing";
import { inquiryEmail, mailtoHref } from "./inquiryConfig";

export function SiteFooter({ locale, messages }) {
  const footer = messages.footer;

  return (
    <>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <a
              className="brand footer-brand"
              href={localizeHref(locale, "/")}
              aria-label={messages.common.brandAriaLabel}
            >
              <img
                className="brand-logo"
                src="/assets/img/brand/kingornan-logo-header.png"
                alt={messages.common.logoAlt}
                width="118"
                height="88"
              />
            </a>
            <p>{footer.description}</p>
          </div>
          <nav>
            <strong>{footer.productsTitle}</strong>
            {footer.productsLinks.map((item) => (
              <a href={localizeHref(locale, item.href)} key={item.title}>
                {item.title}
              </a>
            ))}
          </nav>
          <nav>
            <strong>{footer.companyTitle}</strong>
            {footer.companyLinks.map((item) => (
              <a href={localizeHref(locale, item.href)} key={item.title}>
                {item.title}
              </a>
            ))}
          </nav>
          <address>
            <strong>{footer.contactTitle}</strong>
            <span>{footer.contactName}</span>
            <a href={mailtoHref("Acoustic Lighting Project Inquiry")}>{inquiryEmail}</a>
            <a href="https://wa.me/8615888067484" target="_blank" rel="noopener">
              +86 15888067484
            </a>
            <span>{footer.salesOffice}</span>
            <span>{footer.manufacturingBase}</span>
          </address>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/8615888067484"
        target="_blank"
        rel="noopener"
        aria-label={messages.common.whatsappAriaLabel}
      >
        WhatsApp
      </a>
    </>
  );
}
