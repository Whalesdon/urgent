import "./globals.css";
import { Inter, Red_Rose } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const rose = Red_Rose({subsets:["latin"]})

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
      <body className={rose.className}>{children}</body>
    </html>
  );
}
