import type { Metadata } from "next";
import "./css/globals.css";
import "./css/reset.css";

export const metadata: Metadata = {
  title: "aniproj",
  description: "aniproj website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#0a0a0a]`}>{children}</body>
    </html>
  );
}
