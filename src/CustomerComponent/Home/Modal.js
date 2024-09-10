import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createSingleOrder } from '../../State/Order/Action';
import { useNavigate } from 'react-router-dom';

const Modal = ({isVisible, onClose, product}) => {
    const navigate = useNavigate()
    const [squantity, setSquantity] = useState(Number(0));
    const handleChange = (e) =>{
        setSquantity(e.target.value)
    }
    const dispatch = useDispatch()
    const { address } = useSelector(store => store)
    const jwt = localStorage.getItem("jwt")
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = {
            productId:product?.id,
            quantity:squantity,
            addressId:address?.selectAddress?.[0].id
        }
        dispatch(createSingleOrder({jwt, req:data, navigate}))
        console.log(data)
    }

    if(!isVisible) return <></>;
    console.log("product",product)
    
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
                <label className='block text-gray-700 text-xl font-bold mb-2' htmlFor="Quantity">
                    Quantity
                </label>
                <input className='shadow border
                 rounded w-full py-2 px-3 text-gray-700 focus:outline-transparent'
                  type="number" id='username' placeholder={`Available quantity${10}`} 
                  name='quantity' value={squantity} onChange={handleChange}/>
            </div>
            <div>
                <button onClick={()=>onClose()} className='bg-blue-600 text-white rounded-lg font-semibold text-xl px-4 py-2 mb-2'>Add new address {"->"} </button>
            </div>
            <div>
                <button type='submit' className='bg-green-600 text-white rounded-lg font-semibold text-xl px-4 py-2'>Continue with Selected address {"->"}</button>
            </div>
             </form>
            </div>
        </div>
    </div>
  )
}

export default Modal
