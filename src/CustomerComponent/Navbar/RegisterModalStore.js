import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../State/Authentication/Action';
import { useNavigate } from 'react-router-dom'

const RegisterModalStore = ({isVisible, onClose}) => {
  const navigate = useNavigate();
  const initialValues ={
    "name":"",
    "password":"",
    "email":"",
    "phoneNumber":"",
    "role":"ROLE_STORE_OWNER"
  }

  const [formData, setFormData] = useState(initialValues);

  const dispatch = useDispatch();

  if(!isVisible){
    return <></>
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(registerUser({userData:formData, navigate}))
   
    console.log(formData);
  }
  const handleChange = (e) =>{
     setFormData({...formData, [e.target.name]:e.target.value});
     console.log(e.target.name, e.target.value)
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm 
    flex justify-center items-center'>
        <div className="w-[300px] lg:w-[600px] flex flex-col">
            <button className='text-white text-xl place-self-end' onClick={()=>onClose()}>
                X
            </button>
            <div className='bg-white'>
             <form onSubmit={handleSubmit} className='bg-slate-50 shadow-green-300 rounded px-8 pt-6 pb-8 mb-4' action="">
            <div className="mb-4">
                <input className='shadow border mb-3
                 rounded w-full py-2 px-3 text-gray-700 focus:outline-transparent'
                  type="text" id='name' placeholder='Name' name='name' onChange={handleChange}  value={formData.name}/>
                <input className='shadow border mb-3
                 rounded w-full py-2 px-3 text-gray-700 focus:outline-transparent'
                  type="text" id='email' placeholder='Email' name='email' onChange={handleChange} value={formData.email}/>
                  <input className='shadow border mb-3
                 rounded w-full py-2 px-3 text-gray-700 focus:outline-transparent'
                  type="text" id='phoneNumber' placeholder='PhoneNumber' name='phoneNumber' onChange={handleChange} value={formData.phoneNumber} />
                  <input className='shadow border mb-3
                 rounded w-full py-2 px-3 text-gray-700 focus:outline-transparent'
                  type="text" id='password' placeholder='Password' name='password' onChange={handleChange} value={formData.password}/>
                  </div>

            <div>
                <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white 
                rounded-lg font-semibold text-xl px-4 py-2 mb-2'>Register {"->"} </button>
            </div>
     
             </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterModalStore