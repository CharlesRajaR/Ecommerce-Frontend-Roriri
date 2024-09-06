import React, { useEffect } from 'react'
import Banner from './Banner'
import Product from '../Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getStoreProduct } from '../../State/StoreProduct/Action'

const Shome = ({storeId}) => {

  const dispatch = useDispatch();

  const { store, storeProduct } = useSelector(store => store)

  const jwt = localStorage.getItem("jwt")
  useEffect(()=>{
      dispatch(getStoreProduct({jwt, storeId}))
      console.log(storeId)
      console.log(storeProduct)
  },[])
  return (
    <div>
      <Banner store={store}/>
      <div className='px-3 py-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 bg-white'>
        {
            storeProduct?.storeProducts?.map((item) =>{
                return <Product item={item}/>
            })
        }
      </div>
    </div>
  )
}

export default Shome
