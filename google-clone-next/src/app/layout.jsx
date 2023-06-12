import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone Next13",
  description: "google clone created by next js13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
