import axios from "axios";
import React, { useState } from "react";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setMessage("Form Submited Successfuly");
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://omhardik89.pythonanywhere.com/contact/",
        data
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            className="text-[#757575] bg-[#262626] text-[20px] my-[20px] px-[20px] rounded-xl h-[50px] w-[90%]"
            name="name"
            placeholder="Enter Your Name Here"
            onChange={handleChange}
            value={data.name}
            required
          />
        </label>
        <label>
          <input
            type="email"
            required
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter Your Email Here"
            className="text-[#757575] bg-[#262626] text-[20px] my-[20px] px-[20px] rounded-xl h-[50px] w-[90%]"
          />
        </label>
        <label>
          <input
            type="text"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={handleChange}
            required
            className="text-[#757575] bg-[#262626] text-[20px] my-[20px] px-[20px] rounded-xl h-[50px] w-[90%]"
            placeholder="Enter Your Mobile Number Here"
          />
        </label>
        <label>
          <textarea
            typeof="message"
            value={data.message}
            onChange={handleChange}
            required
            name="message"
            placeholder="Enter Your Message Here"
            className="text-[#757575] bg-[#262626] text-[25px] my-[20px] px-[20px] rounded-xl w-[90%] h-[160px]"
          ></textarea>
        </label>
        <button
          type="submit"
          className="text-[18px] text-[#ffffff] transition-all duration-700 bg-[#31c92c] border border-[#31c92c] hover:text-[#31c92c] px-[50px] py-[14px] mt-[10px] mb-[60px]  rounded-xl hover:bg-transparent"
        >
          Submit
        </button>
      </form>
      <div>
        {message && (
          <p className="w-[250px] py-[20px] px-[10px] top-[30px] right-[20px] bg-[#53d0a2]  rounded-lg fixed z-[99]">
            {message}
            <br /> I have Contact soon.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
