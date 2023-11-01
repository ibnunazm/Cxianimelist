import { Poppins } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "CXIANIMELIST",
  description: "Website Anime Cxianz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
