import React from "react";
import { comment } from "../constants";

const ResourcesTile = ({
  img,
  tags,
  numComments,
  heading,
  by,
  byImg,
  date,
  isBig
}) => {
  return (
    <div className="bg-secondary p-[32px] flex-1 h-full w-full flex items-center relative rounded-[8px] gap-[32px]" style={{
      backgroundImage : `url(${isBig ? img : ''}) `,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`

    }}>
      {/* absolute top-0 max-w-[600px] z-0 */}
        <div className={`${isBig? "hidden" : "w-[300px] h-[250px]"}`}>
                <img src={img} className={`rounded-[8px] h-full aspect-square object-cover`} alt="" />
        </div>
        <div className={`${isBig ? ' bg-secondary  p-[32px] absolute bottom-[-70px] rounded-[8px]' : ' w-full h-full'}  rounded-[8px] flex flex-col justify-between items-start gap-[24px]`} 
        style={{
          width: `calc(100% - 64px)`
        }}
        > {/* right div */}
          <div className={`flex flex-row gap-[12px]  ${isBig? "z-10  " : ""}`}> {/* tags */}
            
              {tags.map((item)=>(
                    <p className="bg-main-gradient px-[24px] py-[8px] rounded-[8px]">{item}</p>
              ))}
              <div className="flex justify-between items-center gap-[4px]">
                {/* comments */}
                <img src={comment} alt="" />
                <p>{numComments === 0 ?  "No" : numComments} Comment</p>
              </div>
            
          </div>
          <div>{/* heading */}
                <h2 className="text-[24px] font-medium ">{heading}</h2>
          </div>
          <div className="flex gap-[16px] items-center justify-center"> {/* by Iinfo */}
                <div className="rounded-full w-[44px] h-[44px] border-[1px] border-white">
                    <img src={byImg} alt="" className="w-[44px] aspect-square object-cover"/>
                </div>
                <div className="flex flex-col gap-[4px] text-[16px]">
                    <h2 className=" font-medium">{by}</h2>
                    <p className="font-normal text-[#C0C0C0]">{date}</p>
                </div>

          </div>
        </div>
        
     
    </div>
  );
};

export default ResourcesTile;
