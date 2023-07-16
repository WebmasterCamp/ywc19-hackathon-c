import Cookie from "@/components/Cookie";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface TMainLayout {
  children: ReactNode;
}

const MainLayout = ({ children }: TMainLayout) => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="">{children}</div>
      <Cookie />
    </div>
  );
};

export default MainLayout;
