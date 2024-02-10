import React from "react";
import footertext from "../Assets/images/about-text.webp";
import ft_img from "../Assets/images/ft-bg.webp";
import ft_gudda from "../Assets/images/utility-gudda.png";
import { Discord2, Insta2, Twiter2 } from "../Common_svg/icon";

const MyFooter = () => {
  return (
    <div className="bg-[#0a4740] relative mt-[-2px] pt-10 md:pt-[125px]">
      <div className="pb-[150px] md:pb-[300px] flex flex-col items-center justify-center">
        <img className="mb-5 md:mb-[33px] " src={footertext} alt="" />
        <p className="text-base font-normal max-w-[376px] leading-[17px] text-center text-white mb-5 md:mb-[33px]">
          Sed tempus pretium est, vestibulum dapibus mauris viverra id.
          Curabitur feugiat porta lorem,{" "}
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/"
            target="blank"
            className="hover:translate-y-[-8px]  transition-all duration-500"
          >
            <Insta2 />
          </a>
          <a
            href="https://support.discord.com/hc/en-us/community/posts/360056220432-Login"
            target="blank"
            className="hover:translate-y-[-8px]  transition-all duration-500"
          >
            <Discord2 />
          </a>
          <a
            href="https://twitter.com/login"
            target="blank"
            className="hover:translate-y-[-8px]  transition-all duration-500"
          >
            <Twiter2 />
          </a>
        </div>
      </div>
      <img
        className="absolute object-cover bottom-0 z-30 right-0 sm:right-[10%] md:max-w-[211px] max-w-[100px] max-h-[140px] md:max-h-[270px] animate-fttrsmall  md:animate-fttr "
        src={ft_gudda}
        alt=""
      />
      <img
        className="absolute object-cover bottom-0 w-full"
        src={ft_img}
        alt=""
      />
    </div>
  );
};

export default MyFooter;
