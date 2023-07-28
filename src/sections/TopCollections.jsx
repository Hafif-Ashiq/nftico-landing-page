import React, { useEffect, useState } from "react";
import { CollectionTiles, Title } from "../components";
import { collectionsArray } from "../constants";

const TopCollections = () => {
  const [day, setDay] = useState(0);
  const [blockchain, setBlockChain] = useState(0);

  const days = ["1 DAY", "7 DAYS", "30 DAYS"];
  const blockchains = ["Ethereum", "Solana", "APT", "BNB"];
  return (
    <section
      className="padding-section 
        bg-background-color 
        flex flex-col
        gap-[60px]"
    >
      <div
        className="flex 
        justify-between 
        items-center 
        w-full 
        relative"
      >
        <Title heading={"Top Collections"} />
        <div
          className="flex 
            justify-center 
            items-center 
            gap-[8px] 
            absolute 
            left-[50%] 
            translate-x-[-50%] "
        >
          {/* <input type="radio" name="" id="" /> */}
          {days.map((item, index) => (
            <button
              key={item}
              onClick={() => setDay(index)}
              className={`${
                index === day ? "bg-main-gradient" : "bg-secondary "
              } 
              px-[20px] 
              py-[12px] 
              text-[14px] 
              border-[1px] 
              border-solid 
              border-[rgba(231,231,231,0.4)] 
              rounded-[8px]`}
            >
              {item}
            </button>
          ))}
        </div>
        <div
          className="flex 
            justify-center 
            items-center 
            relative"
        >
          <select
            name=""
            id=""
            className="px-[14px]
                py-[12px]
                bg-secondary 
                border-[1px] 
                border-solid 
                border-[rgba(231,231,231,0.4)] 
                focus:bg-main-gradient 
                rounded-[8px] 
                text-[14px] 
                cursor-pointer 
                outline-none "
          >
            {blockchains.map((item, index) => (
              <option
                className="cursor-pointer "
                key={item}
                onClick={() => setBlockChain(index)}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
        <div className="flex justify-between items-center flex-wrap gap-[24px]">
            {collectionsArray.map((item)=>(
                <CollectionTiles
                 key={item.id}
                 heading={item.heading}
                 percent={item.percent}
                 price={item.price}
                 quantity={item.quantity}
                 img={item.img}
                 />
            ))}
        </div>
        
        <div className="grid place-items-center">
        <button className="bg-main-gradient px-[40px] py-[16px] font-semibold text-[14px] rounded-[8px]">See All Collections</button>
        </div>
        
    </section>
  );
};

export default TopCollections;
