import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "우리의 작은 우주", description: "우리가 함께 만든 작은 기록관", icons: { icon: "/favicon.svg" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
