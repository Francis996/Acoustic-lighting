export const inquiryEmail = "xmtlighting@gmail.com";
export const inquiryAction = `https://formsubmit.co/${inquiryEmail}`;
export const inquiryRedirect = "https://acoustic-lighting.vercel.app/contact";

export function mailtoHref(subject) {
  return `mailto:${inquiryEmail}?subject=${encodeURIComponent(subject)}`;
}

export function InquiryHiddenFields({ subject }) {
  return (
    <>
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={inquiryRedirect} />
    </>
  );
}
