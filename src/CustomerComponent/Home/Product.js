import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const navigate = useNavigate();
  return (
    <div  className='flex justify-normal items-center'>
        <div className='px-3 py-3'>
           <img src="mobile.jpg" alt="" />
        </div>
      <div className='flex flex-col bg-slate-50 p-3'>
        <div className='font-semibold'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque et ipsum amet nisi
            architecto? Repudiandae quisquam exercitationem consequuntur odit nobis.
        </div>
        <div className='flex'>
           <p className='text-2xl font-semibold'>price:</p>
           <h1 className='text-3xl font-semibold'>1000000</h1>
        </div>
        <div className='flex p-1'>
            <p>FREE</p>
            <p>delivery</p>
        </div>
        <div className='flex justify-center'>
            <button className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full'>Add to cart</button>
        </div>
        <div>
          <button onClick={()=>navigate('/product/1')} className='bg-gray-200 hover:bg-gray-300 text-black rounded-lg px-4 py-2'> See details {'>'}</button>
        </div>
      </div>
    </div>
  )
}

export default Product
