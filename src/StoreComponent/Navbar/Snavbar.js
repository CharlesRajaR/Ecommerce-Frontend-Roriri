import { AccountCircle, Favorite, Logout, Search } from '@mui/icons-material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../State/Authentication/Action'

const Snavbar = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logoutHandle = () => {
    dispatch(logout(navigate))
  }
  return (
    <>
    <div className='z-10 w-full flex flex-col'>
    <div className='w-full  flex justify-between px-5 py-3 bg-white'>
    <div className="flex justify-start">
      <div onClick={()=>navigate('/store/profile')}  className="cursor-pointer px-3 text-gray-600"><AccountCircle/></div>
      <div onClick={()=>navigate('/store/favorite')} className="cursor-pointer px-3 text-gray-600"><Favorite/></div>
      <div onClick={()=>logoutHandle()} className="cursor-pointer px-3 text-gray-600"><Logout/></div>
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

    <div className="w-screen bg-gray-200 flex justify-center items-center py-3">
      <div onClick={() => navigate('/store')} className="cursor-pointer text-2xl px-5 font-semibold">Home</div>
      <div onClick={() => navigate('/store/order')} className="cursor-pointer text-2xl px-5 font-semibold">Orders</div>
      <div onClick={() => navigate('/store/create/product')} className=" cursor-pointer text-2xl px-5 font-semibold">Add new product {'->'}</div>
    </div>
    </div>
    </>
  )
}

export default Snavbar
