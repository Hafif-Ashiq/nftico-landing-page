import React from 'react'
import { BlurCircle, HeroCarousel } from '../components'
import { heroArray } from '../constants'

const Hero = () => {
  return (
    <section className='padding-section relative bg-background-color'>
        <BlurCircle css={"left-0 top-0 z-0"} />
        <div className='relative  z-10 flex flex-col gap-[80px]'>
          <HeroCarousel array={heroArray} />
          <div className=' bg-[rgba(231,231,231,0.24)]  h-[2px] w-full'></div>
        </div>
    </section>
  )

}

export default Hero