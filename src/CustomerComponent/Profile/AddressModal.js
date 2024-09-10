import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUserAddress } from '../../State/Address/Action';

const AddressModal = ({isVisible, onClose}) => {

    const initialData = {
        streetAddress:"",
        city:"",
        district:"",
        state:"",
        country:"",
        zipcode:Number("")
    }
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const jwt = localStorage.getItem("jwt")
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData)
        dispatch(createUserAddress({data:formData, jwt}))
        setFormData(initialData)
    }
    if(!isVisible) return <></>;
    
    return (
    <div className='fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm 
    flex justify-center items-center'>
        <div className="w-[300px] lg:w-[600px] flex flex-col">
            <button className='text-white text-xl place-self-end' onClick={()=>onClose()}>
                X
            </button>
            <div className='bg-white'>
             <form onSubmit={handleSubmit} className='bg-slate-50 shadow-green-300 rounded px-8 pt-6 pb-8 mb-4' action="">
            <div className="mb-4 flex flex-col">
                <input className='mb-3 shadow border rounded w-full py-2 px-3 text-gray-700 
                focus:outline-transparent' type="text" id='streetAddress' name='streetAddress' value={formData.streetAddress}
                onChange={handleChange}
                placeholder='Street-Address'/>
                <input className='shadow border rounded w-full py-2 px-3 text-gray-700 
                focus:outline-transparent mb-3' type="text" id='City' name='city' value={formData.city}
                onChange={handleChange}
                placeholder='City'/>
                <input className='shadow border rounded w-full py-2 px-3 text-gray-700 
                focus:outline-transparent mb-3' type="text" id='district' name='district' value={formData.district}
                placeholder='District' onChange={handleChange}/>
                <input className='shadow border rounded w-full py-2 px-3 text-gray-700 
                focus:outline-transparent mb-3' type="text" id='state' name='state' value={formData.state}
                placeholder='State' onChange={handleChange}/>
                <input className='shadow border rounded w-full py-2 px-3 text-gray-700 
                focus:outline-transparent mb-3' type="text" id='country' name='country' value={formData.country}
                placeholder='Country' onChange={handleChange}/>
                <input className='shadow border rounded w-full py-2 px-3 text-gray-700 
                focus:outline-transparent mb-3' type="number" id='zipcode' name='zipcode' value={formData.zipcode}
                placeholder='Zipcode' onChange={handleChange}/>
            </div>
            <div>
                <button type='submit' className='bg-blue-600 text-white rounded-lg 
                font-semibold text-xl px-4 py-2 mb-2'>Create new address {"->"} </button>
            </div>
            
             </form>
            </div>
        </div>
    </div>
  )
}

export default AddressModal
