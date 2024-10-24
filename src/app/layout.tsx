import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Boa Vista - Despachante",
  description: "Created by Henrique Turazzi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-100 dark:bg-gray-900 light">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-foreground dark:bg-gray-900`}
        >
          <AuthProvider>
            {children}
          </AuthProvider>
        </body>
    </html>
  );
}
