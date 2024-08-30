import React from 'react'
import Banner from './Banner'
import Product from '../Product/Product'

const Shome = () => {
  return (
    <div>
      <Banner/>
      <div className='px-3 py-3 grid grid-cols-5 gap-3 bg-white'>
        {
            [1,1,1,1,1,1,1,1,1,1,1].map(() =>{
                return <Product/>
            })
        }
      </div>
    </div>
  )
}

export default Shome
