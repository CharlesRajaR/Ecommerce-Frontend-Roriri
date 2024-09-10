import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { uploadImageToCloudinary } from './util/util';
import { CircularProgress, IconButton } from '@mui/material';
import { AddPhotoAlternate, Close } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { createStore } from '../State/store/Action';

const Main = () => {
    const [isCreating, setIsCreating] = useState(false);

  const handleClick = () => {
    setIsCreating(true);
    setTimeout(() => {
      setIsCreating(false);
    }, 7000); // Simulate a 3-second process
  };

    const { store } = useSelector(store => store)

    const [uploadImage, setUploadImage] = useState();

    const images = [];

    const [formImage, setFormImage] = useState(images);
    const [name, setName] = useState("");

    const handleImageChange = async(e) =>{
      console.log("e.target.files[0]",e.target.files[0])
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file)
    setFormImage([...formImage, image])
    setUploadImage(false)
  }

  const handleNameChange = (e) =>{
    setName(e.target.value)
    console.log(name);
  }

  const [description, setDescription] = useState("")
  const handleDescriptionChange = (e) =>{
    setDescription(e.target.value)

  }

  const handleRemoveImage =(index) =>{
    const updatedImages = [...formImage]
      updatedImages.splice(index, 1)
      setFormImage(updatedImages)
  }

  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const jwt = localStorage.getItem("jwt")
    const data = {
      "name":name,
      "description":description,
      "images":formImage
    }
    
    dispatch(createStore({jwt, reqData:data}))

    console.log(data,jwt);
    console.log(store)
  }
  return (
    <div className=' w-[100vw] h-[100vh] bg-blue-300 flex flex-col justify-center items-center '>
      <div className="w-full  md:w-1/4 md:h-1/4 mb-5 bg-blue-200 rounded text-center flex flex-col text-blue-700 text-2xl font-semibold py-3 px-3">
         <div className="text-white">
           Already have a store? 
          </div>
          <button  type='button' className=' rounded-lg px-3 py-2 bg-yellow-500 text-white' disabled>
            Please wait........
          </button>
      </div>
        <div className='w-full md:w-2/4 md:h-3/4 mt-3 bg-blue-100 rounded flex flex-col justify-center items-center '>
            <form onSubmit={handleSubmit}>
                
         <div className="mx-5">
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
            formImage.map((image, index) => <div className='relative'>
              <img src={image} className='w-24 h-24 object-cover' key={index} alt=""/>
              <IconButton size='small' sx={{position:'absolute', top:0, right:0, outline:"none"}}
               onClick={() => handleRemoveImage(index)}>
                <Close sx={{fontSize:"1rem"}}/>
              </IconButton>
            </div>)
            }
           </div>
           <div className="mt-3">
                    <input type="text" placeholder='Name' id='name' name='name' value={name} onChange={handleNameChange} className='w-full mb-3
                    text-center text-xl font-semibold text-gray-700 px-3 py-1 rounded focus:outline-none'/>
                     <input type="text" placeholder='Description' id='description' name='description' value={description} onChange={handleDescriptionChange} className='w-full mb-3
                     text-center text-xl font-semibold text-gray-700 px-3 py-1 rounded focus:outline-none'/>
                </div>
                </div>

                <div className="mx-5">
                  
                    <button disabled={isCreating} className={` ${isCreating ? ' cursor-not-allowed' : ''} bg-pink-500 text-white px-3 py-1 rounded-lg text-2xl font-semibold`} type='submit' onClick={handleClick}>
      <span>{isCreating ? 'Creating...' : 'Create Store ->'}</span>
      
    
                    </button>
                 </div>
            </form>
        </div>
    </div>
  )
}

export default Main
