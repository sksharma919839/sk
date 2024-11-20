import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../asset/image/logo.png";
import { HiMenu } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

function Navbar() {
  const navbarLink = [
    {
      id: 0,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: "About",
      link: "/about",
    },
    {
      id: 0,
      name: "Project",
      link: "/project",
    },
    {
      id: 0,
      name: "Contact",
      link: "/contact",
    },
  ];
  const [click, setClick] = useState(false);

  const onclick = () => {
    setClick(!click);
  };
  return (
    <>
      <div className="bg-[#272727] fixed w-full  h-[70px] sm:top-[46px] top-[40.5px] flex items-center justify-between sm:px-[80px] px-[20px] z-[11]">
        <div>
          <Link to="/portfolio" className="flex items-center">
            <img src={logo} className="w-[45px]" />
            <h1 className="text-[32px] transition-all duration-300 hover:text-[#ca4949]">
              Sunil Sharma
            </h1>
          </Link>
        </div>
        <ul className="md:flex hidden">
          {navbarLink.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ca4949] mx-[10px] px-[2px] text-[18px] transition-all duration-300 hover:text-[#ca4949] pb-[5]px] relative navbar-li"
                    : "text-[#ffffff] mx-[10px] px-[2px] text-[18px] transition-all duration-300 hover:text-[#ca4949] pb-[5]px] relative navbar-li"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="md:hidden" onClick={onclick}>
          {click ? <IoIosClose size={35} /> : <HiMenu size={30} />}
        </div>
      </div>
      {/* Responsive Navbar */}
      <ul
        className={
          click
            ? "fixed md:hidden left-0 top-[110px] w-[100%] h-full  bg-[#272727] z-[11]"
            : "w-[100%] fixed top-[110px] bottom-0 left-[-100%] z-[11]"
        }
      >
        <div className="flex items-center justify-center">
          <div>
            {navbarLink.map((items) => (
              <li key={items.id} className="mx-[10px] my-[25px] text-center">
                <NavLink
                  to={items.link}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-[1.2rem] text-[#ca4949] relative duration-1000 transition-all hover:text-[#ca4949] mx-[10px] navbar-li text-center "
                        : "text-[1.2rem] text-[#ffffff] relative duration-1000 transition-all hover:text-[#ca4949] mx-[10px] navbar-li text-center"
                    }`
                  }
                >
                  {items.name}
                </NavLink>
              </li>
            ))}
          </div>
        </div>
      </ul>
    </>
  );
}

export default Navbar;
