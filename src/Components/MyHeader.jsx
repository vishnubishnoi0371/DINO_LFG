import React, { useState } from "react";
import logo from "../Assets/images/page_logo.png";
import botm_hero from "../Assets/images/hero_btm.webp";
import text from "../Assets/images/hero-text.webp";
import text2 from "../Assets/images/about-text.webp";
import plane from "../Assets/images/hero-plane.webp";
import openbtn from "../Assets/images/nav_line.svg";
import closebtn from "../Assets/images/close-line.svg";
import gudda from "../Assets/images/utility-gudda.png";
import smallgudda from "../Assets/images/header_smallguda.webp";
import { Discord, Insta, Twiter } from "../Common_svg/icon";
const MyHeader = () => {
  const [show, setshow] = useState(false);
  if (show === true) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  const Movement = () => {
    setshow(false);
  };
  return (
    <div className="overflow-hidden relative bg_head min-h-screen object-cover  bg-no-repeat bg-center ">
      <nav className=" nav_bg pt-4 md:pt-[28px]">
        <div className=" container py-[10px] sm:py-[15px] border-b-[4px] border-black rounded-[61px] bg-white  mx-auto max-w-[1132px] px-3">
          <div className=" flex items-center justify-between ">
            <div>
              <img
                className="ps-3 sm:ps-[24px] cursor-pointer"
                src={logo}
                alt="img"
              />
            </div>
            <div className="flex justify-between gap-[136px] items-center">
              <ul
                className={`${
                  show ? "left-0" : "left-[-100%]"
                } flex  gap-[28px]  z-40 min-h-screen fixed lg:min-h-fit lg:static w-full lg:w-auto items-center justify-center
              top-0 bg-[#d6efff] lg:bg-[unset]  max-lg:w-[100%] max-lg:flex-col flex-row max-lg:min-h-screen  right-0 ps-0 duration-[400ms] transition-all ease-linear`}
              >
                <li>
                  <a
                    onClick={Movement}
                    href="#about"
                    className=" font-normal text-lg font-chewy text-[#000000]  inline leading-[23.50%]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    onClick={Movement}
                    href="#toke"
                    className=" font-normal text-lg font-chewy text-[#000000]  inline leading-[23.50%]"
                  >
                    Tokenomic
                  </a>
                </li>
                <li>
                  <a
                    onClick={Movement}
                    href="#roadmap"
                    className="  font-normal text-lg font-chewy text-[#000000]  inline leading-[23.50%]"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    onClick={Movement}
                    href="#faq"
                    className="  font-normal text-lg font-chewy text-[#000000]  inline leading-[23.50%]"
                  >
                    Faq{" "}
                  </a>
                </li>
                <div className="block xs_1:hidden">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <button className="font-normal bg-btn bg-no-repeat bg-center p-[11px_36px]  text-lg font-chewy  text-[#000000] ">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </ul>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <a
                    href="https://twitter.com/login"
                    target="blank"
                    className="icons_hvr"
                  >
                    <Twiter />
                  </a>
                  <a
                    href="https://twitter.com/login"
                    target="blank"
                    className="icons_hvr"
                  >
                    <Discord />
                  </a>

                  <a
                    href="https://www.instagram.com/"
                    target="blank"
                    className="icons_hvr"
                  >
                    <Insta />
                  </a>

                  <button className="font-normal hidden xs_1:block duration-500  bg-btn bg-no-repeat bg-center p-[11px_36px]  text-lg font-chewy hover:text-white pb-4 text-[#000000] ">
                    Join Now
                  </button>
                </div>
              </div>
            </div>

            <div
              className=" position-relative  z-50  lg:hidden  "
              onClick={() => {
                setshow(!show);
              }}
            >
              {show ? (
                <img src={closebtn} alt="#" />
              ) : (
                <img src={openbtn} alt="#" />
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className=" container mx-auto max-w-[1132px] px-3 min-h-[90vh]">
        <div className="flex md:flex-row flex-col-reverse items-center justify-center flex-wrap  -mx-3 pt-[60px] md:pt-[130px]">
          <div className="sm:w-1/2 lg:w-1/2 px-3">
            <img
              className=" mx-auto animate-plane md:max-w-[395px] max-w-[235px] max-h-[125px] md:max-h-[245px]"
              src={plane}
              alt=""
            />
          </div>

          <div className="sm:w-1/2 lg:w-1/2 px-3">
            <img
              className="hidden md:block mx-auto md:max-w-[398px] md:max-h-[316px] max-w-[270px] lg:mt-[-50px] max-h-[216px]"
              src={text}
              alt=""
            />
            <img
              className="block md:hidden mx-auto md:max-w-[398px] md:max-h-[316px] max-w-[290px] mb-6 max-h-[226px]"
              src={text2}
              alt=""
            />
          </div>
        </div>
      </div>
      <img
        className="absolute object-cover bottom-[-5%] w-full right-[0%]"
        src={botm_hero}
        alt=""
      />
      <img
        className="absolute object-cover z-20 bottom-[9%] max-w-[110px] max-h-[170px] md:max-w-[210px] md:max-h-[270px]  animate-resg  sm:animate-fttr right-[0%]"
        src={gudda}
        alt=""
      />
      <img
        className="absolute object-cover z-10 bottom-[17%] max-w-[80px] max-h-[115px]  md:max-w-[130px] md:max-h-[165px]  animate-headgudda2 md:animate-headgudda right-[30%]  md:right-[45%]"
        src={smallgudda}
        alt=""
      />
    </div>
  );
};

export default MyHeader;
