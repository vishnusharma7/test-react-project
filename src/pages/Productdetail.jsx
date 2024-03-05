import React from 'react';
import { Link } from 'react-router-dom';

function Productdetail() {
  return (
    <div className='p-5'>
      <h1 className='text-center mb-10  pt-[100px]'>Product Details</h1>
      <div className="flex gap-5">
        <div className="flex min-w-[550px]">
          <img src="/public/image/gallery1.jpg" alt="" className="w-[500px] h-[500px] rounded m-auto" />
        </div>
        <div className="flex flex-col gap-5 border p-5 rounded-lg ">
          <h1 className='text-[23px]'>Product Name</h1>
          <p>Product Summary Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore optio delectus enim esse sit praesentium eius, dolor ad quaerat ea ullam in eum qui distinctio harum obcaecati quia suscipit. Voluptates assumenda illum earum ab, culpa quam quidem soluta ullam exercitationem excepturi, et voluptatum facere libero ipsam quisquam omnis perferendis itaque sit. Error qui distinctio cum deleniti voluptates molestias? Quod corporis illum et nostrum dicta, id assumenda delectus dolor quisquam! Perspiciatis, ducimus? Alias deserunt enim recusandae officiis et libero minus, placeat expedita est nobis facere animi iure. Ab aspernatur fuga vero obcaecati delectus est enim. Numquam amet at deleniti velit. Delectus.</p>
          <p className='font-bold text-gray-500'>Price: 2550 Rs.</p>
          <div className="flex gap-2">
          <Link to={"/home"} className='text-center bg-blue-500 p-2 rounded-md text-white' >Buy Now</Link>
          <Link to={"/home"} className='text-center bg-blue-800 p-2 rounded-md text-white' >Add to cart</Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetail;
