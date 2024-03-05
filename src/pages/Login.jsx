import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className="login-box h-[100vh] flex items-center justify-center ">
        <div className="flex flex-col gap-5 p-10 border  rounded-lg min-w-[350px]">
          <div className="logo flex gap-2 items-center justify-center">
            <img src="/public/fav.png" alt="" className='w-[30px]' / >
              <h4>Welcome</h4>
          </div>
          <form className='flex flex-col gap-5'>
                <p className='text-center text-[20px]'>Enter you details</p>
                <div className="border">
                <input className='p-2 focus:none border-none focus:border-none outline-none' type="gmail" name="" id="" placeholder='Enter your gmail' />   
                </div>
                <div className="border">
                <input className='p-2 focus:none border-none focus:border-none outline-none' type="password" name="" id="" placeholder='Enter your password' />  
                </div>   
                 <Link to={"/home"} className='text-center bg-blue-500 p-2 rounded-md text-white' >Submit</Link>
              </form>
        </div>
      </div>
    </>
  );
}

export default Login;
