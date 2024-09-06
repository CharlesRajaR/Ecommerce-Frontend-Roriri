import { Favorite, FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/mobile.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { addItemTocart } from '../../State/Cart/Action';

const Product = ({cartItems, item}) => {

  const dispatch = useDispatch()
  
    const inCart = (id) => cartItems.map((cartItem) => {
      if(cartItem.id === id){
        return true;
      }
    })
    
 

  
  const jwt = localStorage.getItem("jwt")
  const addToCart = (id) =>{
      const data = {
        productId:id,
        quantity:Number(1)
      }
   
      dispatch(addItemTocart({jwt, reqData:data}))
      // console.log("usercart",userCart)
  }
  const navigate = useNavigate();
  return (
    <div  className='flex flex-col md:flex-row md:justify-normal items-center w-full bg-blue-500'>
        <div className='px-3 py-3'>
           <img src={item?.images[0]} alt="" className='w-full h-full object-cover'/>
        </div>
      <div className='flex flex-col bg-slate-50 p-3 w-full mr-1'>
        <div className='text-2xl font-bold'>
           {item?.name}
        </div>
        <div className='font-semibold'>
           {item?.description}
        </div>
        <div className='flex'>
           <p className='text-2xl font-semibold'>price:</p>
           <h1 className='text-3xl font-semibold'>{item?.price}</h1>
        </div>
        <div className='flex p-1'>
            <p>FREE</p>
            <p>delivery</p>
        </div>
        <div className='flex justify-between px-5'>
            <div className="">
              <IconButton>
                <FavoriteBorderOutlined/>
              </IconButton>
            </div>
            <div className="">
   <button className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4
    rounded-full' onClick={()=>addToCart(item.id)}>{false?
    "In Cart":"Add to cart"}</button>            
            </div>
           
        </div>
        <div>
          <button onClick={()=>navigate(`/product/${item.id}`)} className='bg-gray-200 hover:bg-gray-300 text-black rounded-lg px-4 py-2'> See details {'>'}</button>
        </div>
      </div>
    </div>
  )
}

export default Product
