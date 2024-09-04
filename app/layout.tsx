import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/themeSwitch";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex items-center gap-4 border px-8 py-4">
            <h1 className="text-2xl">
              <Link href="/">PG Notes</Link>
            </h1>
            <Button asChild className="ml-auto">
              <Link href="/new">New Note</Link>
            </Button>
            <ModeToggle />
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
