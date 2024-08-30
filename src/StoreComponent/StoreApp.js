import React from 'react'
import Shome from './Home/Shome'
import Snavbar from './Navbar/Snavbar'
import CreateProduct from './Home/CreateProduct'
import { Route, Routes } from 'react-router-dom'
import StoreOrder from './Order/StoreOrder'

const StoreApp = () => {
  return (
    
      <>
      <Snavbar/>
      <Routes>
        <Route path='/' element={<Shome/>}/>
        <Route path='/create/product' element={<CreateProduct/>}/>
        <Route path='/store/order' element={<StoreOrder/>}/>
      </Routes>
      </>
   
  )
}

export default StoreApp
