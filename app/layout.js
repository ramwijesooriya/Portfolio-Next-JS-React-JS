
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});



export const metadata = {
  title: "Portfolio - Asanka Wijesooriya",
  description: "A modern, responsive portfolio built with Next.js and React.js. Features include dark mode, smooth animations, GitHub project integration, and a contact form. Perfect for showcasing my work and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark ">
      <body
        className={`${ovo.className} ${outfit.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white `}
      >
        {children}
      </body>
    </html>
  );
}
