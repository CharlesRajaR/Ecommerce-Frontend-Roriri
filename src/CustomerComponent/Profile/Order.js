import React from 'react'
import OrderItem from './OrderItem'

const Order = () => {
  return (
    <div className='bg-blue-50'>
     <div className=" text-5xl font-semibold text-center py-5">
      Orders
    </div>
   <div className='px-3 py-3 grid grid-cols-3 gap-3'>
   
      {
        [1,1,1,1,1,1,1].map(() => {
          return <OrderItem/>
        })
      }
    </div>
    </div>
  )
}

export default Order
