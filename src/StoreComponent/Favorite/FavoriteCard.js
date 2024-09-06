import React from 'react'
import img from '../../assets/mobile.jpg'

const FavoriteCard = () => {
  return (
    <div className='flex flex-col bg-blue-200'>
    <div className='bg-blue-100 h-[30vh] relative flex justify-center items-center'>
        <img className='absolute h-3/4 object-cover' src={img} alt="" />
    </div>
    <div className="text-xl text-gray-600 font-semibold text-center">
        samsung y11
    </div>
    <div className='text-2xl text-gray-500 font-bold text-center'>
        Price : 1000000
    </div>
    </div>
  )
}

export default FavoriteCard
