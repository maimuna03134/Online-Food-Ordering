import React from "react";
import "./Navbar.css";
import wbLogo from "../../assets/Logo.png";
import Container from "../Container/Container";
import { Search, ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const menuItems = [
    { id: "home", label: "Home", path: "/home" },
    { id: "menu", label: "Our Menu", path: "/menu" },
    { id: "offers", label: "Offers", path: "/offers" },
    { id: "reviews", label: "Reviews", path: "/reviews" },
    { id: "about_us", label: "About Us", path: "/about_us" },
    { id: "contact_us", label: "Contact Us", path: "/contact_us" },
  ];

  return (
    <div className="fixed top-0 w-full drop-shadow-lg z-50">
      <Container>
        <div className="navbar  bg-gradient-to-r from-amber-50 via-rose-50 to-orange-50  rounded ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-amber-100 font-semibold rounded-box items-center z-1 mt-3 w-70 h-30 p-2 shadow text-amber-700 cursor-pointer"
              >
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <a className="flex justify-center items-center ">
              <img src={wbLogo} alt="Logo" className="w-[40px] h-[40px]" />
              <span className="text-lg text-green-800 font-bold">
                Fresh<span className="text-amber-700">Bite</span>
              </span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex justify-between items-center space-x-3 px-1 text-amber-700 text-sm  cursor-pointer">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path} 
                    className={({ isActive }) =>
                      isActive ? "pb-1 border-b-2 border-b-amber-800" : ""
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end cursor-pointer">
            <div className="flex space-x-3">
              <Search size={20} color="#ed6002" strokeWidth={1.25} />

              <ShoppingCart size={20} color="#ed6002" strokeWidth={1.25} />
            </div>
            <div className="ml-3">
              <button className="btn btn-soft btn-warning rounded-full text-amber-800">
                Sing In
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
