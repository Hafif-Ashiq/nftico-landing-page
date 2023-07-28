import React, { useState } from 'react'
import { Title } from '../components'
import { noteableDropsArray } from '../constants';
import NoteableTile from '../components/NoteableTile';

const PopularNFTs = () => {
    const [type,setType] = useState(0) 

    const types = ["All NFTs", "Art", "Games","Sports", "Trending Cards"];
  return (
   <section className='padding-section mt-[100px] flex flex-col gap-[80px]'>
    <div className='flex justify-between items-center'>
        <Title heading={"Browse Popular NFTs"}/>
        <div
          className="flex 
            justify-center 
            items-center 
            gap-[8px] 
            "
        >
          {/* <input type="radio" name="" id="" /> */}
          {types.map((item, index) => (
            <button
              key={item}
              onClick={() => setType(index)}
              className={`${
                index === type ? "bg-main-gradient" : "bg-transparent "
              } 
              px-[20px] 
              py-[12px] 
              text-[14px]  
              font-medium           
              rounded-[8px]`}
            >
              {item}
            </button>
          ))}
        </div>
    </div>

    <div className='flex justify-between items-center gap-[24px] relative z-10'>
            {noteableDropsArray.map((item)=>(
                
                <NoteableTile key={item.id} heading={item.heading}
                img={item.img}
                likes={item.likes}
                
                price={item.price}
                popular={true}
                />
                
            ))}
        </div>

   </section>
  )
}

export default PopularNFTs