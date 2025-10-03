import React, { useState } from "react";
import "./Navbar.css";
import wbLogo from "../../assets/Logo.png";
import Container from "../Container/Container";
import { Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "mobile_app", label: "Mobile-App" },
    { id: "contact_us", label: "Contact Us" },
  ];

  return (
    <Container>
      <div className="navbar bg-amber-100 px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  <a onClick={() => setMenu(item.id)}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <a className="">
            <img src={wbLogo} alt="Logo" className="w-[70px] h-[70px]" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-between items-center space-x-3 px-1 text-amber-700 font-semibold cursor-pointer">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => setMenu(item.id)}
                  className={
                    menu === item.id ? "pb-1 border-b-2 border-b-amber-800" : ""
                  }
                >
                  {item.label}
                </a>
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
            <button className="btn btn-soft btn-warning rounded-full">
              Sing In
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
