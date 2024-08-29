import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Profile from './Profile/Profile'
import { Route, Router, Routes } from 'react-router-dom'
import LoginOrRegister from './Navbar/LoginOrRegister'
import Cart from './Cart/Cart'
import LoginModal from './Navbar/LoginModal'
import RegisterModal from './Navbar/RegisterModal'
import ProductDetails from './Home/ProductDetails'

const CustomerApp = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/loginorreg' element={<LoginOrRegister/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/product/:id' element={<ProductDetails/>}/>
    </Routes>
    </>
    
  )
}

export default CustomerApp
