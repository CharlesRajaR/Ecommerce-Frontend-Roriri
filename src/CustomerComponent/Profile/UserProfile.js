import { AccountCircle } from '@mui/icons-material'
import React from 'react'

const UserProfile = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center bg-blue-300 text-white'>
        <div className='flex flex-col'>
            <div className="text-center text-3xl">
                <AccountCircle fontSize='100px'/>
            </div>
            <div className="text-center">
                <p className='text-3xl text-gray-500'>CHARLES RAJA R</p>
            </div>
            <div className="text-center">
                <p className='text-xl'>
rcharlesraja@gmail.com
                </p>
            </div>
        </div>
    </div>
  )
}

export default UserProfile
