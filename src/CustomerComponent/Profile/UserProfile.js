import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserByJwtToken, uploadUserProfile } from '../../State/Authentication/Action'
import { Avatar } from '@mui/material'
import { uploadImageToCloudinary } from '../../StoreComponent/util/util'

const UserProfile = () => {

    const { auth } = useSelector(store => store)
    console.log("auth",auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const [image, setImage] = useState("")
    const handleImageChange = async(e) =>{
    console.log("e.target.files[0]",e.target.files[0])
    const file = e.target.files[0];
    
    const image = await uploadImageToCloudinary(file)
    setImage(image);
    dispatch(uploadUserProfile({jwt, image}))
    console.log("uloaded image", image)

  }

    useEffect(()=>{
        if(auth?.jwt === null){
          navigate('/loginorreg')
        }
        if(auth?.currentUser === null){
            dispatch(getUserByJwtToken({navigate, jwt:auth?.jwt || jwt}))
        }
    },[])
  return (
    <div className='h-screen flex flex-col justify-center bg-blue-100 items-center'>
      <div className="flex flex-col justify-center ">
        { auth?.currentUser?.profilePicture === null?<>
        <input type='file' accept='image/*' id='fileInput' style={{display:"none"}} 
           onChange={handleImageChange} />

           <label htmlFor='fileInput' className='relative cursor-pointer  w-14 h-14'>
            <Avatar sx={{width:70, height:70}}>
            </Avatar>
            <span className='text-center text-2xl font-semibold '>upload</span>
      
            </label>
           </>
        :<>
        <img src={auth?.currentUser?.profilePicture} alt="hi" />
        { console.log("logging", auth?.currentUser?.profilePicture)}
        </>
         }
        
      </div>
      <div className="flex flex-col text-2xl font-semibold text-gray-900 justify-center items-center">
        <div className="">
         {auth?.currentUser?.name}
        </div>
        <div className="">
        {auth?.currentUser?.email}
        </div>
        <div className="">
        {auth?.currentUser?.phoneNumber}
        </div>
      </div>
    </div>
  )
}

export default UserProfile
