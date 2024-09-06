import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DensityMedium, Search } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';

const Navbar = ({sideBarToggle, setSideBarToggle}) => {
  const navigate = useNavigate();

  return (
    <div className='sticky top-0 px-4 py-3 z-50 flex justify-between w-full h-[20%] bg-gray-700'>

      <div className='p-1 flex justify-center cursor-pointer items-center text-white'>
        <IconButton onClick={()=>setSideBarToggle(!sideBarToggle)}> <DensityMedium /></IconButton>
       
        <h1 onClick={()=>navigate('/')} className='px-3 font-semibold text-2xl text-white cursor-pointer'>RCR Ecommerce</h1>
      </div>
       <div>
          <ul className='flex px-3 font-semibold'>
            <li className='p-3 text-white  cursor-pointer'><Search/></li>
            <li onClick={() => navigate('/profile')} className='p-3 cursor-pointer text-white '><AccountCircleIcon/> </li>
            <li onClick={() => navigate('/cart')} className='p-3 cursor-pointer  text-white '><ShoppingCartIcon/></li>
          </ul>
       </div>
    </div>
  )
}

export default Navbar


