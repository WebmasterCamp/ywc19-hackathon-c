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
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
