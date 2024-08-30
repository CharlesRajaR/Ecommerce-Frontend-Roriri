import React from 'react'

const StoreOrderItem = () => {
  return (
    <div className='flex justify-between bg-gray-200 rounded h-[40vh]'>
      <div className="w-1/5 border-r-2 border-gray-300">
      <img src="mobile.jpg" alt="" />
      </div>
      <div className="w-2/5 px-3 border-r-2 border-gray-300">
       product details
      </div>
      <div className="w-2/5 px-3">
      customer details
      </div>
    </div>
  )
}

export default StoreOrderItem
