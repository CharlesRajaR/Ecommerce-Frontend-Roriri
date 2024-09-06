import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import RegisterModalStore from './RegisterModalStore';

const LoginOrRegister = () => {
  const[showLoginModal, setShowLoginModal] = useState(false);
  const[showRegisterModal, setShowRegisterModal] = useState(false);
  const[showRegisterSModal, setShowRegisterSModal] = useState(false);

  return (
    <div className='w-[100vw] h-[100vh] bg-slate-200 flex flex-col justify-center items-center'>
    <div className="">
        <button onClick={()=>setShowLoginModal(true)} className='mb-3 w-[20w] md:w-[30vw] bg-blue-500 hover:bg-blue-600 
        rounded-lg px-4 py-2 text-2xl font-semibold font-white'>Login {' -> '}</button>
    </div>
    <div>
       <button onClick={()=>setShowRegisterModal(true)} className='w-[20w] md:w-[30vw] bg-blue-500 hover:bg-blue-600 rounded-lg 
    px-4 py-2 text-2xl font-semibold font-white mb-3'>Register{' -> '}</button>
    </div>
     <div>
       <button onClick={()=>setShowRegisterSModal(true)} className='w-[10w] md:w-[20vw] bg-green-500 hover:bg-green-600 rounded-lg 
    px-3 py-1 text-xl font-semibold font-white'>Register as store owner{' -> '}</button>
    </div>
    <LoginModal isVisible={showLoginModal} onClose={()=>setShowLoginModal(false)} />
    <RegisterModal isVisible={showRegisterModal} onClose={()=>setShowRegisterModal(false)} />
      <RegisterModalStore isVisible={showRegisterSModal} onClose={()=>setShowRegisterSModal(false)} />
   </div>
  )
}

export default LoginOrRegister
