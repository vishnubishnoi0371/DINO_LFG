import utility_uppr from "../Assets/images/utility-upp.png";
import utility_btm from "../Assets/images/utility-btm.webp";
import utility_gudda_1 from "../Assets/images/utility-gudda.png";
import utility_gudda_2 from "../Assets/images/utility-gudda2.webp";
import utility_treeep from "../Assets/images/utility-tree-ep.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Utility = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <div className="relative  mt-[-3px] bg-[#0a4740] overflow-hidden">
        <div className=" container mx-auto max-w-[1014px] px-3 py-[70px] md:py-[200px]">
          <h2 className="text-[42px] sm:text-[64px] font-normal font-chewy sm:leading-[84px] text-white text-center mb-3 md:mb-[158px]">
            Utility and Usecase
          </h2>
          <div className="max-w-[1014px] z-30 py-4 sm:py-[30px] md:py-[62px] px-5 sm:px-[40px] border relative rounded-[20px] border-white bg-[#09655a] mb-[20px] sm:mb-[30px] md:mb-[125px]">
            <div className="flex flex-row items-center justify-center flex-wrap  -mx-3">
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="w-full xs_1:w-9/12 px-3"
              >
                <p className="text-[25px] sm:text-[32px] sm:leading-[39px] font-normal !z-30  font-balsa max-w-[640px] mb-4 sm:mb-[28px] text-white">
                  We are going to work hard in to add
                  <span className="text-[#8EC627] font-bold"> $</span>
                  <span className="text-[#FBA11D] font-bold">D</span>
                  <span className="text-[#23AAAC] font-bold">I</span>
                  <span className="text-[#D45B07] font-bold">N</span>
                  <span className="text-[#FB5352] font-bold">O</span> main
                  platforms as a form of payment
                </p>
                <p className="text-[25px] sm:text-[32px] sm:leading-[39px] lg:text-nowrap font-normal  font-balsa max-w-[695px] text-white">
                  You will be able to buy a lot of things with{" "}
                  <span className="text-[#8EC627] font-bold">$</span>
                  <span className="text-[#FBA11D] font-bold">D</span>
                  <span className="text-[#23AAAC] font-bold">I</span>
                  <span className="text-[#D45B07] font-bold">N</span>
                  <span className="text-[#FB5352] font-bold">O</span>
                </p>
              </div>
              <div className="w-full xs_1:w-3/12 px-3">
                <img
                  className="absolute opacity-[0.3] md:opacity-[1] z-10 bottom-0 right-[2%] md:max-w-[295px] md:max-h-[360px]  max-w-[205px] max-h-[290px] animate-scat"
                  src={utility_gudda_1}
                  alt="gudda"
                />
              </div>
            </div>
          </div>
          <div className="max-w-[1014px] sm:z-30 relative py-4 sm:py-[30px] md:py-[95px] ps-5 sm:ps-[40px] pe-[27px] border rounded-[20px] border-white bg-[#09655a] mb-[100px] lg:mb-[268px]">
            <div className="flex flex-row items-center justify-end flex-wrap  -mx-3">
              <div className="w-full xs_1:w-8/12 px-3">
                <img
                  className="absolute opacity-[0.3] md:opacity-[1]  bottom-0 left-[0%] sm:max-w-[205px] sm:max-h-[195px] md:max-w-[345px] md:max-h-[435px] max-w-[135px] max-h-[150px]  animate-cycle"
                  src={utility_gudda_2}
                  alt="gudda"
                />
              </div>
              <div className="w-full xs_1:w-8/12 px-3">
                <div
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="flex justify-end items-end"
                >
                  <p className="text-[25px] sm:text-[32px] z-10 md:leading-[39px] font-normal text-start md:text-end  font-balsa max-w-[720px] mb-[28px] text-white">
                    We are going to staking and byback/ burning mechanism
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute object-cover w-full top-0 w-100"
          src={utility_uppr}
          alt="ellipse"
        />
        <img
          className="absolute  object-cover bottom-[7%] lg:bottom-[25%] md:max-w-[370px] md:max-h-[500px] max-w-[180px] max-h-[200px] right-[0%] w-100"
          src={utility_treeep}
          alt="ellipse"
        />
        <img
          className="absolute object-cover w-full bottom-[-2%] "
          src={utility_btm}
          alt="ellipse"
        />
      </div>
    </>
  );
};

export default Utility;
