import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProducts } from '../../State/Product/Action';
import { addItemTocart } from '../../State/Cart/Action';

const ProductDetails = () => {
  const [openModal, setOpenModal] = useState(false);

  const { userCart, userProduct } = useSelector(store => store)
  const jwt = localStorage.getItem("jwt")
  const addToCart = (id) =>{
      const data = {
        productId:id,
        quantity:Number(1)
      }
   
      dispatch(addItemTocart({jwt, reqData:data}))
      // console.log("usercart",userCart)
  }
  const {id} = useParams()
  console.log(userProduct)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getSingleProducts({jwt, id}));
    console.log(userProduct);
  },[])


   function inCart(){
    let isincart = false;
    for(let cartItem of userCart?.cartItems){
      if(cartItem?.product?.id === userProduct?.product?.id){
        isincart = true;   
      }
    }
    return isincart;
  }
  return ( 
    <React.Fragment>
    <div className='bg-slate-300  flex flex-col justify-center items-center'>
      <div className='box-border'>
       <img src={userProduct?.product?.images[0]} alt="" className=' h-96 w-full object-cover p-9'/>
      </div>
      <div className='flex flex-col justify-start w-full bg-slate-100'>
          <div className='p-9'>
            <p className='text-xl font-semibold text-gray-600'>
             {userProduct?.product?.description}
            </p>
             </div>

            <div className="flex  p-9">
                <p className='text-xl font-semibold'>Price: </p>
                <p className='text-3xl font-semibold text-blue-500'>{userProduct?.product?.price}</p>
            </div>

            <div className='flex  p-9'>
                <p className='text-xl font-semibold pt-1'>Available quantity : </p>
                <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-gray-400 rounded shadow'>{userProduct?.product?.quantity}</button>
            </div>

            <div className='text-red-800 text-3xl font-semibold p-9'>
                {userProduct?.product?.name}
            </div>

            <div className='flex justify-start gap-5 p-9'>

                {!inCart()?<button className='bg-yellow-500 hover:bg-yellow-600
                 text-white font-bold py-2 px-4 rounded-full' onClick={()=>addToCart(userProduct?.product?.id)}>
                    Add to cart
                </button>:
                <button className='bg-green-500 hover:bg-green-600 cursor-not-allowed
                 text-white font-bold py-2 px-4 rounded-full' disabled >
                    In Cart
                </button>}

                <button className ='bg-green-700 hover:bg-green-600
                 text-white font-bold py-2 px-4 rounded-full' onClick={()=>setOpenModal(true)}
                 >
                    Buy
                </button>
            </div>
      </div>
    </div>
    <Modal isVisible={openModal} onClose={()=>setOpenModal(false)} product={userProduct?.product}/>
    </React.Fragment>
  )
}

export default ProductDetails
