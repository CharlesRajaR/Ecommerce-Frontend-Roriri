import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCartItem, updateCartItem } from '../../State/Cart/Action'

const CartItems = ({item, i}) => {
   const jwt = localStorage.getItem("jwt")
   const dispatch = useDispatch()
   const updateItem = (quantity) =>{
      if(quantity <= 0){
         removeCartItem(item?.id)
      }
      else{
        dispatch(updateCartItem({jwt, reqData:{id:item?.id, quantity:quantity}}))
      }
   }
  
   const removeCartItem = (id) =>{
      dispatch(deleteCartItem({jwt, id}))
   }
  return (
    <div className='flex flex-col justify-center items-center  space-y-3 px-3 py-3 bg-slate-50 border-b-2'>
     <div className="">
        <img className='h-[10rem] w-[10rem] object-cover' src={item?.product?.images[0]} alt="" />
        <p className='text-xl  font-bold'>{item?.product?.name}</p>
     </div>
     <div className='flex flex-col'>
      <div className='flex'>
         <p className='text-xl font-semibold'>quantity :  </p>
         <p className='text-2xl text-center font-semibold'>{item?.quantity}</p>
      </div>
      <div className='flex'>
         <p className='text-xl font-semibold'>Price :  </p>
         <p className='text-2xl text-center font-semibold'>{item?.price}</p>
      </div>
      <div className='flex justify-center pt-3'>
        <button className='bg-red-500 hover:bg-red-600 px-2 py-1 rounded-lg text-xl
         font-semibold text-white' onClick={()=>removeCartItem(item.id)}>Remove</button>
      </div>
      <div className="flex justify-center items-center mt-1 text-black">
       <div className="">
         <button onClick={()=>updateItem(item?.quantity - 1)}
          className='bg-white text-xl px-2 py-2 border-black border-x-2 border-y-2 rounded-lg'>-</button>
       </div>
       <div className="">
         <button className='bg-blue-200 cursor-not-allowed text-xl px-2 py-2 rounded-lg' disabled>{item?.quantity}</button>
       </div>
       <div className="">
         <button onClick={()=>updateItem(item?.quantity + 1)}
          className='bg-white text-xl px-2 py-2 rounded-lg border-black border-x-2 border-y-2'>+</button>
       </div>
      </div>
     </div>
    </div>
  )
}

export default CartItems
