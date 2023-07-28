import React from 'react'

const Title = ({heading}) => {
  return (
    <div className='relative flex justify-center select-none'>
        <h2 className='text-[96px] font-bold absolute bottom-0  leading-[80px] bg-main-gradient bg-clip-text text-transparent z-0 left-[50%] translate-x-[-50%] '>NFTs</h2>
        <h2 className='font-medium text-[48px] relative leading-[50px]'>{heading}</h2>
    </div>
  )
}

export default Title