import React from 'react'
import { currencyIcon } from '../constants'

const CollectionTiles = ({img,heading,price,quantity,percent}) => {
  return (
    
        <div 
        className='flex flex-1 items-center justify-center gap-[12px] p-[20px] bg-secondary border-[1px] border-[rgba(231,231,231,0.4)] min-w-[450px] min-h-[100px] rounded-[8px] cursor-pointer'
    >
        <img src={img} alt=""  className='w-[52px] h-[52px] rounded-full'/>
        <div className='flex flex-col justify-between items-stretch w-full gap-[18px]'>
            <div className='flex justify-between items-center'>
                <h2 className='text-[20px] font-medium '>{heading}</h2>
                <p className='text-[14px] text-[#03DB80]'>{price}</p>
            </div>
            <div className='flex justify-between items-center'>
                <div 
                    className='flex items-center justify-start gap-[4px]'
                >
                    <img src={currencyIcon} alt="" />
                    <p className='text-[14px]'>{quantity}</p>
                </div>
                <p className='text-[14px]'>{percent}</p>
            </div>
        </div>
    </div>
    
  )
}

export default CollectionTiles