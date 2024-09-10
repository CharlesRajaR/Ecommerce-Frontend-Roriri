import React, { useEffect } from 'react'
import Shome from './Home/Shome'
import Snavbar from './Navbar/Snavbar'
import CreateProduct from './Home/CreateProduct'
import { Route, Routes, useNavigate } from 'react-router-dom'
import StoreOrder from './Order/StoreOrder'
import Favorite from './Favorite/Favorite'
import Profile from './profile/Profile'
import Main from './Main'
import { getUserStore } from '../State/store/Action'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByJwtToken } from '../State/Authentication/Action'
import UserProfile from '../CustomerComponent/Profile/UserProfile'

const StoreApp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { auth, store } = useSelector(store => store)
   const jwt = localStorage.getItem("jwt")
  
 
  useEffect(()=>{
  
    console.log(auth.jwt)
    dispatch(getUserStore(jwt || auth.jwt));
    // dispatch(getUserByJwtToken({jwt, navigate}))
    console.log("store",store)
  },[auth.jwt || jwt])

      return(
        <>
        {store?.store !== "" || null || undefined ?<>
        <Snavbar/>
        <Routes>
        <Route path='/' element={<Shome storeId={store?.store?.id}/>}/>
        <Route path='/create/product' element={<CreateProduct/>}/>
        <Route path='/order' element={<StoreOrder/>}/>
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/profile' element={<UserProfile/>} />
      </Routes>
        </>
        :<Main/>}
      
      </>)}
    
  

export default StoreApp
