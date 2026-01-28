import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/providers/Theme-Provider";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Aftab SK | Elite Digital Architect at ITVEXO",
    description: "World-class portfolio showcasing premium full-stack engineering, immersive 3D experiences, and elite digital infrastructure by Aftab SK at ITVEXO.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${outfit.variable} font-outfit antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
