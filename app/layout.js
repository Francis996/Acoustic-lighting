import { headers } from "next/headers";
import "./globals.css";

export const metadata = {
  robots: "index,follow"
};

export default async function RootLayout({ children }) {
  const requestHeaders = await headers();
  const locale = requestHeaders.get("x-locale") || "en";
  const direction = requestHeaders.get("x-dir") || "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body>{children}</body>
    </html>
  );
}
