/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="text-center mb-4 pt-[100px]">Product List Page</h1>
      <div className="border w-[50%] mb-10 m-auto rounded">
        <input className='p-2 focus:none border-none focus:border-none outline-none ' type="gmail" name="" id="" placeholder='Search Products' />
      </div>
      <div className="flex gap-5 flex-wrap">
        <Link to={"/details"} className="product-box flex flex-col  gap-2 w-[450px]  p-5 border rounded-lg">
          <img src="/public/image/gallery1.jpg" alt="" className="max-w-[100%] h-[350px]" />
          <p>Product1</p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsa ipsam praesentium omnis vero numquam molestias in vel quo quod.</span>
        </Link>
        <div className="product-box flex flex-col gap-2 w-[450px]  p-5 border rounded-lg">
          <img src="/public/image/gallery1.jpg" alt="" className="max-w-[100%] h-[350px]" />
          <p>Product1</p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsa ipsam praesentium omnis vero numquam molestias in vel quo quod.</span>
        </div>
        <div className="product-box flex flex-col gap-2 w-[450px]  p-5 border rounded-lg">
          <img src="/public/image/gallery1.jpg" alt="" className="max-w-[100%] h-[350px]" />
          <p>Product1</p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsa ipsam praesentium omnis vero numquam molestias in vel quo quod.</span>
        </div>
        <div className="product-box flex flex-col gap-2 w-[450px]  p-5 border rounded-lg">
          <img src="/public/image/gallery1.jpg" alt="" className="max-w-[100%] h-[350px]" />
          <p>Product1</p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsa ipsam praesentium omnis vero numquam molestias in vel quo quod.</span>
        </div>
        <div className="product-box flex flex-col gap-2 w-[450px]  p-5 border rounded-lg">
          <img src="/public/image/gallery1.jpg" alt="" className="max-w-[100%] h-[350px]" />
          <p>Product1</p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsa ipsam praesentium omnis vero numquam molestias in vel quo quod.</span>
        </div>
      </div>
    </>
  )
};

export default Home;
