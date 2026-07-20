import "./globals.css";
import { ContactPopup } from "../components/ContactPopup";
import { siteUrl } from "../lib/metadata";

export const metadata = {
  metadataBase: new URL(siteUrl),
  robots: "index,follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
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
