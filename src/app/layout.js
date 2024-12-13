import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import HeaderBg from "./components/Header/HeaderBg";

const quicksand = localFont({
  src: "./fonts/Quicksand/static/Quicksand-Regular.ttf",
  variable: "--font-quiksand",
  weight: "100 800 900",
});

const montserrat = localFont({
  src: "./fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "100 800 900",
});

export const metadata = {
  title: "Next Level Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${montserrat.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
