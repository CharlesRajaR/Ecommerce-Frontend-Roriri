import React from 'react'

const OrderItem = () => {
  return (
    <div className='flex flex-col justify-center items-center py-5 bg-blue-100 rounded '>
      <div className='flex flex-col justify-center items-center w-full bg-blue-200 py-3'>
        <div className="text-2xl font-semibold">
          Name : samsung
        </div>
        <div className='text-2xl font-bold'>
          Quantity : 10
        </div>
        <div className='text-3xl font-semibold'>
          Price : 100000
        </div>
        <div>
          <button className='px-4 py-2 text-xl rounded-md font-semibold text-gray-700 bg-blue-300 hover:bg-blue-400
          '>
            Details{ ' -> '}
          </button>
        </div>
      </div>
      <div className='py-3'>
        <button className='bg-blue-300 hover:bg-blue-400  py-2 px-4 text-2xl font-semibold rounded-lg'>
          OrderStatus
        </button>
      </div>
      <div className='py-3'>
        <button className='bg-pink-300 rounded-lg px-4 py-2 text-2xl font-semibold text-gray-800 hover:bg-pink-400
        '>Delivary Address{" -> "}</button>
      </div>
    </div>
  )
}

export default OrderItem
