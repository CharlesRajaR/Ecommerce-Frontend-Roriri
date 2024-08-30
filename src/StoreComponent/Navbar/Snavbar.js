import { AccountCircle, Favorite, Search } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Snavbar = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className='flex flex-col'>
    <div className='w-full  flex justify-between px-5 py-3 bg-white'>
    <div className="flex justify-start">
      <div className="px-3 text-gray-600"><AccountCircle/></div>
      <div className="px-3 text-gray-600"><Favorite/></div>
    </div>
    <div className="">
      <div className='text-3xl font-bold '>
        RCR Ecommerce
      </div>
    </div>
    <div className="">
      <div className=""><Search/></div>
    </div>
    </div>

    <div className="w-full bg-gray-200 flex justify-center items-center py-3">
      <div onClick={() => navigate('/')} className="cursor-pointer text-2xl px-5 font-semibold">Home</div>
      <div onClick={() => navigate('/store/order')} className="cursor-pointer text-2xl px-5 font-semibold">Orders</div>
      <div onClick={() => navigate('/create/product')} className=" cursor-pointer text-2xl px-5 font-semibold">Add new product {'->'}</div>
    </div>
    </div>
    </>
  )
}

export default Snavbar
