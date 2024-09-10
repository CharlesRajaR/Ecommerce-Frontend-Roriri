import React from 'react'
import CartItems from './CartItems'
import AddressCard from './AddressCard'
import { useDispatch, useSelector } from 'react-redux'
import { createCartOrder } from '../../State/Order/Action'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { userCart, address} = useSelector(store => store)
  const totalPrice = () =>{
    let price = 0;
    userCart?.cartItems?.map((item)=>{
          price += item?.price;
    })
    return price;
  }
  console.log("price",totalPrice())
  const navigate = useNavigate()
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()

  const cartOrder = () =>{
    
    const data = {jwt, address:address?.selectAddress?.[0], navigate}
    dispatch(createCartOrder(data))
    console.log(data)
  }
  console.log(userCart)
  return (
    <>
     <div className="w-[100vw] bg-slate-200 flex flex-col">
      <div className="flex flex-col ">
        <div className="text-3xl font-semibold text-gray-900 p-5 ">
          Cart Items
        </div>
        <div className=" w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-1 p-1 gap-3">
           {
            userCart?.cartItems?.map((item, i)=>{
               return <CartItems key={i} item={item} />
            })
           }
        </div>
        <div className="text-3xl font-semibold text-gray-900 p-5 ">
          Address
        </div>
        <div className=" px-3 py-3 m-1 w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-3">
         
          {
              address?.userAddress?.map((item,i) => {return <AddressCard key={i} item={item}/>}
              )
          }
        </div>
      </div>
      <div className="flex justify-center items-center border-t-2 border-b-2  border-black">
        <div className="flex flex-col">
          <h1 className='text-3xl font-bold py-5'>Total items: {userCart?.cartItems?.length}</h1>
          <h1 className='text-3xl font-bold py-5'>Total Price: {totalPrice()}</h1>
          <h1 className='text-xl font-bold text-blue-700'>select address before buying</h1>
          <button className='text-3xl font-semibold py-2 px-4 bg-yellow-500
           hover:bg-yellow-600 rounded-lg mb-3 text-white'
           onClick={()=>cartOrder()}>Buy</button>
        </div>
      </div>
     </div>
    </>
   
  )
}

export default Cart
