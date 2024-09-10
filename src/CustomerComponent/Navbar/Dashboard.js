import { AccountBalanceWallet, AddLocationAltSharp, Favorite, Logout, ShoppingBag } from '@mui/icons-material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../State/Authentication/Action'

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
 const navigate = useNavigate()
 const dispatch = useDispatch()
 const navigateHandle = (path) => {
  if(path === 'logout'){
    dispatch(logout(navigate))
    console.log('logout')
  }

  else{
    navigate(path)
  }
     
 }
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
                    <li onClick={()=>navigateHandle(item?.title?.toLowerCase())} className='mb-2 cursor-pointer rounded hover:shadow hover:bg-blue-500 py-2'>
                       <button className='px-3 '>
                          <span>{item.icon}</span>
                          <span>{item.title}</span>
                        </button>
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Dashboard
