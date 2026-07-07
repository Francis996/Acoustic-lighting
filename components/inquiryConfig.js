export const inquiryEmail = "sales@kingornan.com";
export const inquiryCcEmail = "francischen924@gmail.com";
export const inquiryAction = `https://formsubmit.co/${inquiryEmail}`;
export const inquiryRedirect = "https://floseek.com/contact";

export function mailtoHref(subject) {
  return `mailto:${inquiryEmail}?subject=${encodeURIComponent(subject)}`;
}

export function InquiryHiddenFields({ subject }) {
  return (
    <>
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_cc" value={inquiryCcEmail} />
      <input type="hidden" name="_next" value={inquiryRedirect} />
    </>
  );
}

export function PhoneWhatsAppField({
  label = "Phone / WhatsApp",
  placeholder = "Phone or WhatsApp number"
}) {
  return (
    <label>
      {label}
      <input
        type="text"
        name="Phone / WhatsApp"
        placeholder={placeholder}
        required
      />
    </label>
  );
}
