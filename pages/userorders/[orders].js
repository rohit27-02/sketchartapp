import React from 'react'
import mongoose from "mongoose"
import Order from '../../models/Order';
import { useState,useEffect } from 'react'
import jwt_decode from "jwt-decode";
import Router from 'next/router';

const Orders = (orders) => {
const [sw, setsw] = useState(false);

useEffect(() => {
 if(screen.width>768){
  setsw(true)
 }
},[])


  return (<>
       {!sw && <div style={{backgroundColor:"#bfb1c4"}} className='w-full absolute top-0 h-12'></div>}
           {sw &&<div style={{height:"6.2vw"}} className='absolute border-b  border-black  top-0 w-full  '></div>}
    <div style={sw?{padding:"6.275vw 7.5vw 3.125vw",marginTop:"4vw"}:{padding:"6.275vh 7.5vw 3.125vh",marginTop:"4vh",minHeight:"78vh"}}>
      
      <div style={sw?{fontSize:"1.1vw",lineHeight:"1.6vw ",paddingBottom:"7vw"}:{fontSize:"1.2vh",lineHeight:"1.8vh ",paddingBottom:"7vh"}} className=' mx-auto pb-24  '>
        <h1 style={sw?{ fontFamily: "'Fjalla One', sans-serif" ,fontSize:"2.35vw",lineHeight:"2.5vw ",paddingBottom:"1.875vw"}:{paddingBottom:"1.875vh", fontFamily: "'Fjalla One', sans-serif" ,fontSize:"2.35vh",lineHeight:"2.5vh "}}  className='font-bold text-gray-800 text-center text-xl p-6'>My Orders</h1>
        <div className="flex flex-col w-full">
  <div className="overflow-x-auto w-full">
    <div >
      <div className="overflow-hidden w-full">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th style={sw?{padding:"1.25vw 1.875vw"}:{padding:"1.25vh 1.875vh"}} scope="col" className=" font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th style={sw?{padding:"1.25vw 1.875vw"}:{padding:"1.25vh 1.875vh"}} scope="col" className=" font-medium text-gray-900 px-6 py-4 text-left">
                Order id
              </th>
              <th style={sw?{padding:"1.25vw 1.875vw"}:{padding:"1.25vh 1.875vh"}} scope="col" className=" font-medium text-gray-900 px-6 py-4 text-left">
                Date
              </th>
              <th style={sw?{padding:"1.25vw 1.875vw"}:{padding:"1.25vh 1.875vh"}} scope="col" className=" font-medium text-gray-900 px-6 py-4 text-left">
                Amount
              </th>
             
            </tr>
          </thead>
          <tbody >

            {Object.keys(orders.orders).map((o)=>
            

              <tr onClick={()=>Router.push(`/order/${orders.orders[o].paymentinfo.orderid}`)} key={o} className="bg-white border-b cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100">
             
              <td style={sw?{padding:"1.25vw 1.875vw"}:{padding:"1.25vh 1.875vh"}} className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">{eval(`${o}+1`)}</td>
              <td style={sw?{padding:"1.25vw 1.875vw"}:{padding:"1.25vh 1.875vh"}} className="px-6 py-4 whitespace-nowrap  font-medium text-gray-900">{orders.orders[o]._id}</td>
              <td style={sw?{padding:"1.25vw 1.875vw"}:{padding:"1.25vh 1.875vh"}} className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {orders.orders[o].createdAt.toString().split('T')[0]}
              </td>
              <td style={sw?{padding:"1.25vw 1.875vw"}:{padding:"1.25vh 1.875vh"}} className=" text-gray-900 font-light px-6 py-4 whitespace-nowrap">
             ₹ {orders.orders[o].amount}
              </td>
            
            </tr>
           )}
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
    </>
  )
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  var decoded = jwt_decode(context.query.orders);
  let orders = await Order.find({email:decoded.email})

  return {
    props: { orders:JSON.parse(JSON.stringify(orders)) }, 
  }
}

export default Orders