import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Form from "./Form";
import axios from "axios";

function Contact() {
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
        <div className="md:flex justify-evenly pt-[120px]">
          <div className="md:w-[35%] md:mx-auto mx-[20px]">
            <h2 className="text-[#ffffff] text-[60px] mb-[30px] font-bold">
              Contact Me
            </h2>
            <div className="flex items-center my-[25px]">
              <IoIosMail className="text-[#ca4949]" size={30} />
              <a
                href="mailto:sksharma919839@gmail.com"
                className="text-[#ffffff] text-[16px] mx-[10px]  transition-all  duration-300 hover:text-[#ca4949]"
              >
                sksharma919839@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt size={25} className="text-[#ca4949]" />
              <a
                href="tel:+919166985539"
                className="text-[#ffffff]  text-[16px] mx-[10px]  transition-all  duration-300 hover:text-[#ca4949]"
              >
                (+91) 9166985539
              </a>
            </div>
            <div className="flex my-[25px]">
              <Link
                to="https://www.linkedin.com/in/sunil-sharma-313a31217/"
                target="_blank"
              >
                <FaLinkedin
                  size={30}
                  className="text-[#757575] mx-[10px] mt-3 hover:mt-2 hover:text-[#0A66C2] transition-all duration-700"
                />
              </Link>
              <Link
                to="https://www.instagram.com/sk_sharma_75/"
                target="_blank"
              >
                <AiFillInstagram
                  size={30}
                  className="text-[#757575] mt-3 hover:mt-2 hover:text-[#ca4949] mx-[5px]  transition-all duration-700"
                />
              </Link>
              <Link to="https://wa.me/qr/SCCVDYWT7ZU6O1" target="_blank">
                <IoLogoWhatsapp
                  size={30}
                  className="text-[#757575] mt-3 hover:mt-2 hover:text-[#ca4949] mx-[10px] transition-all duration-700"
                />
              </Link>
            </div>
            {data.map((item) => (
              <div key={item.id} className="my-[80px]">
                <Link
                  to={item.pdf}
                  download=""
                  target="_blank"
                  className="text-[18px] text-[#ffffff] transition-all duration-700 bg-[#ca4949] border border-[#ca4949] hover:text-[#ca4949 ] px-[50px] py-[14px]  rounded-xl hover:bg-transparent"
                >
                  Download CV
                </Link>
              </div>
            ))}
          </div>
          <div className="md:w-[55%] md:mx-auto mx-[20px]">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
