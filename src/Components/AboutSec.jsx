import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import text from "../Assets/images.webp/about-text.webp";
import tree1 from "../Assets/images.webp/about-tree-1.webp";
import tree_teddy from "../Assets/images.webp/tree-teddy.webp";
import tree2 from "../Assets/images.webp/about-tree-2.webp";

const AboutSec = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <div id="about" className="bg-[#09655a] relative pt-6 md:pt-[88px]">
        <div className=" container mx-auto max-w-[1132px] px-3 ">
          <div className="flex !justify-center">
            <p
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="text-white flex items-center gap-2 font-normal font-chewy text-[42px] md:text-[64px] leading-[84px] mb-5 md:mb-[48px]"
            >
              About
              <span>
                <img className="max-[500px]:w-[70%]" src={text} alt="" />
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <p
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="font-normal text-white z-10 text-base sm:text-[24px] sm:leading-[29px] font-balsa text-center mb-[18px]"
            >
              $DINO is a meme coin with very strong utility.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="font-normal z-30 text-white max-w-[560px] text-base sm:text-[24px] sm:leading-[29px] font-balsa text-center mb-[10px]"
            >
              Biggest problem of meme coins is lack of utility and usecase,
              <span className="text-[#8EC627] font-bold">$</span>
              <span className="text-[#FBA11D] font-bold">D</span>
              <span className="text-[#23AAAC] font-bold">I</span>
              <span className="text-[#D45B07] font-bold">N</span>
              <span className="text-[#FB5352] font-bold">O</span> is going to
              fix it.{" "}
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="font-normal z-40 text-white text-base sm:text-[24px] sm:leading-[29px] font-balsa text-center mb-[14px] max-w-[522px]"
            >
              We want to bring a lot of usecases and utility to $DINO holders,
              just sit back and relax.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="font-normal z-40 text-white text-base sm:text-[24px] sm:leading-[29px] font-balsa text-center  mb-[24px] max-w-[592px]"
            >
              In $DINO, we want to build a very strong community, that’s why we
              are going to have a lot of games and crypto tips in our Telegram
              and Twitter.
            </p>
          </div>
        </div>
        <img
          className="absolute bottom-[-3%] opacity-[0.3] md:opacity-[1] md:bottom-[-23%] z-30 left-0 md:max-w-[250px] md:max-h-[340px] max-w-[125px] max-h-[160px]"
          src={tree1}
          alt=""
        />
        <img
          className="absolute opacity-[0.3] md:opacity-[1] bottom-[-3%] md:bottom-[-20%] z-20 right-0 md:max-w-[252px] md:max-h-[446px] max-w-[125px] max-h-[260px]"
          src={tree2}
          alt=""
        />
        <img
          className="absolute  opacity-[0.6] md:opacity-[1] bottom-[-12%] animate-flip z-30 md:bottom-[-20%] right-3 max-w-[100px] md:max-w-[170px] max-h-[100px] md:max-h-[210px]"
          src={tree_teddy}
          alt=""
        />
      </div>
    </>
  );
};
export default AboutSec;
