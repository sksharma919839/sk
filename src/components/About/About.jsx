import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import Aboutcourse from "./Aboutcourse";
import axios from "axios";

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://omhardik89.pythonanywhere.com/about/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  }, []);
  return (
    <>
      <div>
        <div className="lg:flex  justify-evenly pt-[150px] mb-[80px] mx-[40px]">
          {data.map((item) => (
            <div
              key={item.id}
              data-aos="zoom-in-down"
              className="flex items-center justify-center mb-[30px] overflow-hidden rounded-3xl about-img-box transition-all  duration-300 cursor-pointer"
            >
              <img
                src={item.img}
                className="sm:h-[442px] h-[320px] sm:w-[442px] w-[320px] opacity-75 hover:opacity-100  transition-all duration-300 hover:scale-[1.2]"
                alt={item.name}
              />
            </div>
          ))}
          <div>
            <h1 className="text-[#ffffff] text-[60px] font-bold">About Me</h1>
            <p className="text-[18px] text-[#ffffff]">
              I am a{" "}
              <ReactTyped
                strings={[
                  "Web Devloper",
                  "Web Designer",
                  "Full Stack Web Developer",
                ]}
                typeSpeed={100}
                className="text-[#ca4949] text-[18px]"
              />
            </p>
            <div>
              <Aboutcourse />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
