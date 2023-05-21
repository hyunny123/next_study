import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie website",
  description: "This is the IMDb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* header */}
          <Header />
          {/* navbar */}

          {/* searchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
