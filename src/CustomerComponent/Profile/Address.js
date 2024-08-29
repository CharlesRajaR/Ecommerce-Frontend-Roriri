import React, { useState } from 'react'
import AddressModal from './AddressModal'

const Address = () => {

  const[showModal, setShowModal] = useState(false);

  return (
    <>
    <div className='bg-gray-200'>
        <button onClick={()=>setShowModal(true)} className='bg-blue-500 rounded-lg m-3  text-white px-5 py-2 text-2xl font-semibold
         hover:bg-blue-600'>Add new Address{" -> "}</button>
    </div>
    <div className='m-1 w-[100vw] h-[100vh] grid grid-cols-1 md:grid-cols-3 gap-3 bg-gray-200'>
      {
        [1,1,1].map(()=>{
            return(
                <>
                <div className='flex flex-col justify-center items-center  h-[50vh] bg-gray-100'>
                   <div className="text-xl font-semibold">
                    abc street
                   </div>
                   <div className="text-xl font-semibold">
                    Kalakad
                   </div>
                   <div className="text-2xl font-semibold">
                    Tirunelveli
                   </div>
                   <div className="text-2xl font-semibold">
                    TamilNadu
                   </div>
                   <div className="text-3xl font-semibold">
                    India
                   </div>
                   <div>
                    <button className='px-4 py-2 bg-slate-500 hover:bg-slate-600 rounded-md text-white border-black'>
                        Edit Address {" > "}
                    </button>
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
