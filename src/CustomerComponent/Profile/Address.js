import React, { useEffect, useState } from 'react'
import AddressModal from './AddressModal'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAddress, getUserAddress } from '../../State/Address/Action';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

const Address = () => {
  const { address } = useSelector(store => store)
  const jwt = localStorage.getItem("jwt")
  const dispatch = useDispatch();
  
  const[showModal, setShowModal] = useState(false);

  const deleteAddress = (id) =>{
    dispatch(deleteUserAddress({jwt,id}))
  }
  return (
    <>
    <div className='bg-gray-200'>
        <button onClick={()=>setShowModal(true)} className='bg-blue-500 rounded-lg m-3  text-white px-5 py-2 text-2xl font-semibold
         hover:bg-blue-600'>Add new Address{" -> "}</button>
    </div>
    <div className='m-1 w-[100vw] h-[100vh] grid grid-cols-1 md:grid-cols-3 gap-3 bg-gray-200'>
      {
        address?.userAddress?.map((item, i)=>{
            return(
                <>
                <div className='flex flex-col text-gray-700 justify-center items-center  h-[50vh] bg-gray-100'>
                   <div className="text-xl font-semibold">
                    {item?.streetAddress}
                   </div>
                   <div className="text-xl font-semibold">
                    {item?.city}
                   </div>
                   <div className="text-2xl font-semibold">
                    {item?.district}
                   </div>
                   <div className="text-2xl font-semibold">
                    {item?.state}
                   </div>
                   <div className="text-3xl font-semibold">
                    {item?.country}
                   </div>
                   <div className="text-3xl font-semibold">
                    {item?.zipcode}
                   </div>
                   <div>
                    <button className='px-4 py-2 bg-slate-500 hover:bg-slate-600 rounded-md text-white border-black'>
                        Edit Address {" > "}
                    </button>
                    
                   </div>
                   <div className="" >
                    <IconButton onClick={()=>deleteAddress(item.id)} sx={{color:'black'}}>
                      <Delete/>
                    </IconButton>
                   </div>
                </div>
                </>
            )
        })
      }
    </div>
    <AddressModal isVisible={showModal} onClose={()=>setShowModal(false)}/>
    </>
  )
}

export default Address
