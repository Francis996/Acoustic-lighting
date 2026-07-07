import { InquiryHiddenFields, PhoneWhatsAppField, inquiryAction, inquiryEmail, mailtoHref } from "./inquiryConfig";

const productOptions = [
  "Acoustic Pendant Lights",
  "Acoustic Linear Lights",
  "Acoustic Ceiling & Wall Lighting",
  "Acoustic Floor Lamps",
  "Custom Acoustic Lighting"
];

export function ApplicationInquiryForm({ subject, application, submitLabel }) {
  return (
    <form className="inquiry-form application-inquiry-form reveal delay-1" action={inquiryAction} method="post">
      <InquiryHiddenFields subject={subject} />
      <input type="hidden" name="Application Page" value={application} readOnly />

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
      <label>
        Product Interest
        <select name="Product Interest" defaultValue="Custom Acoustic Lighting">
          {productOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label>
        Quantity / Area
        <input type="text" name="Quantity or Area" placeholder="Qty, room area or project size" />
      </label>
      <label className="full">
        Project Details
        <textarea
          name="Message"
          rows="5"
          placeholder="Tell us space type, ceiling height, target product, quantity, color, CCT, dimming or drawing requirements."
        ></textarea>
      </label>
      <button className="btn primary full" type="submit">
        {submitLabel}
      </button>
      <p className="form-note">
        Your inquiry will be sent directly to <a href={mailtoHref(subject)}>{inquiryEmail}</a>.
      </p>
    </form>
  );
}
