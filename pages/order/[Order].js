/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useEffect, useState } from 'react';
import mongoose from "mongoose"
import Order from '../../models/Order';

const Order2 = ({orders}) => {
  const [sw, setsw] = useState(false);

useEffect(() => {
  if(screen.width>768){
   setsw(true)
  }


}, []);
  return (
  
    <div className="bg-white md:mt-[5vw] mt-[5vh] shadow overflow-hidden m-auto sm:rounded-lg">
        {!sw && <div style={{ backgroundColor: "#bfb1c4" }} className='w-full absolute top-0 h-12'></div>}
    {sw && <div style={{ height: "6.2vw" }} className='absolute border-b  border-black  top-0 w-full  '></div>}
        <h3 className="md:text-[2.5vw] text-[2vh] leading-6 w-full text-center my-[6vh] md:my-[6vw]  font-medium text-gray-900">Order Details</h3>
      <div className="px-4 py-5 flex flex-col md:flex-row md:justify-evenly sm:px-6">
        <p className="mt-1 max-w-2xl font-semibold text-sm text-gray-500">Order Id : {orders[0]._id}</p>
        <p className="mt-1 max-w-2xl font-semibold text-sm text-gray-500">payment Id : {orders[0].paymentinfo.payid}</p>
        <p className="mt-1 max-w-2xl font-semibold text-sm text-gray-500">Date : {orders[0].createdAt.toString().split('T')[0]}</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{orders[0].name}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{orders[0].address}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">phone</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{orders[0].phone}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{orders[0].email}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">SubTotal</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">₹ {orders[0].amount}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Items</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul>
                {Object.keys(orders[0].products).map((p)=>{return <li className='flex ' key={p}>
                 <img className='md:w-[5vw] w-[5vh]' alt='img' src={orders[0].products[p].img}></img>
                 <span className='md:w-[18vw] text-center'>{orders[0].products[p].productId}</span>
                 <span className='md:w-[18vw] text-center'>{orders[0].products[p].color}</span>
                 <span className='md:w-[18vw] text-center'>{orders[0].products[p].size} (meters)</span>
                 <span className='md:w-[18vw] text-center'>{orders[0].products[p].quantity}</span>
                 </li>})}
               
              </ul>
            </dd>
          </div>
         
        </dl>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  
  let orders = await Order.find({"paymentinfo.orderid":context.query.Order})

  return {
    props: { orders:JSON.parse(JSON.stringify(orders)) }, 
  }
}

export default Order2