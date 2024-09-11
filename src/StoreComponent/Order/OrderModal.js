import React from 'react'
import { useDispatch } from 'react-redux'
import { updateOrder } from '../../State/StoreOrder/Action'

const OrderModal = ({isVisible, onClose, item}) => {
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const updateHandle = (status) =>{
      
        const data ={
            status:status,
            orderItemId:item?.item?.id,
            productId:item?.item?.product?.id
        }
        dispatch(updateOrder({jwt, req:data}))
        console.log(data);
        
        
    }
    if(!isVisible){
        return <></>
    }
  return (
     <div className='fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm 
    flex justify-center items-center'>
        <div className="w-[300px] lg:w-[600px] flex flex-col">
            <button className='text-white text-xl place-self-end' onClick={()=>onClose()}>
                X
            </button>
            <div className='bg-white flex flex-col justify-center items-center p-5'>
                <div className="py-3">
                   <button className='text-white bg-pink-500 hover:bg-pink-500 px-3 py-1 
               rounded-lg text-2xl font-semibold' onClick={()=>updateHandle("OUT_FOR_DELIVERY")}>
                OUT_FOR_DELIVERY
               </button>
                </div>
                <div className="">
                <button className='text-white bg-blue-500 hover:bg-blue-700 px-3 py-1 
                rounded-lg text-2xl font-semibold' onClick={()=>updateHandle("COMPLETED")}>
                COMPLETED
               </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default OrderModal
