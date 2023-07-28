import React from 'react'
import { diamond } from '../constants'
import { BlurCircle } from '../components'

const WalletConnect = () => {
  return (
    <section className='padding-section flex justify-center gap-[60px] items-center'>
        <div className='relative flex-1'>
            <img src={diamond} className='relative z-10 aspect-auto object-cover' />
            <BlurCircle css={"left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] "} />
        </div>
        <div className='flex flex-col justify-center items-stretch gap-[60px] flex-1'>
            <div className='flex flex-col gap-[28px] justify-center items-start'>
            <h2 className='font-medium text-[44px] '>Create, Sell well & Collect Your Best Very Fast NFTs.</h2>
            <p className='text-[#C0C0C0] font-normal text-[18px] ' >
              Create, Sell well & Collect Your Best Very Fast NFTs.The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless
              </p>
            </div>
            <div className='flex items-center justify-start'>
              <button className='bg-main-gradient py-[12px] px-[20px] font-medium text-[16px] flex items-center justify-center rounded-[8px]'>
                Connect Wallet
              </button>
            </div>
        </div>
        

    </section>
  )
}

export default WalletConnect