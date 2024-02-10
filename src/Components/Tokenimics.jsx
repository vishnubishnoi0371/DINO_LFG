import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import tree1 from "../Assets/images.webp/toke-tree-1.webp";
import tree2 from "../Assets/images.webp/toke-tree-2.webp";
import tree3 from "../Assets/images.webp/toke-tree-3.webp";
import tree4 from "../Assets/images.webp/toke-tree-4.webp";
import toke_teddy from "../Assets/images.png/toke-teddy.png";
import toke_card from "../Assets/images.webp/toke-card.webp";
import Fullcard from "../Assets/images.webp/toke-card-full.webp";
import toke_gudda from "../Assets/images.png/toke-gudda.png";
import toke_ep1 from "../Assets/images.png/toke-ep-1.png";
import { Line1, Line2, Line3, Line4, Line5, Toke_ep } from "../Common_svg/icon";

const Tokenimics = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div
      id="toke"
      className="relative toke_bg bg-no-repeat bg-center  mt-[-2px] bg-[#0a4740]"
    >
      <div className=" container mx-auto max-w-[1132px] px-3 pb-[120px] pt-[50px] md:py-[300px]  ]">
        <h2
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="text-white font-normal font-chewy text-[40px] sm:text-[64px] text-center z-30 leading-[84px] mb-1 md:mb-[75px]"
        >
          Tokenomics
        </h2>
        <div className="flex relative flex-col items-center justify-center pb-[40px]">
          <img
            className=" object-cover animate-flip mb-[-50px] hidden md:block  max-w-[90px] max-h-[100px] lg:max-w-[134px] lg:max-h-[157px]"
            src={toke_teddy}
            alt=""
          />
          <img
            className="object-cover  animate-flip pt-[-50px] hidden md:block md:max-w-[330px] w-full md:max-h-[180px] xl:max-w-[590px] xl:max-h-[306px] lg_2:max-w-[400px] lg_2:max-h-[220px]"
            src={toke_card}
            alt=""
          />
          <img
            className=" object-cover animate-flip mx-3 pt-[-50px] md:hidden block max-w-[230px] max-h-[140px] xs:max-w-[280px] xs:max-h-[160px] xs_2:max-w-[330px] xs_2:max-h-[180px] "
            src={Fullcard}
            alt=""
          />
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="absolute  flex  xs_2:gap-2 lg:gap-4 top-[23%] left-[-2%] xs:top-[28%] xs:left-[0%] xxs:top-[28%]  xxs:left-[5%] xs_2:top-[28%]  xs_2:left-[10%] sm:top-[28%]  sm:left-[14%]  md:top-[28%]  md:left-[8%] lg:top-[39%] xl:top-[32%] lg:left-[5%] xl:left-[0%]"
          >
            <div>
              <p className="text-[14px] sm:text-xl lg:text-[32px] font-normal md:leading-[39px] font-balsa text-[#FBA11D]">
                333,333,333
              </p>
              <p className="text-[12px] sm:text-base lg:text-[24px] font-normal font-balsa md:leading-[34px] text-end text-white">
                Supply
              </p>
            </div>
            <span>
              <Line1 />
            </span>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="absolute  xs_2:gap-2 lg:gap-4 flex  top-[18%]  right-[-5%] xs:top-[28%]  xs:right-[0%] xxs:top-[28%]  xxs:right-[4%]  xs_2:top-[28%]  xs_2:right-[8%]  sm:top-[28%]  sm:right-[18%] md:top-[28%]  md:right-[0%]  lg:top-[39%] xl:top-[32%] lg:right-[3%] xl:right-[0%]"
          >
            <span>
              <Line5 />
            </span>
            <p className="text-[14px] sm:text-xl lg:text-[32px] max-w-[90px] xs_2max-w-[130px] md:max-w-[210px] font-normal md:leading-[39px] font-balsa text-[#8EC627]">
              Liquidity lock for 1 year{" "}
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="absolute flex  xs_2:gap-2 lg:gap-4 bottom-[0%]  left-[3%] xs:bottom-[0%]  xs:left-[3%] xxs:bottom-[0%]  xxs:left-[10%] xs_2:bottom-[-10%]  xs_2:left-[14%] sm:bottom-[-13%]  sm:left-[18%] md:bottom-[-7%]  md:left-[12%] lg:bottom-[-7%]  xl:bottom-[1%] lg:left-[12%] xl:left-[4%]"
          >
            <div>
              <p className="text-[14px] sm:text-xl lg:text-[32px] max-w-[210px] font-normal md:leading-[39px] font-balsa text-[#23AAAC]">
                95% Uniswa <span className="block">5% Marketing</span>
              </p>
              <p className="text-[12px] sm:text-base lg:text-[24px] font-normal font-balsa md:leading-[34px] text-end text-white">
                Allocation
              </p>
            </div>
            <span>
              <Line2 />
            </span>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="absolute  xs_2:gap-2 lg:gap-4 flex bottom-[2%] right-[0%] xs:bottom-[2%] xs:right-[0%] xxs:bottom-[0%]  xxs:right-[8%] xs_2:bottom-[4%]  xs_2:right-[8%] sm:bottom-[2%]  sm:right-[12%] md:bottom-[2%]  md:right-[12%] lg:bottom-[-5%] xl:bottom-[7%] lg:right-[7%] xl:right-[4%]"
          >
            <span>
              <Line4 />
            </span>
            <p className="text-[14px] sm:text-xl lg:text-[32px] font-normal md:leading-[39px] font-balsa text-[#FB5352]">
              No Mint Function{" "}
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="absolute flex flex-col justify-center items-center sm:gap-3  bottom-[-10%] xs_2:bottom-[-15%] sm:bottom-[-25%] lg:bottom-[-17%] sm:right-[46%]"
          >
            <span>
              <Line3 />
            </span>

            <p className="text-[14px] sm:text-xl lg:text-[32px] max-w-[210px] font-normal leading-[39px] font-balsa text-[#D45B07]">
              No Tax{" "}
            </p>
          </div>
        </div>
      </div>

      <img
        className="absolute hidden  sm:block lg:max-w-[352px] lg:max-h-[446px] sm:max-w-[252px] sm:max-h-[246px] max-w-[252px] max-h-[246px]  bottom-0 left-[0%]"
        src={tree1}
        alt=""
      />
      <img
        className="absolute bottom-[7%] left-[] md:left-[30%]"
        src={tree2}
        alt=""
      />
      <img
        className="absolute bottom-5 right-[5%] md:right-[35%]"
        src={tree3}
        alt=""
      />
      <img
        className="absolute hidden md:block bottom-0 right-0"
        src={tree4}
        alt=""
      />
      <img className="absolute top-[15%] right-0" src={toke_ep1} alt="" />
      <Toke_ep />
      <span>
        <img
          className="absolute bottom-[0%] object-cover sm:bottom-0 left-0 lg:max-w-[210px] max-w-[100px] max-h-[70px] lg:max-h-[190px]  animate-flip  "
          src={toke_gudda}
          alt=""
        />
      </span>
    </div>
  );
};

export default Tokenimics;
