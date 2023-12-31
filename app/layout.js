
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:{
    default:"Mobideck",
    template: "%s | MobiDeck"
  }, 
  description: "Generated by create next app",
  icons:{
    icon:'../public/apple-touch-icon'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed w-[100%]">
          <Navbar />
        </div>
          <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            {children}
          <Footer/>
          </div>
      </body>
    </html>
  );
}

