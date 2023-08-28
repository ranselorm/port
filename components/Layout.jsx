import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

//components
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-no-repeat bg-cover ${montserrat.variable} font-montserrat relative`}
    >
      <TopLeftImg />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
