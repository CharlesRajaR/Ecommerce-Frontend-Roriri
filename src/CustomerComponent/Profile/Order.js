import React, { useEffect } from 'react'
import OrderItem from './OrderItem'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrder } from '../../State/Order/Action'

const Order = () => {

  const { userOrder } = useSelector(store => store)
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  useEffect(()=>{
    
     dispatch(getUserOrder(jwt))
  },[])
  console.log(userOrder)

  return (
    <div className='bg-blue-50'>
     <div className=" text-5xl font-semibold text-center py-5">
      Orders
    </div>
   <div className='px-3 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
   
      {
        userOrder?.userOrder?.map((item, i) => {
          return <OrderItem key={i} item={item}/>
        })
      }
    </div>
    </div>
  )
}

export default Order
