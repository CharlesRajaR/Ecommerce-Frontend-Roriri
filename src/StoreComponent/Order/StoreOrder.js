import React from 'react'
import StoreOrderItem from './StoreOrderItem'

const StoreOrder = () => {
  return (
    <div className='w-[100vw]'>
       <table className='table-auto w-full m-5 bg-gray-100'>
        <thead>              
            <tr className='px-5 py-11 text-xl md:text-2xl font-semibold text-gray-700 '>
              <th>id</th>
              <th>Customer</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>OrderStatus</th>
              <th>Delivary Address</th>
            </tr>
          </thead>
          <tbody>
            {
              [1,1,1,1,1,1].map((index)=>{
                return(
              <tr px-5 py-11 text-xl font-semibold text-gray-700 >
              <td>{index+1}</td>
              <td>Customer</td>
              <td>Name</td>
              <td>Quantity</td>
              <td>Total Price</td>
              <td>
                <button className='text-2xl font-semibold text-white bg-pink-500 px-4 py-2
                 rounded-lg'>
                  Orderstatus
                </button>
              </td>
              <td>
                <button className='text-2xl font-semibold text-white bg-pink-500 px-4 py-2
                 rounded-lg'>
                 Delivary Address
                </button>
              </td>
              </tr>
                )
              })
            }
          </tbody>
       </table>
    </div>
  )
}

export default StoreOrder
