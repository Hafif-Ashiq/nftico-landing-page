import React from 'react'
import { company_array } from '../constants'

const Sponsers = () => {
  return (
    <section className='padding-section flex justify-between items-center'>
        <div className='flex justify-between items-center w-full'>
        {company_array.map((comp) => (
            <img src={comp} alt="" />
        ))}
        </div>

    </section>
  )
}

export default Sponsers