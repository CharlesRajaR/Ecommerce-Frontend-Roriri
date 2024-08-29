import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SideBarNavigation from './SideBarNavigation'
import UserProfile from './UserProfile'
import Order from './Order'
import Favorite from './Favorite'
import Address from './Address'

const Profile = () => {
  return (
    <div className='flex justify-between'>
      <div className='sticky  md:w-[20%]'>
         <SideBarNavigation/>
      </div>
      <div className='md:w-80%'>
           <Routes>
                <Route path='/' element={<Order/>}/>
                <Route path='/orders' element={<Order/>}/>
                <Route path='/favourites' element={<Favorite/>}/>
                <Route path='/address' element={<Address/>}/>
            </Routes>
      </div>
    </div>
  )
}

export default Profile
