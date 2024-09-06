import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import img from '../../assets/mobile.jpg'
import DeleteModal from './DeleteModal';
import EditDetailsModal from './EditDetailsModal';
import { useSelector } from 'react-redux';
import { uploadImageToCloudinary } from '../util/util';

const Profile = () => {

  const { store } = useSelector(store => store)

  console.log(store)
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [images, setImages] = useState("")

    const handleImageChange = async(e) =>{
      console.log("e.target.files[0]",e.target.files[0])
    const file = e.target.files[0];
    const image = await uploadImageToCloudinary(file)
    setImages(image);

  }

  return (
    <div className='w-[100%] flex flex-col justify-center items-center h-[80vh] bg-blue-100'>
      <div>
        {
          store?.store?.owner?.profilePicture !== null?<Avatar src={img} sx={{width:200 , height:200 }}/>:
          <>
          <input type='file' accept='image/*' id='fileInput' 
           onChange={handleImageChange} />
          </>
        }
        
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-5xl font-bold text-black">
          {store?.store?.owner?.name}
        </div>
        <div className="text-xl text-gray-500">
          {store?.store?.owner?.email}
        </div>
        <div className="text-xl font-bold text-gray-500">
          {store?.store?.owner?.phoneNumber}
        </div>
      </div>
        
        
  
          <div>
            <button onClick={()=>setShowEditModal(true)} className='text-xl mt-3 font-bold bg-gray-300 hover:bg-gray-400 
            px-4 py-2 rounded-lg'>
                Edit details{ ' -> '}
            </button>
            </div>
            <div>
            <button onClick={()=>setShowDeleteModal(true)} className='text-xl mt-3 font-bold bg-red-500 text-white hover:text-2xl hover:bg-red-600 
            px-4 py-2 rounded-lg'>
                Delete Account{ ' -> '}
            </button>
          </div>
        
        <DeleteModal isVisible={showDeleteModal} onClose={()=>setShowDeleteModal(false)}/>
        <EditDetailsModal isVisible={showEditModal} onClose={()=>setShowEditModal(false)}/>
    </div>

  )
}

export default Profile
