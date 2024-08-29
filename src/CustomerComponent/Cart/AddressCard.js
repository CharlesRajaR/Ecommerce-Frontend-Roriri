import React from 'react'

const AddressCard = () => {
  return (
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
                    <button className='px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white border-black'>
                        Select delivery Address
                    </button>
                   </div>
                </div>
                </>
  )
}

export default AddressCard
