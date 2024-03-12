import React, { useState } from 'react'
import log from'../assets/log_in_pick.png';
import google from'../assets/google_pick.png';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
const Log_in = () => {
  let [email,setEmail]=useState('');
  let [emailerr,setEmailerr]=useState(false);
  let [password,setPassword]=useState('')
  let [passworderr,setPassworderr]=useState(false);
  let [hide,setHide] =useState(true);
  let  handleToggle = () => {
    setHide(!hide);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailerr(true);
    }
    if (!password) {
      setPassworderr(true);
    }
  };
  return (
    <div className='flex'>
       <div className='w-1/2 flex justify-end items-center mr-[140px]'>
         <div>
         <h1 className="font-nunito font-bold text-[35px] text-primary mb-3">
         Login to your account!
          </h1>
          <div className='flex gap-3 w-[220px] p-5 border-[1.72px] border-bad mb-3'>
            <img src={google} alt="" />
            <h5 className='font-openSans font-semibold  text-sm text-primary'>Login with Google</h5>
          </div>
          <form action="">
             <div className=' relative mt-[62px]'>
             <label className='font-nunito font-semibold text-[13px] text-inp bg-white px-4 absolute top-[-8px] left-[0px]'>
             Email Addres
             </label>
             <input className='w-[368px] border-b-[1.72px] border-bad font-nunito font-semibold text-[21px] text-primary px-[22px] py-[20px] outline-none'
             onChange={(e)=>{
              setEmail(e.target.value);
              setEmailerr(false);
             }}
             type="text" />
             {emailerr && (
              <>
              <p className="text-red-600">Please enter valid email</p>
              </>
             )}
            </div>
            <div className=' relative mt-[62px]'>
             <label className='font-nunito font-semibold text-[13px] text-inp bg-white px-4 absolute top-[-8px] left-[0px]'>
             Password
             </label>
             <input className='w-[368px] border-b-[1.72px] border-bad font-nunito font-semibold text-[21px] text-primary px-[22px] py-[20px] outline-none'
             onChange={(e)=>{
              setPassword(e.target.value);
              setPassworderr(false);
             }}
             type={hide ? "password" :"text"} />
             {hide ? (
              <FaEyeSlash
              onClick={handleToggle}
              size={25}
              className="absolute top-[28px] right-[49px] cursor-pointer"
              />
              ) : (
                <FaEye
                  onClick={handleToggle}
                  size={25}
                  className="absolute top-[28px] right-[49px] cursor-pointer"
                />
                
              )}
              {passworderr &&(
                <>
                 <p className="text-red-600">Password field is empty</p>
                </>
              )}
            </div>
            <button onClick={handleSubmit} className='font-nunito font-semibold text-[21px] text-white bg-secondary px-[120px] py-[20px] rounded mt-[51px]'>Login to Continue</button>
          <p className="font-openSans font-normal text-[13px] text-dark mt-[20px] ps-[75px]">
          Don’t have an account  ?{" "}
              <a
                className=" font-bold
               text-orange"
                href=""
              >
                Sign up
              </a>
            </p>
          </form>
         </div>
       </div>
       <div className='w-1/2'>
       <img className='w-full h-screen object-cover' src={log} alt="" />
       </div>
    </div>
  )
}

export default Log_in