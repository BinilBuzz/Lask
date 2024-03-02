import { Inter, Poppins } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.scss";
import "./layout.scss";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
        id="example-script"
        nonce="XUENAJFW"
        data-test="script"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
        id="example-script"
        nonce="XUENAJFW"
        data-test="script"
      />
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
