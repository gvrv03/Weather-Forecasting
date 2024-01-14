import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task 3 - Weather Forecasting Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </head>
      <body className={` bg-gray-950 text-white ${inter.className}`}>
        <Toaster position="bottom-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
