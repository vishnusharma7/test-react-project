import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className='flex justify-around p-5 bg-black  w-[100%] items-center mt-10'>
    <div className="left flex flex-col gap-2 text-white">
      <img src="/public/fav.png" alt="" className='w-[40px]' />
      <ul className='flex flex-col gap-2 text-white'>
      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About Us</Link>
      <Link to={"/details"}>Product</Link>
    </ul>
    </div>
   <div className="flex gap-10">
   <ul className='flex flex-col gap-2 text-white'>
   <h1 className='text-[20px] text-gray-500'>Pages</h1>

      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About Us</Link>
      <Link to={"/details"}>Product</Link>
    </ul>
    <ul className='flex flex-col gap-2 text-white'>
      <h1 className='text-[20px] text-gray-500'>Pages</h1>
      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About Us</Link>
      <Link to={"/details"}>Product</Link>
    </ul>
    <ul className='flex flex-col gap-2 text-white'>
    <h1 className='text-[20px] text-gray-500'>Pages</h1>

      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About Us</Link>
      <Link to={"/details"}>Product</Link>
    </ul>
   </div>
  </div>
  </>
  );
}

export default Footer;
