import React, { useEffect } from 'react'
import StoreApp from '../StoreComponent/StoreApp'
import CustomerApp from '../CustomerComponent/CustomerApp'
import { Routes, Route, useNavigate } from 'react-router-dom'
import LoginOrRegister from '../CustomerComponent/Navbar/LoginOrRegister'
import { useSelector } from 'react-redux'

const Router = () => {
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store);
  const navigate = useNavigate()
  useEffect(()=>{
     if(jwt === null){
      navigate('/loginorreg')
     }
  },[])
  return (
    <>
    <Routes>
        <Route path='/store/*' element={<StoreApp/>}/>
        <Route path='/*' element={<CustomerApp/>} />
        <Route path='/loginorreg' element={<LoginOrRegister/>} />
    </Routes>
    </>
  )
}

export default Router
