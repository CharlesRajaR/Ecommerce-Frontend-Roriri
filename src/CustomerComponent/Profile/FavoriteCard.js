import React from 'react'
import img from '../../assets/mobile.jpg'
import { useDispatch } from 'react-redux'
import { removeToFav } from '../../State/Authentication/Action';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const FavoriteCard = ({item, i}) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const RemoveToFavHandle = () =>{
    const data = {
      productId:item?.productId,
      title:item?.title,
      images:[...item?.images],
      description:item?.description
    }
    dispatch(removeToFav({jwt, fav:data}))
    console.log(data)

  }

  return (
    <div className='flex flex-col bg-blue-200'>
    <div className='bg-blue-100 h-[30vh] relative flex justify-center items-center'>
        <img className='absolute h-3/4 object-cover' src={item?.images?.[0]} alt="" />
    </div>
    <div className="text-xl text-gray-600 font-semibold flex justify-center items-center text-center">
      <div>
         {item?.title}
      </div>
      <div className="">
        <IconButton onClick={()=>RemoveToFavHandle()}>
          <Delete sx={{color:'red'}}/>
        </IconButton>
      </div>
    </div>
    <div className='text-2xl text-gray-500 font-bold text-center'>
        {item?.description}
    </div>
   
    </div>
  )
}

export default FavoriteCard
