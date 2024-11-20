import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import axios from "axios";

function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://omhardik89.pythonanywhere.com/projecthome/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  }, []);
  return (
    <>
      <div className="my-[40px]" data-aos="fade-up">
        <div className="ml-[50px]">
          <h1 className="text-[#ffffff] text-[60px] mb-[50px]">My Work</h1>
        </div>
        <div className="flex items-center justify-evenly flex-wrap">
          {data.map((item) => (
            <div
              key={item.id}
              className="mx-[15px] work sm:h-[400px] my-[30px] flex-wrap rounded-xl overflow-hidden sm:w-[350px] relative w-[290px] h-[360px] "
            >
              <img
                src={item.image}
                className="rounded-xl sm:h-[400px] sm:w-[350px] w-[290px] h-[360px]"
                alt=""
              />
              <div className="layer">
                <h3 className="font-medium mb-[20px] text-[#ca4949] text-[24px]">
                  {item.h}
                </h3>
                <p className="text-[16px] text-[#ffffff]">{item.p}</p>
                <Link
                  to={item.link}
                  target="_blank"
                  className="mt-[20px] text-[#ca4949] text-[18px] leading-[60px] bg-[#ffffff] w-[60px] h-[60px] rounded-[50%] flex items-center justify-center"
                >
                  <FaLink />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="my-[40px] flex items-center justify-center">
          <Link
            to="/project"
            className="text-[18px] text-[#ca4949] transition-all  duration-1000 border border-[#ca4949] px-[30px] py-[15px] rounded-full hover:bg-[#ca4949] hover:text-[#ffffff]"
          >
            See More
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;
