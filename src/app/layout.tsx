import Footer from "@/component/footer/app.footer";
import Header from "@/component/header/app.header";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../style/global.css";

const inter = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
