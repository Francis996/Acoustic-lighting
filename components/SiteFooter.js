import { inquiryEmail, mailtoHref } from "./inquiryConfig";
import { TrendingNow } from "./TrendingNow";

function FooterLink({ item }) {
  const isExternal = item.href.startsWith("http://") || item.href.startsWith("https://");

  return (
    <a
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {item.title}
    </a>
  );
}

export function SiteFooter({ content }) {
  const footer = content.footer;

  return (
    <>
      <TrendingNow />
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <a
              className="brand footer-brand"
              href="/"
              aria-label={content.common.brandAriaLabel}
            >
              <img
                className="brand-logo"
                src="/assets/img/brand/floseek-logo-header.png"
                alt={content.common.logoAlt}
                width="560"
                height="135"
              />
            </a>
            <p>{footer.description}</p>
            <a className="footer-project-cta" href="/contact" data-contact-popup>
              Contact us for project support
            </a>
          </div>
          <nav>
            <strong>{footer.productsTitle}</strong>
            {footer.productsLinks.map((item) => (
              <FooterLink item={item} key={item.title} />
            ))}
          </nav>
          <nav>
            <strong>{footer.companyTitle}</strong>
            {footer.companyLinks.map((item) => (
              <FooterLink item={item} key={item.title} />
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
        aria-label={content.common.whatsappAriaLabel}
      >
        WhatsApp
      </a>
    </>
  );
}
