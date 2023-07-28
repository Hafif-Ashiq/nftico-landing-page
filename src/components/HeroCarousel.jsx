import React, { useEffect, useState } from "react";
import { arrowRight, figures, play } from "../constants";

const HeroCarousel = ({ array }) => {
  const [item, setItem] = useState(0);

  const handleIndex = (index) => {
    setItem(index);
  };

  useEffect(() => {
    const interval = window.setTimeout(() => {
      item === array.length - 1 ? setItem(0) : setItem(item + 1);

    }, 3000);

    return () => window.clearTimeout(interval);
  }, [item]);

  return (
    <div className="flex flex-col gap-[100px]">
      <div className="flex justify-between items-center relative">
        <div className="flex flex-col gap-[30px] max-w-[800px] relative">
          <h2 className="text-[64px] font-bold select-none">{array[item].heading}</h2>
          <p className="text-[24px]">{array[item].desc}</p>
          <div className="flex gap-[12px]">
            <button className="text-[16px] font-medium bg-main-gradient px-[32px] py-[12px] rounded-[8px]">
              {array[item].b1}
            </button>
            <button className="text-[16px] font-medium bg-secondary px-[32px] py-[12px] rounded-[8px]">
              {array[item].b2}
            </button>
          </div>
          <a
            href=""
            className="flex w-[230px] justify-start items-center gap-[8px] font-medium hover:underline"
          >
            <img src={play} alt="" />
            <p className="text-[16px]"> Learn more about Nftico</p>
          </a>
          <div className="absolute right-[-150px] bottom-[150px] border-primary-text border-[1px] rounded-full border-dashed w-[133px] h-[133px] grid place-items-center outline-primary-text outline outline-[2px] outline-offset-[10px] rotate-[18deg]">
            <img
              src={array[item].mediumImg}
              className="w-[128px] h-[128px] object-cover"
              alt=""
            />
          </div>
          <div className="absolute right-[-20px] bottom-[90px] border-primary-text border-[1px] rounded-full border-dashed w-[75px] h-[75px] grid place-items-center outline-primary-text outline outline-[2px] outline-offset-[7px] rotate-[18deg]">
            <img
              src={array[item].smallImg}
              className="w-[70px] h-[70px] object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="relative">
          <a className="absolute w-[86px] h-[86px] bg-secondary grid place-items-center rounded-full top-[50%] translate-y-[-50%] left-[-43px] cursor-pointer">
            <img src={arrowRight} alt="" />
          </a>
          <img
            src={array[item].largeImg}
            className="object-cover rounded-[8px] w-[500px] h-[700px]"
            alt=""
          />
        </div>
        <div className="absolute bottom-[-4px] flex justify-center items-center gap-[4px] left-[50%] translate-x-[-50%]">
          {array.map((arrItem, index) => (
            <div
              key={index}
              onClick={() => handleIndex(index)}
              className={`${
                index === item
                  ? "w-[40px] bg-main-gradient "
                  : "w-[16px] bg-[#D9D9D9] cursor-pointer"
              } h-[8px] w-[16px] rounded-full  transition-all duration-[400ms] ease-out`}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="font-normal text-[20px] max-w-[470px]">
          We will take all the worry and guesswork out of your blockchain and
          cryptocurrency concerns.
        </h2>
        {figures.map((fig,index)=>(
            <div key={fig.id} className={` flex flex-col items-center justify-center`}>
                <h2 className={`${index === item ? "bg-main-gradient bg-clip-text text-transparent overflow-hidden": "text-primary-text"} font-semibold text-[36px]`}>{fig.number}</h2>
                <p className="font-medium text-[20px]">{fig.desc}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
