import React from 'react'

const BlurCircle = ({css}) => {
  return (
    <div className={`w-[450px] h-[400px] rounded-full bg-[rgba(215,29,97,0.60)] blur-[200px] absolute  ${css}`}>

    </div>
  )
}

export default BlurCircle