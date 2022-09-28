/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react'
import Motor from '../../models/Motor';
import mongoose from "mongoose";
import { Disclosure, Dialog } from '@headlessui/react'
import { IoIosArrowDown } from "react-icons/io"
import { MdOutlineCancel } from "react-icons/md"
import { BsInfoCircleFill } from "react-icons/bs"
import { BiRightArrow } from "react-icons/bi"
import { BsImages } from "react-icons/bs"
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';
import { Router } from 'next/router';



const Potor = ({ buyNow, addToCart, product }) => {
 const [sw, setsw] = useState(false);
 const [qty, setqty] = useState(1);
 const [spec, setspec] = useState([]);

  useEffect(() => {
    const a = product.specs.map((m)=>{return m.split(":")})
    setspec(a)
    console.log(a)
    if(screen.width>768){
      setsw(true)
    }
   console.log(product)
  }, []);

  return <>

  {sw && <div style={{height:"6.2vw",backgroundClip:""}} className='absolute border-b  border-black  top-0 w-full  '></div>}

{!sw && <div style={{backgroundColor:"#bfb1c4"}} className='w-full absolute top-0 h-12'></div>}
    <section id='main'   style={{  fontFamily: "'poppins', sans-serif",marginTop:"10vw"}} className="text-gray-900 md:px-[3.5vw] justify-center flex body-font overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div  className=" w-full ">

        <div  className='w-full  flex-col justify-center md:flex-row flex '>
          <div  className='md:w-5/12 pb-[3vw] flex justify-center md:justify-start flex-col md:pt-0 w-full'>
          
            <img alt="ecommerce" style={sw?{width:"38vw",marginBottom:"2.75vw"}:{height:"38.3vh",margin:"2.75vh 0vw"}} className=" h-[29vw] border-2 border-[#bfb1c4]  " src={product.poster} />
           
            <div style={sw?{fontSize:"1.25vw",padding:"0vw 2.4vw 0.8vw"}:{fontSize:"2vh",padding:"1.875vh"}} className='text-gray-800 ml-6 md:ml-0 flex items-center  '><p style={sw?{backgroundColor: "#bfb1c4",height:"1vw",width:"2.75vw",marginLeft:"-3vw"}:{backgroundColor: "#bfb1c4",height:"1vh",width:"2.75vh",marginLeft:"-3.3vh"}} className='w-5 -ml-6 absolute h-3'></p>Specifications</div>
              <div className='w-full px-[2vw] ml-6 md:ml-0 grid grid-flow-col  '>
              <ul >
              {(spec).map((f)=>{return  <li key={f} style={sw?{fontSize:"1vw",marginTop:"0.7vw"}:{fontSize:"1.5vh",marginTop:"1.25vh"}} className='  font-medium mt-4  lowercase flex items-center'>{f[0]}</li>})}
              </ul>
              <ul className='border-l pl-[2vw] border-gray-600'>
              {(spec).map((f)=>{return  <li key={f} style={sw?{fontSize:"1vw",marginTop:"0.7vw"}:{fontSize:"1.5vh",marginTop:"1.25vh"}} className='  font-medium mt-4  flex items-center'>{f[1]}</li>})}
              </ul>
              </div>
            </div>
           

            <div  style={sw?{backgroundColor: "#ebeaeb", padding:"3.75vw 3.125vw" }:{ backgroundColor: "#ebeaeb",padding:"3.75vh 3.125vh" }} className='py-12 text-gray-800 md:w-1/2 w-full px-4 md:px-10 '>
          <div  className='flex flex-col '>
            <span style={sw?{fontFamily: "'Fjalla One', sans-serif",fontSize:"3.8vw"}:{fontFamily: "'Fjalla One', sans-serif",fontSize:"3.8vh"}} className="  text-5xl uppercase ">{product.title} </span>
            <div style={sw?{fontSize:"1.25vw",padding:"1.875vw 0vw"}:{fontSize:"1.5vh",padding:"1.875vh 0vh"}} className='space-x-6 flex py-6  text-base'>
              
         
            </div>
            <div style={sw?{padding:"2vw 2.5vw 3vw",marginBottom:"1.875vw"}:{padding:"2vh 2.5vh 3vh",marginBottom:"1.875vh"}} className="  w-full px-8 mb-6 bg-white  ">
           
            <div style={sw?{fontSize:"1.25vw"}:{fontSize:"2vh"}} className="flex items-center"> <p style={sw?{backgroundColor: "#bfb1c4", fontFamily: "'poppins', sans-serif",height:"1vw",width:"2.75vw",marginLeft:"-3.2vw"}:{backgroundColor: "#bfb1c4", fontFamily: "'poppins', sans-serif",height:"1vh",width:"2.75vh",marginLeft:"-3.2vh"}}  className='w-8 -ml-10 absolute h-3'></p>Features</div>
            <ul className='list list-disc'>
              {Object.keys(product.features).map((f)=>{return  <li key={f} style={sw?{fontSize:"1vw",marginTop:"1.5vw"}:{fontSize:"1.5vh",marginTop:"1.25vh"}} className='  font-medium mt-4 ml-5 md:ml-0  items-center'>{product.features[f]}</li>})}
              </ul>
              </div>
           
            </div>
            <div style={sw?{marginTop:"3.75vw"}:{marginTop:"3.75vh"}} className='mt-12 flex space-x-8 items-center justify-start '>
                <span style={sw?{fontSize:"1.25vw"}:{fontSize:"1.5vh"}}>Quantity</span>
                <div style={sw?{fontSize:"1.25vw"}:{fontSize:"1.5vh"}} className='flex items-center  border border-black '>
                <AiOutlineMinus onClick={() => {qty>1?setqty(qty-1):setqty(qty)}} className=' cursor-pointer mx-2' style={sw?{margin:"0vw 1vw"}:{margin:"0vw 1vh"}} />
                <span style={sw?{width:"3.5vw"}:{width:"3.5vh"}} className='h-full border-x  border-black w-10 text-center'>{qty}</span>
                <AiOutlinePlus onClick={() => { setqty(qty+1)}} className=' cursor-pointer mx-2' style={sw?{margin:"0vw 1vw"}:{margin:"0vw 1vh"}} />
                </div>
                </div>


            <div style={sw?{margin:"1.875vw 0vw",paddingTop:"1.6vw"}:{margin:"1.875vh 0vw",paddingTop:"1.6vh"}} className="flex flex-col md:flex-row justify-between items-center my-6 pt-5">
              <div style={sw?{fontSize:"1.25vw"}:{fontSize:"1.5vh"}}> Your Price
              <span style={sw?{fontFamily: "'Fjalla One', sans-serif",fontSize:"1.58vw"}:{fontFamily: "'Fjalla One', sans-serif",fontSize:"2vh"}} className="title-font ml-4  text-xl text-gray-900">₹ {product.price*qty}</span></div>
              <div className='flex space-x-4 mt-4 md:mt-0'>
              <button style={sw?{ backgroundColor: "#bfb1c4" ,fontSize:"1.1vw",width:"8.75vw",height:"2.8125vw"}:{ backgroundColor: "#bfb1c4" ,fontSize:"1.5vh",width:"10vh",height:"3.5vh"}} className="flex items-center border-0 md:py-2 py-1 w-28 justify-center focus:outline-none text-white " onClick={() => { buyNow(product.slug,qty, product.price, product.title, "20","30", "black",undefined ,product.poster) }}>Buy now</button>
              <button style={sw?{ backgroundColor: "#bfb1c4" ,fontSize:"1.1vw",width:"8.75vw",height:"2.8125vw"}:{ backgroundColor: "#bfb1c4" ,fontSize:"1.5vh",width:"10vh",height:"3.5vh"}} onClick={() => { addToCart(product.slug, qty, product.price, product.title,"20", "30", "black",undefined ,product.poster) }} className="flex items-center   border-0 md:py-2 py-1 w-28 justify-center focus:outline-none text-white  ">Add to cart</button>
              </div>
           
            </div>

            </div>

    
      </div>
</div>

    </section>
  </>
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let product = await Motor.findOne({ _id: context.query.motor })


  return {
    props: { product: JSON.parse(JSON.stringify(product)) }, // will be passed to the page component as props
  }
}

export default Potor