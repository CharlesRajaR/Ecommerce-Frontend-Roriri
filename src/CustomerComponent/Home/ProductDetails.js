import React, { useState } from 'react'
import Modal from './Modal'

const ProductDetails = () => {
  const [openModal, setOpenModal] = useState(false);

  return ( 
    <React.Fragment>
    <div className='bg-slate-300 flex flex-col justify-center items-center'>
      <div className='box-border'>
       <img src="mobile.jpg" alt="" className=' h-96 w-96 p-9'/>
      </div>
      <div className='flex flex-col justify-start bg-slate-100'>
          <div className='p-9'>
            <p className='text-xl font-semibold text-gray-600'>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Qui rem nam debitis pariatur officiis molestias commodi iste molestiae eveniet hic?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Qui rem nam debitis pariatur officiis molesti
            </p>
             </div>

            <div className="flex  p-9">
                <p className='text-xl font-semibold'>Price: </p>
                <p className='text-3xl font-semibold text-blue-500'>1000000</p>
            </div>

            <div className='flex  p-9'>
                <p className='text-xl font-semibold pt-1'>Available quantity : </p>
                <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-gray-400 rounded shadow'>10</button>
            </div>

            <div className='text-red-800 text-3xl font-semibold p-9'>
                StoreName: Mobile Store
            </div>

            <div className='flex justify-start gap-5 p-9'>

                {true?<button className='bg-yellow-500 hover:bg-yellow-600
                 text-white font-bold py-2 px-4 rounded-full'>
                    Add to cart
                </button>:
                <button className='bg-yellow-500 hover:bg-yellow-600
                 text-white font-bold py-2 px-4 rounded-full'>
                    In Cart
                </button>}

                <button className ='bg-green-700 hover:bg-green-600
                 text-white font-bold py-2 px-4 rounded-full' onClick={()=>setOpenModal(true)}>
                    Buy
                </button>
            </div>
      </div>
    </div>
    <Modal isVisible={openModal} onClose={()=>setOpenModal(false)}/>
    </React.Fragment>
  )
}

export default ProductDetails
