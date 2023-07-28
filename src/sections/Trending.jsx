import React from 'react'
import { BlurCircle, Title } from '../components'
import { trendingArray } from '../constants'
import TrendingTiles from '../components/TrendingTiles'

const Trending = () => {
  return (
    <section className='padding-section py-8 bg-background-color flex flex-col gap-[60px] relative'>
      <BlurCircle css={"right-0 "} />
        <Title heading={"Trending NFTs"}/>
        <div className='flex justify-between items-center gap-[24px] z-10'>
          {
            trendingArray.map((item)=>(
              <TrendingTiles
                key={item.id}
                name={item.name}
                by={item.by}
                highestBid={item.highestBid}
                img={item.img}
                startingPrice={item.startingPrice}
                verified={item.verified}
                likes={item.likes}
              />
            ))
          }
        </div>
    </section>
  )
}

export default Trending