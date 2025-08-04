import Footer from "@/components/custom/Footer/Footer";
import NavBar from "@/components/custom/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div className="pt-[57px] sm:pt-[61px] md:pt-[65px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
