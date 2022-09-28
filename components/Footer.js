/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useEffect, useState } from 'react'
import { RiAccountCircleFill } from "react-icons/ri"
import { BsFillTelephoneFill } from "react-icons/bs"
import Head from 'next/head'
import { Zoom } from 'react-reveal'
import  RubberBand  from 'react-reveal/RubberBand'

const Footer = () => {
  const [data, setdata] = useState({});
  const [category, setcategory] = useState([]);
  const [sw, setsw] = useState(false);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/info`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data)
      })
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getproducts`)
      .then((res) => res.json())
      .then((data) => {
        setcategory(data)
      })

      if(screen.width>768){
        setsw(true)
      }

  }, []);

  return (<>

   

   <div style={sw?{height:"40vh",fontSize:"1.25vw"}:{height:"40vw",fontSize:"1.25vh"}} className="w-full bg-white">
     <div style={sw?{fontFamily: "'Poppins', sans-serif",padding:"2.5vw 6.25vw"}:{fontFamily: "'Poppins', sans-serif",padding:"2.5vh 6.25vw"}} className='grid grid-flow-col py-6 2xl:py-10 2xl:px-24 md:py-8 md:px-20 px-7  w-full h-full'>
       <div className='col-span-11  flex justify-evenly flex-col '>
         <p>SKETCH ART BY<a href='https://developersinfotech.com/' target="blank"  className='underline underline-offset-4'> DEVELOPERS INFOTECH</a></p>
         <h1 style={{fontWeight:'bolder',fontSize:"2em"}} className=''>You belong here. </h1>
         <p >MADE WITH LOVE <RubberBand><span style={sw?{fontSize:"1.8vw",marginLeft:"0.7vw"}:{fontSize:"1.8vh",marginLeft:"0.7vh"}} className='font-bold text-xl ml-2'>♡</span></RubberBand></p>
       </div>
       <div style={{padding:"1.875vw 0vw"}} className='col-span-1 flex flex-col  '>
        
         <div style={sw?{marginTop:"1.25vw"}:{marginTop:"1.25vh"}} className='underline underline-offset-4'><a href={"/"}>HOME</a></div>
         <div style={sw?{marginTop:"1.25vw"}:{marginTop:"1.25vh"}} className='underline underline-offset-4'><a href={"/about"}>ABOUT US</a></div>
         <div style={sw?{marginTop:"1.25vw"}:{marginTop:"1.25vh"}} className='underline underline-offset-4'><a href=''>PRODUCTS</a></div>
         <div style={sw?{marginTop:"1.25vw"}:{marginTop:"1.25vh"}} className='underline underline-offset-4'><a href={"/contact"}>CONTACT US</a></div>
        
       </div>
     </div>
   </div>
   </>
  )
}


export default Footer