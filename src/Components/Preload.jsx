import React from "react";
import logo from "../Assets/images/about-text.webp";
import gdda from "../Assets/images/toke-teddy.png";
function Preload() {
  setTimeout(() => {
    document.getElementById("Preloader").classList.add("hidden");
    document.body.classList.remove("!overflow-hidden");
  }, 4000);
  return (
    <>
      <div
        id="Preloader"
        className="h-screen bg-[#00141B] flex flex-col gap-4 justify-center items-center fixed top-0 left-0 w-full z-50 "
      >
        <div className="flex items-start justify-start">
          <img
            className="max-w-[50px]  animate-load md:max-w-[60px]"
            src={gdda}
            alt=""
          />
        </div>
        <img
          rel="preload"
          className="animate-bounce object-cover max-w-[210px] md:max-w-[410px]"
          src={logo}
          alt="logo"
        />

        <div className="loader w-[50px] h-[50px] relative border-[5px] border-solid border-[#0a4740] border-t-[#efb419] rounded-[50%] animate-spin"></div>
      </div>
    </>
  );
}

export default Preload;
