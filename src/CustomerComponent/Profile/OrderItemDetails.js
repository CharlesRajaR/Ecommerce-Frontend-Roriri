import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getItemOfOrder } from '../../State/Order/Action'

const OrderItemDetails = () => {
    const { userOrder } = useSelector(store => store)
    const { orderId } = useParams()
    
    console.log("orderid",orderId)
    console.log(userOrder)
  return (
<>
{
    userOrder?.orderItem?.map((item,i)=>{
        return(
            <>
            <div className="flex flex-col m-1 w-full h-full justify-center items-center bg-blue-100 ">
<div className="w-full md:w-[80vw] h-full md:h-[70vh]  bg-blue-200">
    <div className='flex flex-col md:justify-between md:flex-row'>
    <div className="flex flex-col p-3 ">
        <div className="text-2xl  font-semibold p-3 bg-blue-300 rounded-lg">ITEM NO : {i+1}</div>
      <div className="text-xl font-semibold text-gray-900
       border-blue-950 border-r-2 border-l-2 border-t-2 border-b-2  rounded-lg"> CreatedAt:{item?.createdAt}

      </div>
      
      <div className="flex flex-col p-3 ">
        <div className="text-2xl font-bold">
        Delivery Address:
        </div>
        <div className="flex flex-col justify-center items-center text-xl font-semibold text-gray-700">
            <div className="">{item?.order?.deliveryAddress?.streetAddress}</div>
            <div className="">{item?.order?.deliveryAddress?.city}</div>
            <div className="">{item?.order?.deliveryAddress?.district}</div>
            <div className="">{item?.order?.deliveryAddress?.state}</div>
        </div>
      </div>
    </div>
    <div className="flex flex-col p-3 justify-center border-blue-950 border-r-2 border-l-2 border-t-2 border-b-2 border-dotted rounded-lg items-center">
      <div className="text-2xl underline font-semibold">Product Details</div>
      <div className="">
        <img src={item?.product?.images[0]} alt="" className=''/>
      </div>
      <div>{item?.product?.name}</div>
      <div>{item?.product?.description}</div>
      <div>Price: {item?.product?.price}</div>
    </div>
    </div>
    <div className="flex flex-col justify-center md:flex-row md:justify-between border-black  border-y-2">
       <div className="flex flex-col justify-center items-center">
        <div className="text-2xl font-semibold underline">
            OrderStatus
        </div>
         <div className="p-5 ">
            <button className='text-2xl font-semibold px-3 py-1 text-white bg-pink-500 hover:bg-pink-700'>
            {item?.orderStatus}</button>
         </div>
       </div>
       <div className="flex flex-col justify-center items-center
        text-2xl font-semibold p-5 text-gray-900">
        <div className="underline">Total Quantity</div>
        <div className="">{item?.quantity}</div>
       </div>
       <div className="flex flex-col text-2xl justify-center items-center font-semibold p-5 text-gray-900">
        <div className="underline">Total Price</div>
        <div className="">{item?.totalPrice}</div>
       </div>
    </div>
</div>
 
</div>
            </>
        )
    })
}

</>
  )
}

export default OrderItemDetails
