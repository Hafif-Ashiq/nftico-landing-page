import React from "react";
import { currencyIcon, heart, shape } from "../constants";

const NoteableTile = ({ img, heading, likes, price, people, popular }) => {
  return (
    <div className="flex flex-col gap-[24px] p-[24px] min-w-[300px]  justify-between items-center rounded-[12px] bg-secondary ">
      <div className="rounded-[8px] w-full max-h-[500px]">
        <img src={img} className="w-full object-cover " alt="" />
      </div>
      <div className="flex flex-col gap-[24px] items-start justify-center w-full">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-[24px] font-medium">{heading}</h2>
          <div className={`${popular? "hidden" : "flex"} gap-[6px] items-center`}>
            <img src={heart} className="w-[14px] h-[14px]" alt="" />
            <p className="text-[14px] ">{likes}</p>
          </div>
        </div>
        
          <div className="flex justify-between items-center w-full"> 
          <div className="flex justify-start items-center gap-[6px]">
            <img src={popular ? shape : currencyIcon } alt="" />
            <p className="text-[14px]">
              From <span className="font-medium">{price}</span> Flow
            </p>
          </div>
          <div className={`${popular ? "hidden" : "block"}`}>
          peopleImages
          </div>
          <div className={`${popular? "flex" : "hidden"} gap-[6px] items-center`}>
            <img src={heart} className="w-[14px] h-[14px]" alt="" />
            <p className="text-[14px] ">{likes}</p>
          </div>
          </div>
          <div className={`${popular? "block" : "hidden"} h-[1px] w-full bg-[rgba(231,231,231,0.24)]`}></div>
          <button className={`${popular? "justify-start" : "w-full justify-center "} rounded-[8px] py-[12px] px-[24px] items-center flex  border-[1px] border-solid  border-[rgba(231,231,231,0.4)] hover:border-none hover:py-[13px]  text-[14px] hover:bg-main-gradient hover:font-semibold `}>
            {popular ? "Place Bid" : "Live Now"}
          </button>
        
      </div>
    </div>
  );
};

export default NoteableTile;
 