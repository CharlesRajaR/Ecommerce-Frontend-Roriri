import React from 'react'

const Product = () => {
  return (
    <div className='h-[40vh] bg-gray-200 flex flex-col justify-between'>
      <div className="flex justify-center items-center">
        <div className="">
            <img src="mobile.jpg" alt="" />
        </div>
      </div>
      <div className="h-1/4 flex flex-col bg-white">
      <div className="text-xl font-semibold text-gray-400">samsung</div>
      <div className="text-xl font-semibold text-gray-500">price:100000</div>
      </div>
    </div>
  )
}

export default Product
