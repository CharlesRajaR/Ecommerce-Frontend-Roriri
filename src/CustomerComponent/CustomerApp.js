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
import LoginOrRegister from '../Common/LoginOrRegister'
import UserProfile from './Profile/UserProfile'
import { useDispatch, useSelector } from 'react-redux'
import { getUserCart } from '../State/Cart/Action'
import { getUserAddress } from '../State/Address/Action'
import OrderItemDetails from './Profile/OrderItemDetails'

const CustomerApp = () => {

  const { auth, address, userCart } = useSelector(store => store)
  const jwt = localStorage.getItem("jwt")
  const dispatch =useDispatch()
  useEffect(()=>{
      dispatch(getUserCart(jwt))
      dispatch(getUserAddress(jwt))
      console.log("address",address)
      console.log("usercart",userCart)
  },[jwt|| auth?.jwt])
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
      <Route path='/orders/item/:orderId' element={<OrderItemDetails/>}/>
      <Route path='/favourites' element={<Favorite/>}/>
      <Route path='/address' element={<Address/>}/>
      <Route path='/profile' element={<UserProfile />}/>
    </Routes>
    </>
    
  )
}

export default CustomerApp
