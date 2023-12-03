import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./page";
import { SideBarContextProvider } from "@/context/sidebar.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyDearFood",
  description: "회사 주변 음식 리스트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <SideBarContextProvider>{children}</SideBarContextProvider>
      </body>
    </html>
  );
}
