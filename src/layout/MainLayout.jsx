import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <nav className="container mx-auto">
        <Navbar />
      </nav>
      <Outlet />
      <footer>
      <Footer/>
      </footer>
    </div>
  );
};

export default MainLayout;
