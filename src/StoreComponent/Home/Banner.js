import React from 'react'

const Banner = ({store}) => {

  console.log(store)
  return (
    <div className='relative w-full h-[60vh] flex justify-center items-center bg-gradient-to-b from-slate-300 to-slate-100'>
      <img className='absolute w-full h-full object-cover mix-blend-overlay' src={store?.store?.images[0]} alt="" />
      <div className="flex flex-col justify-center items-center">
      <div className='text-3xl font-bold tex-center' >
        {store?.store?.name}
      </div>
      <div className="text-2xl font-semibold text-center">
       {store?.store?.description}
      </div>
       </div>
      
    </div>
  )
}

export default Banner

