import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface TMainLayout {
  children: ReactNode;
}

const MainLayout = ({ children }: TMainLayout) => {
  return (
    <>
      <Navbar />
      <div className="mt-24">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
