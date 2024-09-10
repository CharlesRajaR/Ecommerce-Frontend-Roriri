import React, { useEffect } from 'react'
import StoreApp from '../StoreComponent/StoreApp'
import CustomerApp from '../CustomerComponent/CustomerApp'
import { Routes, Route, useNavigate } from 'react-router-dom'
import LoginOrRegister from '../Common/LoginOrRegister'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByJwtToken } from '../State/Authentication/Action'
import Logout from '../Common/Logout'

const Router = () => {
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
     
      dispatch(getUserByJwtToken({jwt, navigate}));
     
  },[])
  return (
    <>
    <Routes>
        <Route path='/store/*' element={<StoreApp/>}/>
        <Route path='/*' element={<CustomerApp/>} />
        <Route path='/loginorreg' element={<LoginOrRegister/>} />
        <Route path='/logout' element={<Logout/>}/>
    </Routes>
    </>
  )
}

export default Router
