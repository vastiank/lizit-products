import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/app/core/redux/provider";

export const metadata: Metadata = {
  title: "Lizit - Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
