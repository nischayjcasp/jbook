import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JBook | Jcasp Technologies",
  description: "JBook a Task management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
