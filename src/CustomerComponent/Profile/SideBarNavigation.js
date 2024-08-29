import { AccountBalanceWallet, AddLocationAltSharp, Favorite, Logout, ShoppingBag } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideBarNavigation = () => {
    const menu = [
 {
   title:'Orders', icon:<ShoppingBag/>
 },
 {
   title:'Favourites', icon:<Favorite/>
 },
 {
   title:'Payment', icon:<AccountBalanceWallet/>
 },
 {
   title:'Address', icon:<AddLocationAltSharp/>
 },
 
 {
   title:'Logout', icon:<Logout/>
 }
]

const navigate = useNavigate();

const handleNavigate = (path) =>{
    console.log(path);
    navigate(`/profile/${path}`);
}
  return (
    <div className='hidden md:block h-[100%] bg-gray-500 text-white text-2xl font-semibold'>
     {
        menu.map((item, i) =>{
            return(
            <>
            <div onClick={() => handleNavigate(item.title.toLowerCase())} className='flex h-1/5 justify-center pt-3 border-b-2 cursor-pointer'>
                <div className="">{item.icon}</div>
                <div className=''>{item.title}</div>
            </div>
            </>)
        })
     }
    </div>
  )
}

export default SideBarNavigation
