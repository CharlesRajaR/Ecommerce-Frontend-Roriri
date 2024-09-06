import React, { useEffect } from 'react'
import Shome from './Home/Shome'
import Snavbar from './Navbar/Snavbar'
import CreateProduct from './Home/CreateProduct'
import { Route, Routes } from 'react-router-dom'
import StoreOrder from './Order/StoreOrder'
import Favorite from './Favorite/Favorite'
import Profile from './profile/Profile'
import Main from './Main'
import { getUserStore } from '../State/store/Action'
import { useDispatch, useSelector } from 'react-redux'

const StoreApp = () => {
  const dispatch = useDispatch();
  
  const { auth, store } = useSelector(store => store)
  
  useEffect(()=>{
    console.log(auth.jwt)
    dispatch(getUserStore(auth.jwt));
    console.log("store",store)
  },[auth.jwt])

      return(
        <>
        {store?.store!==null?<>
        <Snavbar/>
        <Routes>
        <Route path='/' element={<Shome storeId={store?.store?.id}/>}/>
        <Route path='/create/product' element={<CreateProduct/>}/>
        <Route path='/order' element={<StoreOrder/>}/>
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
        </>
        :<Main/>}
      
      </>)}
    
  

export default StoreApp
