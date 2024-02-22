import React, { useState } from "react";
import logo from "../Assets/images.png/page_logo.png";
import botm_hero from "../Assets/images.webp/hero_btm.webp";
import text from "../Assets/images.webp/hero-text.webp";
import text2 from "../Assets/images.webp/about-text.webp";
import plane from "../Assets/images.webp/hero-plane.webp";
import gudda from "../Assets/images.png/utility-gudda.png";
import smallgudda from "../Assets/images.webp/header_smallguda.webp";
import {
  Close_line,
  Discord,
  Insta,
  Nav_line,
  Twiter,
} from "../Common_svg/icon";
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
      <nav className=" nav_bg pt-4 md:pt-[28px] bg-[#d6efff] ">
        <div className=" container py-[10px] sm:py-[15px] border-b-[4px] border-black rounded-[61px] bg-white  mx-auto max-w-[1132px] px-3">
          <div className=" flex items-center justify-between">
            <img
              className="ps-3 sm:ps-[24px] cursor-pointer"
              src={logo}
              alt="img"
            />
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
                    className=" font-normal text-lg font-chewy text-[#000000]  duration-300 relative after:absolute after:bg-[#000] after:w-0 after:h-[3px] after:bottom-[-2px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300 inline hover:after:w-[100%] leading-[23.50%]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    onClick={Movement}
                    href="#toke"
                    className=" font-normal text-lg font-chewy text-[#000000]  inline leading-[23.50%] duration-300 relative after:absolute after:bg-[#000] after:w-0 after:h-[3px] after:bottom-[-2px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300  hover:after:w-[100%]"
                  >
                    Tokenomic
                  </a>
                </li>
                <li>
                  <a
                    onClick={Movement}
                    href="#roadmap"
                    className="  font-normal text-lg font-chewy text-[#000000]  inline leading-[23.50%] duration-300 relative after:absolute after:bg-[#000] after:w-0 after:h-[3px] after:bottom-[-2px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300  hover:after:w-[100%]"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    onClick={Movement}
                    href="#faq"
                    className="  font-normal text-lg font-chewy text-[#000000]  inline leading-[23.50%] duration-300 relative after:absolute after:bg-[#000] after:w-0 after:h-[3px] after:bottom-[-2px] after:right-[50%] hover:after:right-[0] after:rounded-full  after:duration-300  hover:after:w-[100%]"
                  >
                    Faq{" "}
                  </a>
                </li>
                <div className="block xs_1:hidden">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <button className="font-normal text-nowrap bg-btn bg-no-repeat bg-center p-[11px_36px]  text-lg font-chewy  text-[#000000] ">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
              </ul>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 sm:gap-2">
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

                  <button className="font-normal text-nowrap hidden xs_1:block duration-500  bg-btn bg-no-repeat bg-center p-[11px_36px]  text-lg font-chewy hover:text-white pb-4 text-[#000000] ">
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
                <span>
                  <Close_line />
                </span>
              ) : (
                <span>
                  <Nav_line />
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className=" container mx-auto max-w-[1132px] px-3 min-h-[90vh]">
        <div className="flex md:flex-row flex-col-reverse items-center justify-center flex-wrap  -mx-3 pt-[60px] md:pt-10 lg:pt-[130px]">
          <div className="sm:w-1/2 lg:w-1/2 px-3">
            <img
              className=" mx-auto animate-plane lg:max-w-[395px] lg:max-h-[235px] md:max-w-[335px] max-w-[195px] max-h-[125px] md:max-h-[245px]"
              src={plane}
              alt=""
            />
          </div>

          <div className="sm:w-1/2 lg:w-1/2 px-3">
            <img
              className="hidden md:block mx-auto lg:max-w-[398px] lg:max-h-[316px] md:max-w-[298px] md:max-h-[216px] max-w-[270px] lg:mt-[-50px] max-h-[216px]"
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
        className="absolute object-cover z-20 bottom-[9%] max-w-[110px] max-h-[170px] lg:max-w-[210px] lg:max-h-[270px]  animate-resg  sm:animate-fttr right-[0%]"
        src={gudda}
        alt=""
      />
      <img
        className="absolute object-cover z-10 bottom-[17%] max-w-[80px] max-h-[115px]  lg:max-w-[130px] lg:max-h-[165px]  animate-headgudda2 md:animate-headgudda right-[30%]  md:right-[45%]"
        src={smallgudda}
        alt=""
      />
    </div>
  );
};

export default MyHeader;
