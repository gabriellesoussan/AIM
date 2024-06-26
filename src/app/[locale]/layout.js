import { Inter, Poppins, Cinzel } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
    subsets: ["latin"],
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

const cinzel = Cinzel({
    subsets: ["latin"],
    variable: '--font-cinzel',
    weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata = {
    title: "Red Panda Resort",
    description: "Contentstack SE Team Demo",
};

export default function RootLayout({ children, params: { locale } }) {
    return (
        <html lang={locale}>
            <body className={`${inter.variable} ${poppins.variable} ${cinzel.variable}`}>
                {children}
            </body>
        </html>
    );
}
