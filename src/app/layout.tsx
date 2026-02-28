import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Noto_Sans_KR } from "next/font/google";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-kr",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${GeistSans.variable} ${noto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}