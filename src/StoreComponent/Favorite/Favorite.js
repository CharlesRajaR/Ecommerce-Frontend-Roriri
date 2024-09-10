import React from 'react'
import FavoriteCard from './FavoriteCard'
import { useSelector } from 'react-redux'

const Favorite = () => {

  const { auth } = useSelector(store => store)

  return (
    <div className='w-[100vw] h-[100vh] bg-gray-100 px-3 py-3'>
      <div className="py-5 text-3xl font-bold text-blue-950 text-center">FAVORITES</div>
      <div className="grid md:grid-cols-5 grid-cols-1 gap-3">
        {
            auth?.favorite?.map((item, i)=>{
                return <FavoriteCard key={i} item={item}/>
            })
        }
      </div>
    </div>
  )
}

export default Favorite
