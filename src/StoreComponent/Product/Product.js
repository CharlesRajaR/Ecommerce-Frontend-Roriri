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
    <div className='h-full  mb-3  flex flex-col bg-blue-100 justify-between'>
      <div className="flex md:h-[30vh] justify-center bg-blue-50  items-center">
        <div className="">
            <img src={item?.images[0]} alt=""  className='object-cover w-3/4 h-3/4 md:w-full md:h-full'/>
        </div>
      </div>
      <div className="h-full md:h-[20vh] flex justify-between ">
      <div className="flex flex-col">
         <div className="text-2xl font-bold text-gray-500">{item?.name}</div>
         <div className="text-2xl font-semibold text-gray-500">{`Price:${item?.price}`}</div>
           <div className="text-xl  text-gray-500">{`${item?.description}`}</div>
      </div>
      <div className="flex flex-col">
        <div className="">{
          !infav(item?.id)?
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
