import React from 'react'
import StoreOrderItem from './StoreOrderItem'

const StoreOrder = () => {
  return (
    <div className='px-3 py-3 grid grid-cols-3 gap-3'>
      {
        [1,1,1,1,1,1,1].map(() => {
          return <StoreOrderItem/>
        })
      }
    </div>
  )
}

export default StoreOrder
