/* eslint-disable react/no-unknown-property */
import React from 'react';

function Admin() {
  return (
    <div className='pt-[100px]'>
       <main>
            <div className="flex flex-col p-2 gap-5" >
                <div className="flex flex-col">
                    <div className="flex mb-2">
                        <h2>Product Report Admin Panel</h2>
                    </div>
                    <div className=" flex gap-5" >
                        <div className="top-links ">
                            <a href="">All <span>(205)</span></a>
                        </div>
                        <div className="top-links ">
                            <a href="">New <span>(20)</span></a>
                        </div>
                        <div className="top-links ">
                            <a href="">Abandoned checkouts <span>(5)</span></a>
                        </div>
                        <div className="top-links ">
                            <a href="">Email subscriber <span>(2054)</span></a>
                        </div>
                        <div className="top-links ">
                            <a href="">Top reviews <span>(2)</span></a>
                        </div>

                    </div>
                    {/* <div className="flex middle gap wrap" style="margin-top: 0.5em;">
                        <div className="admin-input flex middle " style="width:fit-content;gap:0.5em; ">

                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                className="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                            <input type="search" name="" id="" placeholder="Search"
                                style="color: var(--text-color);font-size:14px" />

                        </div>
                        <div className="filter-btn flex">
                            <select className="admin-input" name="" id="">
                                <option value="Country" selected>Country</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                                <option value="Australia">Australia</option>
                            </select>
                            <select className="admin-input" name="" id="">
                                <option value="Country" selected>VIP</option>
                                <option value="VIP 1">VIP 1</option>
                                <option value="VIP 2">VIP 2</option>
                                <option value="VIP 3">VIP 3</option>
                                <option value="VIP 4">VIP 4</option>
                            </select>
                            <div className="flex admin-input">
                                <div>More filter</div>
                            </div>
                        </div>
                        <div className="flex gap middle">
                            <div className="flex middle gap" style="cursor: pointer;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-file-arrow-up" viewBox="0 0 16 16">
                                    <path
                                        d="M8 11a.5.5 0 0 0 .5-.5V6.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 .5.5" />
                                    <path
                                        d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" />
                                </svg>
                                <p>Export</p>
                            </div>
                            <div className="button admin-input flex middle gap"
                                style="background-color: var(--primary-color);">
                                <svg style="color: #ffffff;" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                    <path
                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                </svg>
                                <p style="color: #ffffff;">Add candidate</p>
                            </div>
                        </div>
                    </div> */}
                </div>
               
                    <table className="box border-none" >
                        <thead>
                            <tr>
                                <th data-sort="customer">
                                    <div className="flex items-center"> <input type="checkbox" className='mr-5'
                                             />PRODUCTS
                                        <span className="sort-arrows"></span>
                                    </div>
                                </th>
                                <th data-sort="email">EMAIL <span className=" sort-arrows"></span></th>
                                <th data-sort="orders">ORDERS <span className="sort-arrows"></span></th>
                                <th data-sort="total-spent">TOTAL-SPENT <span className="sort-arrows"></span></th>
                                <th data-sort="city">CITY <span className="sort-arrows"></span></th>
                                <th data-sort="last-seen">LAST SEEN <span className="sort-arrows"></span></th>
                                <th data-sort="last-order">LAST ORDER <span className="sort-arrows"></span></th>
                                <th>Edit Detail</th>
                            </tr>
                        </thead>




                        <tbody id="userTable" >
                            <tr className="border ">
                                <td>
                                    <div className="flex items-center"> <input type="checkbox mr-2"  />
                                        <a href="" > Product 1</a>
                                    </div>
                                </td>
                                <td>xyz@gmail.com</td>
                                <td>89</td>
                                <td>$23,987</td>
                                <td>Budapest</td>
                                <td>34 min ago</td>
                                <td>Dec 12, 12:56</td>
                                <td className='flex gap-2'><button className=''>Edit</button>
                                    <button className='bg-red-600 text-white p-[5px] rounded-sm'>Delete</button>
                                </td>
                            </tr>
                            <tr className=" border">
                                <td>
                                    <div className="flex items-center"> <input type="checkbox mr-2"  />
                                        <a href="" > Product 2</a>
                                    </div>
                                </td>
                                <td>as@gmail.com</td>
                                <td>89</td>
                                <td>$23,987</td>
                                <td>Budapest</td>
                                <td>34 min ago</td>
                                <td>Dec 12, 12:56</td>
                                <td className='flex gap-2'><button className=''>Edit</button>
                                    <button className='bg-red-600 text-white p-[5px] rounded-sm'>Delete</button>
                                </td>
                            </tr>
                            <tr className=" border">
                                <td>
                                    <div className="flex items-center"> <input type="checkbox mr-2"  />
                                        <a href="" > Product 2</a>
                                    </div>
                                </td>
                                <td>as@gmail.com</td>
                                <td>89</td>
                                <td>$23,987</td>
                                <td>Budapest</td>
                                <td>34 min ago</td>
                                <td>Dec 12, 12:56</td>
                                <td className='flex gap-2'><button className=''>Edit</button>
                                    <button className='bg-red-600 text-white p-[5px] rounded-sm'>Delete</button>
                                </td>
                            </tr>
                            <tr className=" border">
                                <td>
                                    <div className="flex items-center"> <input type="checkbox mr-2"  />
                                        <a href="" > Product 2</a>
                                    </div>
                                </td>
                                <td>as@gmail.com</td>
                                <td>89</td>
                                <td>$23,987</td>
                                <td>Budapest</td>
                                <td>34 min ago</td>
                                <td>Dec 12, 12:56</td>
                                <td className='flex gap-2'><button className=''>Edit</button>
                                    <button className='bg-red-600 text-white p-[5px] rounded-sm'>Delete</button>
                                </td>
                            </tr>
                            <tr className=" border">
                                <td>
                                    <div className="flex items-center"> <input type="checkbox mr-2"  />
                                        <a href="" > Product 2</a>
                                    </div>
                                </td>
                                <td>as@gmail.com</td>
                                <td>89</td>
                                <td>$23,987</td>
                                <td>Budapest</td>
                                <td>34 min ago</td>
                                <td>Dec 12, 12:56</td>
                                <td className='flex gap-2'><button className=''>Edit</button>
                                    <button className='bg-red-600 text-white p-[5px] rounded-sm'>Delete</button>
                                </td>
                            </tr>
                            <tr className=" border">
                                <td>
                                    <div className="flex items-center"> <input type="checkbox mr-2"  />
                                        <a href="" > Product 2</a>
                                    </div>
                                </td>
                                <td>as@gmail.com</td>
                                <td>89</td>
                                <td>$23,987</td>
                                <td>Budapest</td>
                                <td>34 min ago</td>
                                <td>Dec 12, 12:56</td>
                                <td className='flex gap-2'><button className=''>Edit</button>
                                    <button className='bg-red-600 text-white p-[5px] rounded-sm'>Delete</button>
                                </td>
                            </tr>
                            <tr className=" border">
                                <td>
                                    <div className="flex items-center"> <input type="checkbox mr-2"  />
                                        <a href="" > Product 2</a>
                                    </div>
                                </td>
                                <td>as@gmail.com</td>
                                <td>89</td>
                                <td>$23,987</td>
                                <td>Budapest</td>
                                <td>34 min ago</td>
                                <td>Dec 12, 12:56</td>
                                <td className='flex gap-2'><button className=''>Edit</button>
                                    <button className='bg-red-600 text-white p-[5px] rounded-sm'>Delete</button>
                                </td>
                            </tr>
                            <tr className=" border">
                                <td>
                                    <div className="flex items-center"> <input type="checkbox mr-2"  />
                                        <a href="" > Product 2</a>
                                    </div>
                                </td>
                                <td>as@gmail.com</td>
                                <td>89</td>
                                <td>$23,987</td>
                                <td>Budapest</td>
                                <td>34 min ago</td>
                                <td>Dec 12, 12:56</td>
                                <td className='flex gap-2'><button className=''>Edit</button>
                                    <button className='bg-red-600 text-white p-[5px] rounded-sm'>Delete</button>
                                </td>
                            </tr>
                            <tr className=" border">
                                <td>
                                    <div className="flex items-center"> <input type="checkbox mr-2"  />
                                        <a href="" > Product 2</a>
                                    </div>
                                </td>
                                <td>as@gmail.com</td>
                                <td>89</td>
                                <td>$23,987</td>
                                <td>Budapest</td>
                                <td>34 min ago</td>
                                <td>Dec 12, 12:56</td>
                                <td className='flex gap-2'><button className=''>Edit</button>
                                    <button className='bg-red-600 text-white p-[5px] rounded-sm'>Delete</button>
                                </td>
                            </tr>
                         
                        </tbody>

                        <thead className="table-footer ">
                            <tr>
                                <td colspan="100%">
                                    <div className="flex justify-between items-center text-[13px] gap-[0.5rem]">  <p className="flex items-center"
                                   > 1 to 10
                                    <span className='p-2'>item of</span> 15
                                </p>
                           
                                    <div className="flex items-center gap-[0.5em]" >
                                        <a href="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                                className="bi bi-chevron-left" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                            </svg>
                                        </a>
                                        <p className="footer-links flex items-center justify-center" >1</p>
                                        <p className="footer-links  flex items-center justify-center" >2</p>
                
                                        <a className="flex items-center text-[13px] gap-[0.5rem]"
                                             href="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                                                className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                </td>
                            </tr>
                        </thead>
                    </table>
                   
              
            </div>

        </main>
    </div>
  );
}

export default Admin;
