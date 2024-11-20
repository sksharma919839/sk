import React, { useState } from "react";

function Aboutcourse() {
  const [activeTab, setActiveTab] = useState(0);
  const onClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div>
        <div className="mt-[20px]">
          <ul className="flex items-center justify-evenly">
            <li className="sm:mr-[15px] mr-[5px]">
              <button
                className={
                  activeTab === 0
                    ? "sm:text-[18px] text-[16px] text-[#ca4949] about-btn transition-all duration-300 relative tab-li tab-on"
                    : "sm:text-[18px] text-[16px] text-[#ffffff] transition-all duration-300 relative tab-li"
                }
                onClick={() => onClick(0)}
              >
                Skills
              </button>
            </li>
            <li className="sm:mx-[15px] mx-[5px]">
              <button
                className={
                  activeTab === 1
                    ? "sm:text-[18px] text-[16px] text-[#ca4949] about-btn transition-all duration-300 relative tab-li tab-on"
                    : "sm:text-[18px] text-[16px] text-[#ffffff] transition-all duration-300 relative tab-li"
                }
                onClick={() => onClick(1)}
              >
                Education
              </button>
            </li>
            <li className="sm:mx-[15px] mx-[5px]">
              <button
                className={
                  activeTab === 2
                    ? "sm:text-[18px] text-[16px] text-[#ca4949] about-btn transition-all duration-300 relative tab-li tab-on"
                    : "sm:text-[18px] text-[16px] text-[#ffffff] transition-all duration-300 relative tab-li"
                }
                onClick={() => onClick(2)}
              >
                Front-End
              </button>
            </li>
            <li className="sm:mx-[15px] mx-[5px]">
              <button
                className={
                  activeTab === 3
                    ? "sm:text-[18px] text-[16px] text-[#ca4949] about-btn transition-all duration-300 relative tab-li tab-on"
                    : "sm:text-[18px] text-[16px] text-[#ffffff] transition-all duration-300 relative tab-li"
                }
                onClick={() => onClick(3)}
              >
                Back-End
              </button>
            </li>
            <li className="sm:mx-[15px] mx-[5px]">
              <button
                className={
                  activeTab === 4
                    ? "sm:text-[18px] text-[16px] text-[#ca4949] about-btn transition-all duration-300 relative tab-li tab-on"
                    : "sm:text-[18px] text-[16px] text-[#ffffff] transition-all duration-300 relative tab-li"
                }
                onClick={() => onClick(4)}
              >
                Database
              </button>
            </li>
          </ul>
        </div>
        <div>
          {activeTab === 0 && (
            <div>
              <div className="my-[20px]">
                <p className="text-[#ca4949] text-[14px]">Web Design</p>
                <h6 className="text-[16px] text-[#ffffff]">
                  Designing Web Interface
                </h6>
              </div>
              <div>
                <p className="text-[#ca4949] text-[14px]">Web Development</p>
                <h6 className="text-[16px] text-[#ffffff]">
                  Web App Devlopment
                </h6>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div>
              <div className="mt-[20px]">
                <p className="text-[#ca4949] text-[14px]">2024</p>
                <h6 className="text-[16px] text-[#ffffff]">
                  Web Devlopment From Samyak Computer Classes
                </h6>
              </div>
              <div className="my-[10px]">
                <p className="text-[#ca4949] text-[14px]">2022</p>
                <h6 className="text-[16px] text-[#ffffff]">
                  12th From RBSE Ajmer
                </h6>
              </div>
              <div className="my-[10px]">
                <p className="text-[#ca4949] text-[14px]">2020</p>
                <h6 className="text-[16px] text-[#ffffff]">
                  10th From RBSE Ajmer
                </h6>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div>
              <div className="mt-[20px]">
                <p className="text-[#ca4949] text-[14px]">2024</p>
                <h6 className="text-[16px] text-[#ffffff]">React JS</h6>
              </div>
              <div className="my-[10px]">
                <p className="text-[#ca4949] text-[14px]">2024</p>
                <h6 className="text-[16px] text-[#ffffff]">Javascript</h6>
              </div>
              <div className="my-[10px]">
                <p className="text-[#ca4949] text-[14px]">2024</p>
                <h6 className="text-[16px] text-[#ffffff]">CSS</h6>
              </div>
              <div className="my-[10px]">
                <p className="text-[#ca4949] text-[14px]">2024</p>
                <h6 className="text-[16px] text-[#ffffff]">HTML</h6>
              </div>
              <div className="my-[10px]">
                <p className="text-[#ca4949] text-[14px]">2024</p>
                <h6 className="text-[16px] text-[#ffffff]">TailwindCSS</h6>
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <div className="mt-[20px]">
                <p className="text-[#ca4949] text-[14px]">2024</p>
                <h6 className="text-[16px] text-[#ffffff]">Python</h6>
              </div>
              <div className="my-[10px]">
                <p className="text-[#ca4949] text-[14px]">2024</p>
                <h6 className="text-[16px] text-[#ffffff]">Django</h6>
              </div>
            </div>
          )}
          {activeTab === 4 && (
            <div>
              <div className="mt-[20px]">
                <p className="text-[#ca4949] text-[14px]">2024</p>
                <h6 className="text-[16px] text-[#ffffff]">MongoDB</h6>
              </div>
              <div className="my-[10px]">
                <p className="text-[#ca4949] text-[14px]">2024</p>
                <h6 className="text-[16px] text-[#ffffff]">PostGreSQL</h6>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Aboutcourse;
