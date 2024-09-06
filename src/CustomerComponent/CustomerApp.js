import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import { Route,  Routes } from 'react-router-dom'
import Cart from './Cart/Cart'
import ProductDetails from './Home/ProductDetails'
import Dashboard from './Navbar/Dashboard'
import Address from './Profile/Address'
import Order from './Profile/Order'
import Favorite from './Profile/Favorite'
import LoginOrRegister from './Navbar/LoginOrRegister'
import UserProfile from './Profile/UserProfile'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCart } from '../State/Cart/Action'

const CustomerApp = () => {

  const { userCart } = useSelector(store => store)
  const jwt = localStorage.getItem("jwt")
  const dispatch =useDispatch()
  useEffect(()=>{
      dispatch(getUserCart(jwt))
      console.log("usercart",userCart)
  },[])
  const [sideBarToggle, setSideBarToggle] = useState(false);

  return (
    <>
    <Navbar sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle}/>
    <Dashboard sideBarToggle={sideBarToggle} />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='/orders' element={<Order/>}/>
      <Route path='/favourites' element={<Favorite/>}/>
      <Route path='/address' element={<Address/>}/>
      <Route path='/profile' element={<UserProfile />}/>
    </Routes>
    </>
    
  )
}

export default CustomerApp
