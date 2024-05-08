import type { Metadata } from "next";
import { Inter,Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '../lib/ThemeProvider'


const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  weight: ['100','200','300','400','500', '600','800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Gberu App",
  description: "Revolutionary Logistics Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
      <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>{children}</ThemeProvider>
      </body>
    </html>
  );
}
