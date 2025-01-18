import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const items = [
    <NavLink to={`/`}>Home</NavLink>,
    <NavLink to={`/language-kids`}>Languages for kids</NavLink>,
    <NavLink to={`/about-us`}>About us</NavLink>,
    <NavLink to={`/learning-resources`}>Learning resources</NavLink>,
    <div>{user ? <p>{user.email}</p> : ""}</div>,
  ];

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between my-4 text-[#499DEC] font-bold">
        <Link to={`/`}>
          <img src="https://i.ibb.co.com/s9STyky/4.png" alt="" />
        </Link>
        <ul className="flex items-center gap-8 text-xl">
          {items.map((item, index) => (
            <li className="" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Navbar */}
      <div className="lg:hidden flex p-4 relative text-[#499DEC]">
        <Link to={`/`}>
          <img src="https://i.ibb.co.com/s9STyky/4.png" alt="" />
        </Link>
        <div className="relative justify-end">
          {/* Menu Button (Hamburger or Close Icon) */}
          <div
            className="cursor-pointer text-black text-4xl font-semibold fixed top-4 right-4 z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <IoCloseSharp className="w-10 h-10" />
            ) : (
              <GiHamburgerMenu className="w-10 h-10" />
            )}
          </div>

          {/* Sidebar */}
          <ul
            className={`bg-[#499DEC] text-white text-xl font-semibold pl-8 fixed top-0 h-full w-[30%] py-4 transition-all duration-700 ${
              open ? "right-0" : "-right-[520px]"
            } z-40`}
          >
            {items.map((item, index) => (
              <li key={index} className="hover:text-gray-200 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
