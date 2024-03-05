import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className='flex justify-around p-5 bg-black fixed w-[100%] items-center'>
        <div className="left">
          <img src="/public/fav.png" alt="" className='w-[40px]' />
        </div>
        <ul className='flex gap-5 text-white'>
          <Link to={"/home"}>Home</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/details"}>Product</Link>
          <Link to={"/admin"}>Admin Report</Link>

        </ul>
      </nav>
    </>
  );
}

export default Header;
