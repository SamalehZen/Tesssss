import type { Metadata } from "next";
import "./globals.css";
import { BottomNav } from "@/components/navigation/BottomNav";
import { Sidebar } from "@/components/navigation/Sidebar";

export const metadata: Metadata = {
  title: "CapyDate",
  description: "Find your perfect match",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased selection:bg-primary/30 relative h-full min-h-screen w-full">
        <Sidebar />
        <main className="md:pl-64 min-h-screen pb-24 md:pb-0">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
