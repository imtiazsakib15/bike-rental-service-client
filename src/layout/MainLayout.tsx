import Footer from "@/components/custom/Footer/Footer";
import NavBar from "@/components/custom/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
