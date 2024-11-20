import React, { useEffect, useState } from "react";
import main from "../../asset/image/code.png";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import code from "../../asset/image/tag.png";
import sk from "../../asset/image/sk.pdf";
import axios from "axios";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://omhardik89.pythonanywhere.com/cv/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);
  return (
    <>
      <div>
        <div className="flex items-center md:justify-evenly justify-center overflow-hidden pt-[150px] pb-[50px]">
          <div>
            <img className="main-img-slide h-[50px]" src={code} />
            <h3 className="text-[#ffffff] text-[48px]">
              Hi My name is{" "}
              <ReactTyped
                strings={["Sunil"]}
                typeSpeed={1}
                className="text-[#ca4949]"
              />
            </h3>
            <h3 className="text-[#ffffff] text-[48px]">I am a Passionate</h3>
            <h1>
              <ReactTyped
                strings={[
                  "Web Devloper",
                  "Web Designer",
                  "Full Stack Web Developer",
                ]}
                typeSpeed={100}
                className="text-[#ca4949] text-[48px]"
              />
            </h1>
            {data.map((item) => (
              <div key={item.id} className="mt-[30px]">
                <Link
                  to={item.pdf}
                  download=""
                  target="_blank"
                  className="text-[1.2rem] rounded-3xl text-[#ca4949] py-[11px] px-[28px] bg-transparent border border-[#ca4949] hover:bg-[#ca4949] hover:text-[#ffffff] transition-all duration-700"
                >
                  Resume
                </Link>
                <Link
                  to="/contact"
                  className="text-[1.2rem] mx-[20px] border border-[#ca4949] rounded-3xl text-[#ffffff] py-[11px] px-[28px] bg-[#ca4949] hover:bg-transparent hover:text-[#ca4949] transition-all duration-700"
                >
                  Contact
                </Link>
              </div>
            ))}
          </div>
          <div className="overflow-hidden md:block hidden">
            <img
              src={main}
              className="h-[400px] sm:w-auto w-[320px]  md:mx-0 sm:mx-[30px] mx-auto md:my-0  my-[50px] transition-all duration-500 hover:scale-[1.1]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
