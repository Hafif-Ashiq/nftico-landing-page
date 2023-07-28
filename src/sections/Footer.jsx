import React from "react";
import { Links } from "../components";
import { categoriesLinks, communityLinks, marketLinks } from "../constants";

const Footer = () => {
  return (
    <section className="padding-section flex flex-col gap-[70px] justify-between items-center  bg-gradient-primary text-white">
      <div className="flex flex-row md:flex-nowrap flex-wrap justify-between items-start md:gap-0 gap-[60px] w-full">
        <Links heading={"MarketPlace"} array={marketLinks} />
        <Links heading={"Community"} array={communityLinks} />
        <Links heading={"Categories"} array={categoriesLinks} />
        <div className="flex flex-col justify-center items-start gap-[30px]">
          <h2 className="sm:text-[48px] font-bold text-[32px]">NFTico</h2>
          <p className="sm:text-[16px] max-w-[400px] text-[14px]">
            If you're an NFT enthusiast or are looking to download our NFT App.
          </p>
          <form action="">
            <input type="text" placeholder="Type Your Email" className="bg-secondary px-[30px] py-[20px] text-[16px] rounded-l-[8px] focus:outline-none" />
            <button type="submit" className="bg-main-gradient font-semibold px-[30px] py-[20px] text-[16px] rounded-r-[8px]">Subscribe</button>
          </form>
          <div></div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Footer;
