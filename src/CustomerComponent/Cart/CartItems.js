import React from 'react'

const CartItems = () => {
  return (
    <div className='flex justify-between space-y-3 px-3 py-3 bg-slate-50 border-b-2'>
     <div className="">
        <img className='h-[10rem]' src="mobile.jpg" alt="" />
        <p className='text-xl text-center font-bold'>Samsung y11</p>
     </div>
     <div className='flex flex-col'>
      <div className='flex'>
         <p className='text-xl font-semibold'>quantity :  </p>
         <p className='text-2xl text-center font-semibold'>10</p>
      </div>
      <div className='flex'>
         <p className='text-xl font-semibold'>Price :  </p>
         <p className='text-2xl text-center font-semibold'>10000000</p>
      </div>
      <div className='flex justify-center pt-3'>
        <button className='bg-red-500 hover:bg-red-600 px-2 py-1 rounded-lg text-xl
         font-semibold text-white'>Remove</button>
      </div>
     </div>
    </div>
  )
}

export default CartItems
