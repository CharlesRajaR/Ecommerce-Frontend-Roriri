import { AccountBalanceWallet, AddLocationAltSharp, Favorite, Logout, ShoppingBag } from '@mui/icons-material'
import React from 'react'

const Dashboard = ({sideBarToggle}) => {
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
  return (
    <div className={`${sideBarToggle?'block':'hidden'} w-64 z-20 bg-gray-800 fixed h-full px-4 py-2`}>
      <div className="text-2xl text-white font-bold">
        DashBoard
      </div>
      <hr />
      <ul className='mt-3 text-white font-bold'>
        {
            menu.map((item)=>{
                return(
                    <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                       <a href={`/${item.title.toLowerCase()}`} className='px-3'>
                          <span>{item.icon}</span>
                          <span>{item.title}</span>
                        </a>
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Dashboard
