import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStoreOrder } from '../../State/StoreOrder/Action'
import OrderModal from './OrderModal'

const StoreOrder = () => {

  const [ items, setItems] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const openhandle = ({item}) =>{
      console.log("items",item)
      setItems({item});
      setOpenModal(true);
       console.log("items",items)
  }
  const { storeOrder, store } = useSelector(store => store)
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt")
  useEffect(()=>{
       dispatch(getStoreOrder({jwt, storeId:store?.store?.id}))
       console.log("storeorder",storeOrder)
  },[])

  
  return (<>
    <div className={`${storeOrder?.storeOrder?.length === 0?'block text-3xl text-center font-semibold':'hidden'}`}>
      No Orders till now
    </div>
    <div className={`${storeOrder?.storeOrder?.length === 0?'hidden':' w-full bg-blue-50'}`}>
      <div className='flex justify-center text-3xl pt-5 font-bold'>
       
            Orders
      </div>
      <div className='overflow-x-auto'>

      
       <table className='table-auto w-full   m-5 hidden lg:block bg-blue-100'>
        <thead className='py-15 bg-white'>              
            <tr className=' text-xl md:text-2xl font-semibold text-gray-700 '>
              <th className='px-3 py-3'>id</th>
              <th className='px-3 py-3'>Date</th>
              <th className='px-3 py-3'>Customer</th>
              <th className='px-3 py-3'>Name</th>
              <th className='px-3 py-3'>Quantity</th>
              <th className='px-3 py-3'>Total Price</th>
              <th className='px-3 py-3'>OrderStatus</th>
              <th className='px-3 py-3'>Delivary Address</th>
              <th className='px-3 py-3'>UPDATE</th>
            </tr>
          </thead>
          <tbody>
            {
              storeOrder?.storeOrder?.map((item, i)=>{
                return(
              <tr key={i} className={`${i%2==0?'bg-blue-200':'bg-blue-100'} item-center border-b-2 border-r-2 border-l-2 border-t-2 border-dotted border-black px-5 py-11 text-xl font-semibold text-gray-700`} >
              <td className='px-3' >{i+1}</td>
              <td className='px-3'>{item?.createdAt.substring(0,10)}</td>
              <td className='px-3'>Customer</td>
              <td className='px-3'>{item?.product?.name}</td>
              <td className='px-3'>Quantity:{item?.quantity}</td>
              <td className='text-xl flex flex-col px-3'>
                <p>Price per quantity:{item?.product?.price}</p>
                <p>Total Price:{item?.totalPrice}</p></td>
              <td className='px-3'>
                <button className='text-2xl font-semibold text-white bg-pink-500 px-4 py-2
                 rounded-lg'>
                  {item.orderStatus}
                </button>
              </td>
              <td className='px-3'>
                <button className=' flex flex-col text-start text-blach bg-pink-100 px-4 py-2
                 rounded-lg'>
                 <p>{item?.order?.deliveryAddress?.streetAddress}</p>
                 <p>{item?.order?.deliveryAddress?.city}</p>
                 <p>{item?.order?.deliveryAddress?.district}</p>
                </button>
              </td>
              <td >
                <button className='bg-green-500 hover:bg-green-700 px-3 py-1 text-white font-semibold text-2xl rounded-lg'
                onClick={()=>openhandle({item})}>UPDATE</button>
              </td>
              </tr>
                )
              })
            }
          </tbody>
       </table>
       </div>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-3 lg:hidden'>
        {
          storeOrder?.storeOrder?.map((item)=>{
            return(
              <div className='flex flex-col justify-center items-center w-full m-1 px-2 py-2 bg-blue-100 rounded h-full'>
                 <div className="text-2xl font-semibold text-black">CREATED AT: {item?.createdAt?.substring(0,10)}</div>
                 <div className="flex flex-col justify-center items-center mt-5">
                  <div className="mb-5 flex flex-col justify-center items-center">
                      <div className="text-2xl font-semibold text-gray-900">
                        Product Details
                      </div>
                      <div className="">
                        <img src={item?.product?.images?.[0]} alt="" />
                      </div>
                      <div className="text-xl font-semibold">
                        Name:{item?.product?.name}
                      </div>
                      <div className="text-xl font-semibold">
                        Price per quantity:{item?.product?.price}
                      </div>
                  </div>
                  <div className=" mb-5 border-b-2 border-l-2 rounded-lg border-r-2 border-t-2 border-black border-dotted flex flex-col text-gray-900 px-5">
                    <div className="text-2xl font-semibold  uppercase ">
                      Delivery Address:
                    </div>
                    <div className="text-xl font-semibold flex flex-col justify-center items-center">
                      <div className="">{item?.order?.deliveryAddress?.streetAddress}</div>
                      <div className="">{item?.order?.deliveryAddress?.city}</div>
                      <div className="">{item?.order?.deliveryAddress?.district}</div>
                    </div>
                  </div>
                  <div className="mb-5 mt-5 flex flex-col text-2xl font-semibold text-gray-900- justify-center items-center">
                     <div className="">
                         Quantity: {item?.quantity}
                     </div>
                     <div className="">
                         Price:{item?.totalPrice}
                     </div>
                     <div className="">
                         <button className='text-white rounded-lg bg-pink-500 hover:bg-pink-600 px-3 py-1'>STATUS : {item?.orderStatus}</button> 
                     </div>
                     <div className='mt-3'>
                     <button className='bg-green-500 hover:bg-green-700 px-3 py-1 text-white font-semibold text-2xl rounded-lg'
                onClick={()=>openhandle({item})}>UPDATE</button>
                </div>
                  </div>
                  
                 </div>
              </div>
            )
          })
        }
       </div>
    </div>
    <OrderModal isVisible={openModal} onClose={()=>setOpenModal(false)} item={items}/>
    </>
  )
}

export default StoreOrder
