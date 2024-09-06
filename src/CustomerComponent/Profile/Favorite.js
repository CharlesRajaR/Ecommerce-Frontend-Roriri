import React from 'react'
import FavoriteCard from './FavoriteCard'

const Favorite = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-gray-100 px-3 py-3'>
      <div className="py-5 text-3xl font-bold text-blue-950 text-center">FAVORITES</div>
      <div className="grid md:grid-cols-5 grid-cols-1 gap-3">
        {
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(()=>{
                return <FavoriteCard/>
            })
        }
      </div>
    </div>
  )
}

export default Favorite
