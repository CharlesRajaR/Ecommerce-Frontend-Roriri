import React, { useEffect } from 'react'
import Product from './Product';
import ProductDetails from './ProductDetails';
import img from '../../assets/ecom.webp'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../State/Product/Action';

const Home = () => {
  const jwt = localStorage.getItem("jwt")

  const { userCart, userProduct } = useSelector(store => store)
  console.log("cart",userCart)

  const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(getAllProducts(jwt));
     console.log("userproduct", userProduct)
  },[])
  return (
    <div className='bg-blue-200'>
      <div className='bg-gradient-to-bl from-gray-500 to-blue-500 flex justify-center items-center w-full h-[70vh] relative bg-blue-100 '>
         <img src={img} alt="" className='absolute w-full h-full object-cover opacity-70 mix-blend-overlay'/>
         <div className='flex flex-col justify-center items-center'>
            <div className="text-7xl font-bold  text-white">
              Shop Outside the Box
            </div>
            <div className="text-3xl font-bold text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, iure!
            </div>
         </div>
      </div>
      <div className="text-3xl font-bold text-gray-900 text-center py-5">
                Top Products for you
      </div>
    {
        userProduct.products?.map((item)=>{
            return (<div className='gap-3 py-5 '>
              
                <Product cartItems={userCart?.cartItems} item={item}/>
            </div>)
        })
    }
    {/* <ProductDetails/> */}
    </div>
  )
}

export default Home
