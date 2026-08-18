import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ReduxProvider from "./redux/Provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "CodeMart | Shop Quality Products Online",
    template: "%s | CodeMart",
  },

  description:
    "Buy high-quality products online at CodeMart. Explore affordable prices, fast delivery, and a smooth shopping experience.",

  keywords: [
    "CodeMart",
    "online shopping",
    "ecommerce store",
    "buy products online",
  ],

  openGraph: {
    title: "CodeMart | Shop Quality Products Online",
    description:
      "Buy high-quality products at great prices with CodeMart.",
    url: "https://yourdomain.com",
    siteName: "CodeMart",
    type: "website",
  },

  
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ReduxProvider>
        <Header/>
        {children}
        <Footer/>
        </ReduxProvider>
         <Toaster position="bottom-center" />
       
       
        </body>
    </html>
  );
}
