import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getItemOfOrder } from '../../State/Order/Action'

const OrderItem = ({item}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  const itemDetails = (id) =>{
    dispatch(getItemOfOrder({jwt,id}))
    navigate(`/orders/item/${item?.id}`)
  }
  return (
    <div className='flex flex-col justify-center items-center py-5 bg-blue-100 rounded '>

      <div className='flex flex-col justify-center items-center w-full bg-blue-200 py-3'>
        <div>
          <h1 className='text-left text-2xl font-bold underline'>Delivery Address:</h1>
        </div>
        <div className="text-2xl font-semibold">
          {item?.deliveryAddress?.streetAddress}
        </div>
        <div className='text-2xl font-bold'>
          {item?.deliveryAddress?.city}
        </div>
        <div className='text-3xl font-semibold'>
          {item?.deliveryAddress?.district}
        </div>
       
      </div>
      <div className='py-3'>
        
 <button className='bg-pink-300 rounded-lg px-4 py-2 text-2xl font-semibold text-gray-800 hover:bg-pink-400
        ' onClick={()=>itemDetails(item?.id)}>Details{" ->  "}</button>
    
      </div>
    </div>
  )
}

export default OrderItem
