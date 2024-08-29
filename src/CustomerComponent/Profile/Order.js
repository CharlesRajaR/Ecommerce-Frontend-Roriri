import React from 'react'

const Order = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-slate-400 grid grid-cols-1 gap-3 m-1'>
        {[1,1,1,1,1].map(()=>{
                  return(
                    <>
                    <div className="bg-slate-100 h-[50vh] w-[100vw] flex justify-between">
                        <div className="flex flex-col w-[50vw]">
                           <div className='h-[50vh]'>
                            <p>username</p>
                           </div>
                           <div className='h-[50vh]'>
                            address
                           </div>
                        </div>
                        <div className=' flex justify-center items-center w-[50vw] bg-slate-300'>
                          <button className='bg-green-500 rounded-lg px-4 py-2 hover:bg-green-600'>Items {" -> "}</button>
                        </div>
                    </div>
                    </>
                  )
        })}
    </div>
  )
}

export default Order
