import { inter } from "@/app/ui/fonts.js";
import "./globals.css";

export const metadata = {
  title: "Test",
  description: "Hello!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
