import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";



const MainLayout = () => {
  return (
    <div className="max-w-[1320px] m-auto">
      <Navbar></Navbar>
      <div className="min-h-screen">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
      
    </div>
  );
};

export default MainLayout;