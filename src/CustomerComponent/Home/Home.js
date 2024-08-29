import React from 'react'
import Product from './Product';
import ProductDetails from './ProductDetails';

const Home = () => {
  return (
    <div className=''>
    {
        [1,1,1,1,1,1,1,1,1,1,1].map(()=>{
            return (<div className='gap-3 bg-slate-300 '>
                <Product/>
            </div>)
        })
    }
    {/* <ProductDetails/> */}
    </div>
  )
}

export default Home
