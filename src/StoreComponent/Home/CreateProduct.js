import { AddPhotoAlternate } from '@mui/icons-material'
import React from 'react'

const CreateProduct = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-gray-300 flex justify-center items-center">
        <div className='w-[50vw]'>
            <form className='' action="">
                <input type='file' accept='image/*' id='fileInput' style={{display:"none"}} />
                <label htmlFor='fileInput' className='relative'></label>
                <span className='w-24 h-24 cursor-pointer flex justify-center p-3 border rounded-md border-gray-600'>
              <AddPhotoAlternate className='text-black'/>
            </span>
                 <input class="mb-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name" type="text" placeholder="Name"/>
                   <input class="mb-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description" type="text" placeholder="Description"/>
                   <input class="mb-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="quantity" type="text" placeholder="Quantity"/>
                   <input class="mb-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="price" type="text" placeholder="Price"/>
                  <button className='px-4 py-2 text-center text-2xl font-semibold text-white bg-yellow-400 hover:bg-yellow-500 rounded-lg'>Create</button>
            </form>
        </div>
    </div>
  )
}

export default CreateProduct
