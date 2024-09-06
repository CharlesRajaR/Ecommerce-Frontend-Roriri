import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {

    const { auth } = useSelector(store => store)
    console.log("auth",auth)
    const navigate = useNavigate()
    useEffect(()=>{
        if(auth?.jwt === null){
          navigate('/loginorreg')
        }
    },[])
  return (
    <div>
      userprofile
    </div>
  )
}

export default UserProfile
