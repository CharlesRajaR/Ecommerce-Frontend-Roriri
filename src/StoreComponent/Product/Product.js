import { Delete, Favorite, FavoriteBorderOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from '../../State/StoreProduct/Action'
import { addToFav, removeToFav } from '../../State/Authentication/Action'

const Product = ({item}) => {
  const { auth }  = useSelector(store => store)
  
  const infav = (id) => {
    let isinfav = false;
    for(let item of auth?.favorites){
        if(id === item?.productId){
          isinfav = true;
        }
    }
    return isinfav;
  }
  console.log(auth)
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()
  const deleteProductHandle = (id) =>{
    dispatch(deleteProduct({jwt, productId:id}))
  }

  const RemoveToFavHandle = () =>{
    const data = {
      productId:item?.id,
      title:item?.name,
      images:[...item?.images],
      description:item?.description
    }
    console.log(data)
    dispatch(removeToFav({jwt, fav:data}))
  }

  const addToFavHandle = () =>{
    const data = {
      productId:item?.id,
      title:item?.name,
      images:[...item?.images],
      description:item?.description
    }
    console.log(data)
    dispatch(addToFav({jwt, fav:data}))
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
        <div className="">{
          infav(item?.id)?
          <IconButton  onClick={()=>addToFavHandle()}>
          <FavoriteBorderOutlined/>
        </IconButton>:
        <IconButton onClick={()=>RemoveToFavHandle()}>
           <Favorite sx={{color:'red'}}/>
        </IconButton>
            }
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
