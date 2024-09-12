
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import {   ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner"


const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Chancimi | Premier site de formation auto ecole en ligne au Cameroun",
  description: "Passer le permi de conduire en 2 3 mois et plus en tout tranquilité grace à notre école de formation",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
        </body>
    </html>
    </ClerkProvider>
  );
}
