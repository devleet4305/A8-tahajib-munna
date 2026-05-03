import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "animate.css";
export const metadata = {
  title: "SunCart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-7xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}