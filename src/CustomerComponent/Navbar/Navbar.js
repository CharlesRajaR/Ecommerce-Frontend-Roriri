import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Search } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginModal from './LoginModal';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='sticky top-0 z-50 flex justify-between w-full h-[20%] bg-cyan-300'>
      <div className='p-1'>
        <h1 onClick={()=>navigate('/')} className='font-semibold text-2xl text-gray-700 cursor-pointer'>RCR Ecommerce</h1>
      </div>
       <div>
          <ul className='flex px-3 font-semibold'>
            <li className='p-3  text-gray-600 cursor-pointer'><Search/></li>
            <li onClick={() => navigate('/loginorreg')} className='p-3 cursor-pointer text-gray-600 '><AccountCircleIcon/> </li>
            <li onClick={() => navigate('/cart')} className='p-3 cursor-pointer  text-gray-600 '><ShoppingCartIcon/></li>
          </ul>
       </div>
    </div>
  )
}

export default Navbar


