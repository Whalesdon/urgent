import "./globals.css";
import { Inter } from "next/font/google";



export const metadata = {
  title: "Gala",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
