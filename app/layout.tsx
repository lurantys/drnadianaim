import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Cabinet ORL  EDr. Nadia Naim",
    description: "Specialist ENT doctor's office in Morocco.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="scroll-smooth">
            <body
                className={`${inter.variable} font-sans antialiased bg-brand-bg text-black selection:bg-brand-primary/20`}
            >
                {children}
            </body>
        </html>
    );
}
