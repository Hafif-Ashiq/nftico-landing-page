import React from "react";
import { heart, reload, verifiedTick } from "../constants";

const TrendingTiles = ({
  img,
  by,
  name,
  startingPrice,
  highestBid,
  likes,
  verified,
}) => {
  return (
    <div
      className="
            bg-secondary 
            p-[24px] 
            w-[350px] 
            h-[500px] 
            flex 
            flex-col 
            justify-between 
            items-stretch 
            rounded-[12px]
    "
    >
      <div className="rounded-[8px] relative group">
        <img src={img} alt="" className="w-full h-full" />
        <div className="absolute group-hover:opacity-100 opacity-0 gap-[8px] flex top-0 left-0 p-[16px] justify-end items-center w-full transition-all duration-500 ease-out">
          <button className="bg-[rgba(30,27,51,0.72)] grid place-items-center px-[12px] py-[8px] rounded-[4px]">
            <img src={reload} alt="" />
          </button>
          <button className="bg-[rgba(30,27,51,0.72)]  flex justify-between items-center gap-[4px] px-[12px] py-[6px] rounded-[4px]">
            <img src={heart} alt="" />
            <h2 className="font-medium text-[14px]">{likes}</h2>
          </button>
        </div>
        <div className="absolute p-[16px] bottom-0 left-0  justify-center group-hover:opacity-100 opacity-0  flex w-full items-center transition-all duration-500 ease-out">
          <button className="px-[40px] py-[16px] border-[0.5px] border-[rgba(231,231,231,0.4)] bg-main-gradient rounded-[8px] text-[14px] font-semibold ">
            Buy Now
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start">
        <div className="flex gap-[4px] items-center">
          <p className="text-[14px] capitalize">{by}</p>
          <div
            className={`bg-[#F4C558] rounded-full ${
              verified ? "grid" : "hidden"
            } place-items-center`}
          >
            <img src={verifiedTick} alt="" />
          </div>
        </div>
        <h2 className="text-[24px] font-medium capitalize">{name}</h2>
      </div>
      <div className="border-[1px] border-[rgba(231,231,231,0.4)] box-border bg-[#211D38] rounded-[8px]  flex flex-col justify-between items-stretch p-[16px] gap-[10px]">
        <div className="flex items-center justify-between text-[12px] capitalize text-[#C0C0C0]">
          <p className="">From</p>
          <p className="">Highest Bid</p>
        </div>
        <div className="flex items-center justify-between text-[14px] capitalize ">
          <p className="">{startingPrice}</p>
          <p className="">{highestBid}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingTiles;
