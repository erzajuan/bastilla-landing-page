import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Menggunakan next/font untuk optimasi font Google
const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '600', '700', '800'],
});

// Metadata dari tag <head> HTML Anda dipindahkan ke sini
export const metadata: Metadata = {
  title: "Bastilla — UMKM Export & Import (Free / Premium)",
  description: "Pilih template yang sesuai: versi Free untuk start cepat, atau Premium untuk kebutuhan profesional dan scaling. Semua template responsif, SEO-friendly, dan mudah dikustom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

