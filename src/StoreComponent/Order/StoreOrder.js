import React, { useEffect } from 'react'
import StoreOrderItem from './StoreOrderItem'
import { useDispatch, useSelector } from 'react-redux'
import { getStoreOrder } from '../../State/StoreOrder/Action'

const StoreOrder = () => {
  const { storeOrder, store } = useSelector(store => store)
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  useEffect(()=>{
       dispatch(getStoreOrder({jwt, storeId:store?.store?.id}))
       console.log("storeorder",storeOrder)
  },[])

  
  return (
    <div className='w-[100vw]'>
      <div className='flex justify-center text-3xl font-bold'>
            Orders
      </div>
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
              storeOrder?.storeOrder?.map((item, i)=>{
                return(
              <tr key={i} className='item-center border-b-2 border-r-2 border-l-2 border-t-2 border-dotted border-black px-5 py-11 text-xl font-semibold text-gray-700' >
              <td className='pl-3' >{i+1}</td>
              <td>Customer</td>
              <td>{item?.product?.name}</td>
              <td>Quantity:{item?.quantity}</td>
              <td className='text-xl flex flex-col'>
                <p>Price per quantity:{item?.product?.price}</p>
                <p>Total Price:{item?.totalPrice}</p></td>
              <td>
                <button className='text-2xl font-semibold text-white bg-pink-500 px-4 py-2
                 rounded-lg'>
                  {item.orderStatus}
                </button>
              </td>
              <td>
                <button className=' flex flex-col text-start text-blach bg-pink-100 px-4 py-2
                 rounded-lg'>
                 <p>{item?.order?.deliveryAddress?.streetAddress}</p>
                 <p>{item?.order?.deliveryAddress?.city}</p>
                 <p>{item?.order?.deliveryAddress?.district}</p>
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
