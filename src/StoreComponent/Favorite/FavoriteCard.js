import { Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeToFav } from '../../State/Authentication/Action'

const FavoriteCard = ({item}) => {
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch()
  const removeFavHandle = () =>{
       dispatch(removeToFav({jwt, fav:item}))
  }
  return (
    <div className='flex flex-col bg-blue-200'>
    <div className='bg-blue-100 h-[30vh] relative flex justify-center items-center'>
        <img className='absolute h-3/4 object-cover' src={item?.images[0]} alt="" />
    </div>
    <div className="text-xl flex justify-center items-center text-gray-600 font-semibold text-center">
     <div className="">
        {item?.title}
     </div>
      <div className="">
          <IconButton onClick={()=>removeFavHandle()}>
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
