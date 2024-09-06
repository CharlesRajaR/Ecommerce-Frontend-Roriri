import React from 'react'

const EditDetailsModal = ({isVisible, onClose}) => {
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
             <form className='bg-slate-50 shadow-green-300 rounded px-8 pt-6 pb-8 mb-4' action="">
            <div className="mb-4">
               
                <input className='shadow border mb-3
                 rounded w-full py-2 px-3 text-gray-700 text-center focus:outline-transparent'
                  type="text" id='name' placeholder='name'/>
                
                  <input className='shadow border
                 rounded w-full py-2 px-3 text-gray-700 text-center focus:outline-transparent'
                  type="text" id='phoneNumber' placeholder='PhoneNumber'/>
            </div>
            <div>
                <button onClick={()=>onClose()} className='bg-blue-500 text-white hover:bg-blue-600
                rounded-lg font-semibold text-xl px-4 py-2 mb-2'>Change {"->"} </button>
            </div>
     
             </form>
            </div>
        </div>
    </div>
  )
}

export default EditDetailsModal
