import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../State/Authentication/Action';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({isVisible, onClose}) => {
    const initialValues = {
        "email":"",
        "password":""
    } 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialValues);

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(loginUser({userData:formData, navigate}))
        console.log(formData)
    } 

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    if(!isVisible){
        return <></>
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
               
                <input onChange={handleChange} className='shadow border mb-3
                 rounded w-full py-2 px-3 text-gray-700 focus:outline-transparent'
                  type="text" id='email' placeholder='Email' name="email" value={formData.email}/>
                
                  <input onChange={handleChange} className='shadow border
                 rounded w-full py-2 px-3 text-gray-700 focus:outline-transparent'
                  type="text" id='password' placeholder='Password' name="password" value={formData.password}/>
            </div>
            <div>
                <button type='submit' className='bg-blue-500 text-white hover:bg-blue-600
                rounded-lg font-semibold text-xl px-4 py-2 mb-2'>Login {"->"} </button>
            </div>
     
             </form>
            </div>
        </div>
    </div>
  )
}

export default LoginModal
