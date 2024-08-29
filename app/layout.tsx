import type { Metadata } from "next";
import "./globals.css";
// import { Inter as FontSans } from "next/font/google";
import { Quantico as Font } from "next/font/google";
import {
  ClerkProvider,
  // SignInButton,
  // SignedIn,
  // SignedOut,
  // UserButton
} from "@clerk/nextjs";
// const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";

const fontMono = Font({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "federaltt",
  description: "vai se fuder elon musk, aqui é federal!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(fontMono.className, "bg-white-950 antialiased")}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
