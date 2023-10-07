import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <>
      <div>
        <ToastContainer />
        <Navbar></Navbar>
        <Outlet></Outlet>
        <hr className="my-32 " />
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
