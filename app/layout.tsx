import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PG Notes",
  description: "A simple note-taking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header className="flex items-center justify-between px-8 py-4 shadow">
          <h1 className="text-2xl">
            <Link href="/">PG Notes</Link>
          </h1>
          <Button asChild>
            <Link href="/new">New Note</Link>
          </Button>
        </header>
        {children}
      </body>
    </html>
  );
}
