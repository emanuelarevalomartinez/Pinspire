import type { Metadata } from "next";
import "./globals.css";
import { DashBoardView } from "@/modules/dashboard/DashBoardView";
import { AppProvider } from "@/store/ContextProvider";
import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata: Metadata = {
  title: "Pinspire",
  description: "Pinspire is an experimental mini web application inspired by Pinterest, focused on exploring and discovering images in a simple, fast and minimalist way.",
  icons: {
    icon: "/icons/pinspire-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <NuqsAdapter>
            <DashBoardView />
            <Toaster />
            {children}
          </NuqsAdapter>
        </AppProvider>
      </body>
    </html>
  );
}
