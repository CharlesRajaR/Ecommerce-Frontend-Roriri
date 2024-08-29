import React from 'react'

const AddressModal = ({isVisible, onClose}) => {

    if(!isVisible) return <></>;

    return (
    <div className='fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm 
    flex justify-center items-center'>
        <div className="w-[300px] lg:w-[600px] flex flex-col">
            <button className='text-white text-xl place-self-end' onClick={()=>onClose()}>
                X
            </button>
            <div className='bg-white'>
             <form className='bg-slate-50 shadow-green-300 rounded px-8 pt-6 pb-8 mb-4' action="">
            <div className="mb-4 flex flex-col">
                <input className='mb-3 shadow border rounded w-full py-2 px-3 text-gray-700 
                focus:outline-transparent' type="text" id='streetAddress' 
                placeholder='Street-Address'/>
                <input className='shadow border rounded w-full py-2 px-3 text-gray-700 
                focus:outline-transparent mb-3' type="text" id='City' 
                placeholder='City'/>
                <input className='shadow border rounded w-full py-2 px-3 text-gray-700 
                focus:outline-transparent mb-3' type="text" id='district' 
                placeholder='District'/>
                <input className='shadow border rounded w-full py-2 px-3 text-gray-700 
                focus:outline-transparent mb-3' type="text" id='state' 
                placeholder='State'/>
                <input className='shadow border rounded w-full py-2 px-3 text-gray-700 
                focus:outline-transparent mb-3' type="text" id='country' 
                placeholder='Country'/>
            </div>
            <div>
                <button onClick={()=>onClose()} className='bg-blue-600 text-white rounded-lg 
                font-semibold text-xl px-4 py-2 mb-2'>Create new address {"->"} </button>
            </div>
            
             </form>
            </div>
        </div>
    </div>
  )
}

export default AddressModal
