import { Outfit , Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weights: [400, 500,600,700]
});

const ovo = Ovo({
  subsets: ["latin"], weights: [400]
});



export const metadata = {
  title: "Portfolio - GreatStack",
  description: "A modern, responsive portfolio built with Next.js and React.js. Features include dark mode, smooth animations, GitHub project integration, and a contact form. Perfect for showcasing my work and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ovo.className} ${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
