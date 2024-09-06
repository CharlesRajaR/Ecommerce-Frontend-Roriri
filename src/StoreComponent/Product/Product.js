import { Delete, Favorite, FavoriteBorderOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../State/StoreProduct/Action'

const Product = ({item}) => {
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()
  const deleteProductHandle = (id) =>{
    dispatch(deleteProduct({jwt, productId:id}))
  }
  return (
    <div className='h-[40vh] mb-3  bg-gray-200 flex flex-col justify-between'>
      <div className="flex justify-center items-center">
        <div className="">
            <img src={item?.images[0]} alt="" />
        </div>
      </div>
      <div className="h-1/4 flex justify-between bg-white">
      <div className="flex flex-col">
         <div className="text-2xl font-bold text-gray-500">{item?.name}</div>
         <div className="text-2xl font-semibold text-gray-500">{`Price:${item?.price}`}</div>
           <div className="text-xl  text-gray-500">{`${item?.description}`}</div>
      </div>
      <div className="flex flex-col">
        <div className="">
          <IconButton>
          {false?<FavoriteBorderOutlined/>:<Favorite sx={{color:'red'}}/>}
        </IconButton>
        </div>
        <div className="">
          <IconButton onClick={()=>deleteProductHandle(item.id)}>
            <Delete sx={{color:'red'}}/>
          </IconButton>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Product
