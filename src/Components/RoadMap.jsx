import map from "../Assets/images/RoadMapimg.webp";
import plane from "../Assets/images/road-plane.webp";
import gudda from "../Assets/images/road-gudda.webp";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const RoadMap = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <div id="roadmap" className=" relative mt-[-2px] bg-[#09655a]">
        <div className=" relative container mx-auto max-w-[1132px] px-3 overflow-hidden">
          <h2
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="text-white font-normal font-chewy text-[64px] text-center leading-[84px] pb-6 md:pb-[97px]"
          >
            Roadmap
          </h2>
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="flex items-center gap-[25px] lg:gap-[45px] xl:gap-[60px] xs_1:mt-[-80px] ps-[30px] sm:ps-0 mt-[-100px] md:mt-[-50px] lg:mt-0 sm:pb-[100px] md:pb-[60px] lg:pb-[170px]"
          >
            <p className=" text-[75px] sm:text-[120px] md:text-[150px] lg:text-[200px] text-[#FBA11D] font-normal  font-chewy leading-[261px]">
              01
            </p>
            <ul className="max-w-[440px] ps-3 xs_1:ps-0 md:max-w-[630px]">
              <li className="text-[12px] md:text-xl max-w-[200px] xs_1:max-w-[200px] sm:max-w-[300px] md:max-w-[400px] z-50 sm:text-base font-normal  font-balsa text-white list-disc mb-0 sm:mb-2 md:mb-4">
                Launch $DINO & Website & Social Media.
              </li>
              <li className="text-[12px] md:text-xl sm:text-base font-normal  font-balsa text-white list-disc mb-0 sm:mb-2 md:mb-4">
                Building the community.{" "}
              </li>
              <li className="text-[12px] md:text-xl sm:text-base font-normal  font-balsa text-white list-disc mb-0 sm:mb-2 md:mb-4">
                Marketing Phase 1.{" "}
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="flex items-center gap-[25px] lg:gap-[45px] xl:gap-[60px] xs_1:mt-[-50px] ps-[30px] sm:ps-0  mt-[-160px] xs_2:mt-[5px]   md:pb-[30px] sm:pb-[20px] xl:pb-[220px] lg:pb-[140px] sm:me-auto"
          >
            <p className=" text-[70px] sm:text-[120px] md:text-[150px] lg:text-[200px] text-[#8EC627] font-normal xs_1:ms-auto  font-chewy leading-[261px]">
              02
            </p>
            <ul className="max-w-[440px] md:max-w-[630px]">
              <li className="text-[12px] md:text-xl sm:text-base font-normal  font-balsa xs_1:ms-auto text-white list-disc mb-1 sm:mb-2 md:mb-4">
                CoinGecko & Coinmarketcap listing.{" "}
              </li>
              <li className="text-[12px] md:text-xl sm:text-base font-normal  font-balsa text-white list-disc mb-1 sm:mb-2 md:mb-4">
                Introduction to Buyback & Burning mechanism{" "}
              </li>
              <li className="text-[12px] md:text-xl sm:text-base font-normal  font-balsa text-white list-disc mb-1 sm:mb-2 md:mb-4">
                Marketing Phase 2.{" "}
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="flex items-center gap-[25px] lg:gap-[45px] xl:gap-[60px] xs_1:mt-[-30px] ps-[30px] sm:ps-0   mt-[-160px] xs_2:mt-[10px]  sm:pb-[80px] lg:pb-[190px]"
          >
            <p className=" text-[70px] sm:text-[120px] md:text-[150px] lg:text-[200px] text-[#D45B07] font-normal  font-chewy leading-[261px]">
              03
            </p>
            <ul className="max-w-[440px] md:max-w-[630px]">
              <li className="text-[12px] md:text-xl sm:text-base font-normal  font-balsa text-white list-disc mb-1 sm:mb-2 md:mb-4">
                Utility and Usecase Introduction.{" "}
              </li>
              <li className="text-[12px] md:text-xl sm:text-base font-normal  font-balsa text-white list-disc mb-1 sm:mb-2 md:mb-4">
                CEX Listings{" "}
              </li>
              <li className="text-[12px] md:text-xl sm:text-base font-normal  font-balsa text-white list-disc mb-1 sm:mb-2 md:mb-4">
                Marketing Phase 3.{" "}
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="flex items-center xs_1:justify-center gap-[25px] lg:gap-[45px] xl:gap-[60px] xs_1:mt-[-40px] xs_2:mt-[0px] ps-[30px] md:mt-[-20px] sm:ps-0  mt-[-170px]   lg:mt-0 xs_1:pb-[220px] "
          >
            <p className=" text-[70px] sm:text-[120px] md:text-[150px] lg:text-[200px] text-[#23aaac] font-normal   font-chewy leading-[261px]">
              04
            </p>
            <ul className="max-w-[440px]  md:max-w-[630px] ">
              <li className="text-[12px] md:text-xl sm:text-base font-normal  font-balsa  text-white list-disc mb-1 sm:mb-2 md:mb-4">
                Launch $ & Website &.
              </li>
              <li className="text-[12px] md:text-xl sm:text-base font-normal  font-balsa text-white list-disc mb-1 sm:mb-2 md:mb-4 ">
                Building the community.{" "}
              </li>
              <li className="text-[12px] md:text-xl sm:text-base font-normal  font-balsa text-white list-disc mb-1 sm:mb-2 md:mb-4 ">
                Marketing Phase 1.{" "}
              </li>
            </ul>
          </div>
          <img
            className=" absolute hidden xs_1:block top-[5%] left-0 right-0"
            src={map}
            alt=""
          />
        </div>
        <span className="border-[#0a4740] block xs_1:hidden  !border-dashed border-[4px] z-30 h-[61%] absolute left-3 top-[20%]"></span>{" "}
        <span className="rounded-full w-[20px] block xs_1:hidden h-[20px] bg-[#FBA11D] left-[1.4%] z-40 top-[24%] absolute"></span>
        <span className="rounded-full w-[20px]  block xs_1:hidden h-[20px] bg-[#8EC627] left-[1.4%] z-40 top-[40%] absolute"></span>
        <span className="rounded-full w-[20px]  block xs_1:hidden h-[20px] bg-[#D45B07] left-[1.4%] z-40 bottom-[38%] absolute"></span>
        <span className="rounded-full w-[20px] block xs_1:hidden h-[20px] bg-[#23aaac] left-[1.4%] z-40 bottom-[22%] absolute"></span>
        <img
          className="top-[10%] object-cover  animate-flip block xs_1:hidden left-0 max-w-[100px] max-h-[90px] absolute"
          src={plane}
          alt=""
        />
        <img
          className="bottom-[11%] object-cover  animate-flip block xs_1:hidden left-0 max-w-[70px] z-50 max-h-[60px] absolute"
          src={gudda}
          alt=""
        />
      </div>
    </>
  );
};

export default RoadMap;
