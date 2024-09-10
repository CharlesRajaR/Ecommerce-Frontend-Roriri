import { Favorite, FavoriteBorderOutlined, FavoriteOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/mobile.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { addItemTocart } from '../../State/Cart/Action';
import { addToFav } from '../../State/Authentication/Action';

const Product = ({cartItems, item}) => {

  const dispatch = useDispatch()
  
  function inCart(){
    let isincart = false;
    for(let cartItem of cartItems){
      
      if(cartItem?.product?.id === item.id){
        isincart = true;
        
      }
    }
    
    return isincart;
  }
 
  const { auth } = useSelector(store => store)
  console.log(auth)
  const infav = (id) => {
    let isinfav = false;
    for(let item of auth?.favorites){
        if(id === item?.productId){
          isinfav = true;
        }
    }
    return isinfav;
  }

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

  const RemoveToFavHandle = () =>{
    const data = {
      productId:item?.id,
      title:item?.name,
      images:[...item?.images],
      description:item?.description
    }
    console.log(data)
  }
  const addToFavHandle = () =>{
    const data = {
      productId:item?.id,
      title:item?.name,
      images:[...item?.images],
      description:item?.description
    }
    console.log(data)
    dispatch(addToFav({jwt, fav:data}))
  }
  return (
    <div  className='flex flex-col md:flex-row md:justify-normal items-center w-full bg-blue-500'>
        <div className='w-[30vw] h-[30vh] px-3 py-3 bg-blue-100'>
           <img src={item?.images[0]} alt="" className='w-full h-full object-cover'/>
        </div>
      <div className='flex flex-col bg-slate-50 p-3 w-full md:w-[80vw] mr-1'>
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
            <div className="">{
                 infav(item?.id)?
                 <IconButton onClick={()=>RemoveToFavHandle()}>
                <Favorite sx={{color:'red'}}/>
                 </IconButton>
                 :
                 <IconButton onClick={()=>addToFavHandle()}>
                <FavoriteBorderOutlined/>
                 </IconButton>
              }
              
            </div>
            <div className="">
              { !inCart()?<button className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4
                rounded-full' onClick={()=>addToCart(item.id)}>
                Add to cart
                </button> :
                <button className='bg-green-500 cursor-not-allowed hover:bg-green-600 text-white font-bold py-2 px-4
                rounded-full' disabled>
                  In Cart
                  </button>      }     
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
