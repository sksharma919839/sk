import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const headerIcons = [
    {
      id: 0,
      icon: <FaGithub className="sm:text-[25px] text-[20px]" />,
      link: "https://github.com/sksharma919839",
    },
    {
      id: 1,
      icon: <FaInstagram className="sm:text-[25px] text-[20px]" />,
      link: "https://www.instagram.com/sk_sharma_75/",
    },
    {
      id: 2,
      icon: <FaLinkedinIn className="sm:text-[25px] text-[20px]" />,
      link: "https://www.linkedin.com/in/sunil-sharma-313a31217/",
    },
    {
      id: 3,
      icon: <FaWhatsapp className="sm:text-[25px] text-[20px]" />,
      link: "http://wa.link/fi1sp0",
    },
  ];
  return (
    <>
      <div className="bg-[#000000] fixed w-full flex items-center justify-between sm:px-[60px] px-[20px] border-b border-b-[#c3c0c0] z-[11]">
        <ul className="flex">
          {headerIcons.map((icon) => (
            <li
              key={icon.id}
              className="border-r border-l  border-r-[#c3c0c0] border-l-[#c3c0c0] sm:px-[10px] px-[5px] py-[10px]"
            >
              <Link
                to={icon.link}
                target="_blank"
                className="transition-all duration-300 hover:text-[#ca4949]"
              >
                {icon.icon}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Link
            to="mailto:sksharma919839@gmail.com"
            className=" transition-all duration-300 hover:text-[#ca4949] sm:text-[18px] text-[13px]"
          >
            sksharma919839@gmail.com
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
