/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Slide } from 'react-reveal'
import { useRef, useState, useEffect } from 'react';
import  Router  from 'next/router';
import Switch from '../models/Switch';
const mongoose = require('mongoose');

const Remotes = ({product,addToCart}) => {

    const [sw, setsw] = useState(false);

  useEffect(() => {
    if(screen.width>768){
      setsw(true)
    }},[]);

    return (<>
        {!sw && <div style={{backgroundColor:"#bfb1c4"}} className='w-full absolute top-0 h-12'></div>}
           {sw &&<div style={{height:"6.2vw",backgroundClip:""}} className='absolute border-b  border-black  top-0 w-full  '></div>}
          <div style={sw?{padding:"6.275vw 4.5vw 3.125vw",marginTop:"4vw"}:{padding:"6.275vh 0vh",marginTop:"4vh"}} className='px-24 pt-20 pb-10'>
            {sw && <Slide bottom> <div style={{height:"37.1vw",width:"89.75vw"}} className="overflow-hidden  "><img  className=" absolute bottom-0" alt='img' src='/switches.jpg'></img></div></Slide>}
      
            <div style={sw?{ fontFamily: "'Fjalla One', sans-serif",fontSize:"3.75vw",marginTop:"4vw",marginBottom:"2vw" }:{ fontFamily: "'Fjalla One', sans-serif",fontSize:"3.75vh",marginTop:"4vh",marginBottom:"2vh" }} className='text-center text-gray-700 '>SWITCHES/RECEIVERS</div>
            <div style={sw?{fontFamily: "'Roboto Slab', serif", fontSize:"2vw",marginBottom:"4vw" }:{ fontFamily: "'Roboto Slab', serif",fontSize:"2",marginBottom:"4vh" }} className='text-center text-gray-700 '>Essence of Design Beyond Appearance</div>
      
      {Object.keys(product).map((p)=>{return <Slide left key={p}><div style={sw?{height: "61vh",fontSize:"1.5vw", fontFamily: "'Roboto Slab', serif" }:{height: "76vh",fontSize:"1.5vh", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" }} className="flex md:flex-row flex-col w-full hover:text-white rhover">
               <img  src={product[p].poster} style={sw?{padding:"3vw 5vw"}:{padding:"6vh 5vh 0vh"}}  alt='img'></img>
              <div style={sw?{padding:"1.56vw"}:{padding:"2vh 5vh"}} className='p-5 w-full space-y-8'>
                <ul style={sw?{marginTop:"2.5vw",paddingRight:"2.5vw",lineHeight:"1.6vw "}:{marginTop:"1.5vh",paddingRight:"2.5vh",lineHeight:"1.8vh "}} className=' list list-disc leading-relaxed pr-8 '>
                <h1 style={sw?{ marginTop:"2.5vw"}:{ marginTop:"1vh"}} className='mt-8  font-bold uppercase'>{product[p].title}</h1>
                <h5 style={{margin:"0.5vw 0vw 3.5vw"}} className='  font-bold '>({product[p].slug})</h5>
                    
                    {product[p].features.map((f)=>{return  <li style={sw?{marginBottom:"1vw"}:{marginBottom:"1vw"}} key={f}>{f}</li>})}
                   
                   
                </ul>
                <div style={sw?{right:"2vw",top:"20vw"}:{}} className='md:absolute font-bold text-gray-700'>₹ {product[p].price}
                <button style={sw?{ fontSize:"1.1vw",width:"8.75vw",height:"2.8125vw",marginTop:"1vw"}:{ fontSize:"1.5vh",width:"10vh",height:"3.5vh",marginTop:"1vh"}} onClick={() => { addToCart(product[p].title, 1, product[p].price, product[p].title,undefined, undefined, "white", undefined ,product[p].poster) }} className="flex items-center z-50 font-bold  justify-center focus:outline-none text-white hover:bg-white hover:text-black bg-[#bfb1c4]  ">Add to cart</button>
                </div>
              </div>
            </div></Slide>})}
            
      
           
      
      
          </div>
        </>
        )
}

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI)
    }
  
    let product = await Switch.find()
  
  
    return {
      props: { product: JSON.parse(JSON.stringify(product)) }, // will be passed to the page component as props
    }
  }

export default Remotes