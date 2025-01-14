import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <nav className="container mx-auto">
        <Navbar />
      </nav>
      <Outlet />
      <footer>
        <h2 className="text-2xl font-semibold">This is Footer Section.</h2>
      </footer>
    </div>
  );
};

export default MainLayout;
