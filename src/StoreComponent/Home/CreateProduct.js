import { AddPhotoAlternate, Close } from '@mui/icons-material'
import { CircularProgress, IconButton } from '@mui/material';
import React, { useState } from 'react'
import { uploadImageToCloudinary } from '../util/util';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../State/StoreProduct/Action';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const [create, setCreate ] = useState(false)
  const handleCreate = () =>{
    setCreate(true)
    setTimeout(()=>setCreate(false), 7000)
  }

  const { store } = useSelector(store => store)
  const images = [];

  const [formImage, setFormImage] = useState(images);

  const initialValues = {
    "name":"",
    
    "description":"",
    "price":Number(0),
    "quantity":Number(0),
    "storeId":store?.store?.id
  }
  
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  const [uploadImage, setUploadImage] = useState();



  const handleImageChange = async(e) =>{
      console.log("e.target.files[0]",e.target.files[0])
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file)
    setFormImage([...formImage, image])
    setUploadImage(false)
  }

   const handleRemoveImage =(index) =>{
    const updatedImages = [...formImage]
      updatedImages.splice(index, 1)
      setFormImage(updatedImages)
  }

  const dispatch = useDispatch();

  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault();
    // setFormData({...formData, "images":formImage})
    console.log(formData)
    console.log(formImage)
    dispatch(createProduct({navigate, jwt, productReq:{...formData, "images":formImage}}))
    setFormData(initialValues);
  }
  return (
    <div className="w-[100vw] h-[100vh] bg-gray-300 flex justify-center items-center">
        <div className='w-[50vw]'>
            <form className='' onSubmit={handleSubmit} action="">
                <input type='file' accept='image/*' id='fileInput' style={{display:"none"}} 
           onChange={handleImageChange} />
           <label htmlFor='fileInput' className='relative'>
            <span className='w-24 h-24 cursor-pointer flex justify-center p-3 border rounded-md border-gray-600'>
              <AddPhotoAlternate className='text-white'/>
            </span>
            {
              uploadImage && <div className='absolute top-0 left-0 bottom-0 right-0 w-24 h-24 flex justify-center items-center'>
              <CircularProgress/>     
              </div>
            }
           </label>
           <div className='flex flex-wrap gap-2'>
            { 
            formImage.map((image, index) => <div key={index} className='relative'>
              <img src={image} className='w-24 h-24 object-cover' key={index} alt=""/>
              <IconButton size='small' sx={{position:'absolute', top:0, right:0, outline:"none"}}
               onClick={() => handleRemoveImage(index)}>
                <Close sx={{fontSize:"1rem"}}/>
              </IconButton>
            </div>)
            }
           </div>
                 <input className="mb-2 mt-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name" type="text" placeholder="Name" name='name' value={formData.name}
                  onChange={handleChange}/>
                   <input className="mb-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description" type="text" placeholder="Description" name='description' 
                  value={formData.description} onChange={handleChange}/>
                   <input className="mb-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="quantity" type="number" placeholder="Quantity" name='quantity' 
                  value={formData.quantity} onChange={handleChange}/>
                   <input className="mb-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="price" type="number" placeholder="Price" name='price' value={formData.price}
                  onChange={handleChange}/>
                  <button type='submit' className='px-4 py-2 text-center text-2xl font-semibold text-white bg-yellow-400
                   hover:bg-yellow-500 rounded-lg' onClick={handleCreate}>{create?'Creating...':'Create'}</button>
            </form>
        </div>
    </div>
  )
}

export default CreateProduct
