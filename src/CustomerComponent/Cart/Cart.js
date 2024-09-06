import React from 'react'
import CartItems from './CartItems'
import AddressCard from './AddressCard'
import { useSelector } from 'react-redux'

const Cart = () => {
  const { userCart } = useSelector(store => store)

  console.log(userCart)
  return (
    <>
     <div className="w-[100vw] bg-slate-200 flex flex-col">
      <div className="flex flex-col md:flex-row justify-between">
        <div className=" w-full md:w-[30vw] flex flex-col mr-2">
           {
            userCart?.cartItems?.map((item, i)=>{
               return <CartItems key={i} item={item} />
            })
           }
        </div>
        <div className="border-l-2 border-green-300 px-3 py-3 m-1 w-[70vw] grid  grid-cols-1 md:grid-cols-3 gap-y-3 gap-3">
          {
              [1,1,1,1,1].map(() => {return <AddressCard/>}
              )
          }
        </div>
      </div>
      <div className="flex justify-center items-center border-t-2 border-b-2  border-black">
        <div className="flex flex-col">
          <h1 className='text-3xl font-bold py-5'>Total items: 5</h1>
          <button className='text-3xl font-semibold py-2 px-4 bg-yellow-500
           hover:bg-yellow-600 rounded-lg mb-3 text-white'>Buy</button>
        </div>
      </div>
     </div>
    </>
   
  )
}

export default Cart
