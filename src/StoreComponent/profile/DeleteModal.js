import React from 'react'

const DeleteModal = ({isVisible, onClose}) => {
    if(!isVisible){
        return <></>;
    }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm 
    flex justify-center items-center'>
        <div className="w-[300px] lg:w-[600px] flex flex-col">
            <button className='text-white text-xl place-self-end' onClick={()=>onClose()}>
                X
            </button>
            <div className='bg-red-300 px-5 py-3 text-center text-red-700 text-xl font-semibold '>
               If the account is deleted, recovary of account is impossible
               <div>
                <button className='bg-red-800 mt-3 text-yellow-50 rounded-lg hover:bg-red-950 px-4 py-2 text-xl font-semibold'>
                    Confirm
                </button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default DeleteModal
