import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAddress } from '../../State/Address/Action'

const AddressCard = ({item}) => {
  const dispatch = useDispatch()
  const { address } = useSelector(store => store)
  const selectAddressHandle = (id) =>{
      dispatch(selectAddress(id));
      console.log("address",address)
  }
  return (
    <>
                <div className='flex flex-col justify-center items-center  h-[50vh] bg-gray-100'>
                   <div className="text-xl font-semibold">
                    {item?.streetAddress}
                   </div>
                   <div className="text-xl font-semibold">
                    {item?.city}
                   </div>
                   <div className="text-2xl font-semibold">
                    {item?.district}
                   </div>
                   <div className="text-2xl font-semibold">
                    {item?.state}
                   </div>
                   <div className="text-3xl font-semibold">
                    {item?.country}
                   </div>
                   <div className="text-3xl font-semibold">
                    {item?.zipcode}
                   </div>
                   <div>
                    {
                      address?.selectAddress?.[0].id === item.id?<button className='px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md
                     text-white border-black'>
                         selected Address
                      </button>:
                      <button className='px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md
                     text-white border-black' onClick={()=>selectAddressHandle(item.id)}>
                        Select delivery Address
                    </button>
                    }
                    
                   </div>
                </div>
                </>
  )
}

export default AddressCard
