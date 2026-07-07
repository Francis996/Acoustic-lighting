import "./globals.css";
import { ContactPopup } from "../components/ContactPopup";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://floseek.com"),
  robots: "index,follow"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ContactPopup />
      </body>
    </html>
  );
}
