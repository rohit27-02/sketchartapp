/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import "react-multi-carousel/lib/styles.css";
import { useState, useEffect, useRef } from 'react';
import { Bounce, Fade, Slide } from 'react-reveal';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import "react-multi-carousel/lib/styles.css";
import { VscGear } from "react-icons/vsc"
import { VscTools } from "react-icons/vsc"
import { BsWhatsapp } from "react-icons/bs"
import { CgMail } from "react-icons/cg"
import { MdLocalParking } from "react-icons/md"
import "react-multi-carousel/lib/styles.css";
import { auto } from '@popperjs/core';
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "next/router";



export default function Home() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [message, setmessage] = useState("contact from home page");
  const [company, setcompany] = useState("nil");
  const [sw, setsw] = useState(false);

  function handleChange(e) {
    if (e.target.id == "name") {
      setname(e.target.value)
    }
    else if (e.target.id == "email") {
      setemail(e.target.value)
    }
    else if (e.target.id == "number") {
      setnumber(e.target.value)
    }
  }

  async function submit() {
    const data = { name, email, message,number,company }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let response = await res.json()
    console.log(response)
  
    if (response.success == "success") {
      setemail("")
      setname("")
      setnumber("")
      toast.success('we will contact you soon', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
     
    }
  }

useEffect(() => {
if(screen.width>768){
  setsw(true)
}
}, []);



  return (

    <div  style={{fontFamily: "'Roboto Slab', serif"}}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    
      <div style={sw?{ height: "90vh" }:{ height: "90vw" }} className=' '>
        <div style={sw?{ height: "90vh" }:{ height: "90vw" }} className=' w-full overflow-hidden object-cover top-0 fixed -z-10 '>
         

          <h1 style={sw?{fontFamily: "'Fjalla One', sans-serif",letterSpacing:1.5,lineHeight:1.2,fontSize:"4.75vw",top:"15vw"}:{fontFamily: "'Fjalla One', sans-serif",letterSpacing:1.5,lineHeight:1.2,fontSize:"4.75vh",top:"15vh"}} className='absolute md:top-52 top-14 text-center w-full font-extrabold z-20 2xl:text-7xl md:text-7xl  text-gray-200  '>PUSHING LIMITS<br></br> FOR YOUR LUXURIES</h1>
          <Slide bottom><div className="bg-black w-full h-full absolute top-0 bg-opacity-50 z-10"></div><img className="h-full w-full object-cover" src='/WhatsApp Image 2022-07-20 at 10.47.30 PM.jpeg'></img></Slide>
        </div>

      </div>



      <div style={{  backgroundColor: "#bfb1c4" }} className=''>
      <div className="w-full flex justify-center  "><button style={sw?{top:"32vw",backgroundColor: "#bfb1c4",fontSize:"1.25vw",height:"3.125vw",width:"10.45vw"}:{top:"32vh",backgroundColor: "#bfb1c4",fontSize:"1.25vh",height:"3.125vh",width:"10.45vh"}} className="fixed text-white -z-10 font-lg"><a className=""  href="/motorizedblinds">Learn More</a></button></div>
        <section className="text-white">
          <div style={sw?{padding:"9.45vw 4vw 0vw"}:{padding:"9.45vh 4vh 0vh"}} className=" mx-auto flex  top-0 md:flex-row flex-col items-center">
            <div className='overflow-hidden'>
              <div style={sw?{width:"42.5vw"}:{width:"42.5vh"}} className=" hover:transition-transform ease-in duration-500  hover:scale-125  w-full mb-10  md:mb-0">
                <Slide left> <img className="object-cover object-center" alt="hero" src="/1.jpg" /></Slide>
              </div>
            </div>
            <div className="lg:flex-grow md:w-7/12 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left">
              <Slide bottom> <h1 style={sw?{fontFamily: "'Fjalla One', sans-serif",lineHeight:1.1,fontSize:"3.75vw",marginBottom:"1.875vw"}:{fontFamily: "'Fjalla One', sans-serif",lineHeight:1.1,fontSize:"3.75vh",marginBottom:"1.875vh"}}  className=" md:text-5xl 2xl:text-7xl text-3xl mb-4 md:mb-6 2xl:mb-10  uppercase  ">Benefits of motorized
                window blinds
              </h1></Slide>
              <Slide bottom><p style={sw?{fontSize:"1.25vw",marginBottom:"2.5vw",lineHeight:"1.8vw"}:{fontSize:"1.25vh",marginBottom:"2.5vh",lineHeight:"1.8vh"}} className="mb-8 leading-relaxed md:text-base text-sm 2xl:text-lg ">Window blinds are a common choice for homeowners that want to cover their window to block light or protect privacy. They are sleek in appearance, easy to maintain and quite durable - making them ideal for modern homes.
                But shouldn't you expect your window treatments to do more than just open and close?
                Motorized window blinds perform the same purpose of traditional window blinds. These blinds have added functions that make them a valuable addition to your home's interior design.
              </p>
                <div className="flex items-start">
                  <button style={sw?{ color: "#bfb1c4",fontSize:"1.25vw",height:"3.125vw",width:"10.45vw" }:{ color: "#bfb1c4",fontSize:"1.25vh",height:"3.125vh",width:"10.45vh" }} className="inline-flex  bg-gray-100 font-semibold  border-0 justify-center items-center focus:outline-none hover:opacity-90  text-base"><a className="cursor-pointer" onClick={()=>Router.push("/motorizedblinds")}>Learn More</a></button>
                </div>
              </Slide>
            </div>
          </div>
        </section>
        <section className="text-white">
          <div style={{padding:"7.5vw 4vw"}} className=" mx-auto flex px-5 md:px-8 2xl:px-10 pt-8 md:py-24 md:flex-row flex-col-reverse items-center">
            <div style={{}} className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16   flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
              <Slide bottom> <h1 style={sw?{fontFamily: "'Fjalla One', sans-serif",lineHeight:1.1,fontSize:"3.75vw",marginBottom:"1.875vw"}:{fontFamily: "'Fjalla One', sans-serif",lineHeight:1.1,fontSize:"3.75vh",marginBottom:"1.875vh"}} className=" md:text-5xl 2xl:text-7xl text-3xl mb-4 md:mb-6 2xl:mb-10 uppercase font- ">How to choose
                <br className="hidden lg:inline-block" /> your blinds?
              </h1></Slide>
              <Slide bottom><p  style={sw?{fontSize:"1.25vw",marginBottom:"2.5vw",lineHeight:"1.8vw"}:{fontSize:"1.25vh",marginBottom:"2.5vh",lineHeight:"1.8vh"}} className="mb-8  md:text-base text-sm 2xl:text-lg "> Selecting window treatments for a specific room is all about assessing the way the space functions. </p>
                <div className="flex justify-start">
                  <button style={sw?{ color: "#bfb1c4",fontSize:"1.25vw",height:"3.125vw",width:"10.45vw" }:{ color: "#bfb1c4",fontSize:"1.25vh",height:"3.125vh",width:"10.45vh" }} className=" inline-flex  bg-gray-100 font-semibold border-0 justify-center items-center focus:outline-none hover:opacity-90 text-base"><a className="cursor-pointer" onClick={()=>Router.push("/motorizedblinds#second",undefined,{scroll:false})}>Learn More</a></button>
                </div>
              </Slide>
            </div>
            <div className="overflow-hidden">
              <div  style={sw?{width:"42.5vw"}:{width:"42.5vh"}} className="hover:transition-transform ease-in duration-500  hover:scale-125 flex justify-end mb-10 md:mb-0  w-full">
                <Slide right> <img className="object-cover object-center" alt="hero" src="/2.jpg" /></Slide>
              </div>
            </div>
          </div>
        </section>
      </div>



      <div style={sw?{ height: "61vh" }:{ height: "61vw" }} className='bg-white w-full flex justify-center items-center '>
        <Pulse><div className='space-y-10 text-center text-lg'>
          <h1 style={sw?{fontFamily: "'Fjalla One', sans-serif",lineHeight:1.5,fontSize:"3.75vw",marginBottom:"3.125vw"}:{fontFamily: "'Fjalla One', sans-serif",lineHeight:1.5,fontSize:"3.75vh",marginBottom:"3.125vh"}}  className="2xl:text-6xl md:text-5xl font-bold text-gray-800 text-4xl text-center uppercase">"If a window of oppourtunity appears,<br></br> don't pull down the shade."</h1>
          <p style={sw?{fontSize:"1.45vw"}:{fontSize:"1.45vh"}}>—Tom Peters</p>
        </div></Pulse>
      </div>

<div style={sw?{height:"102vh"}:{height:"102vw"}} className="bg-white">
      <Slide bottom><div className='w-full  overflow-hidden '>
        
        {/**  <h1 style={{ fontFamily: "'Poppins', sans-serif",lineHeight:1.5,textShadow:"0.5px 0.5px black"}} className='absolute my-10 z-20  w-full ml-4 md:text-center text-white text-5xl md:text-6xl 2xl:text-7xl'>You imagine <br></br>We create.</h1>**/}
        <img style={sw?{ height: "102vh" }:{ height: "102vw" }} className='w-full object-cover z-10 ' src='/contact.png'></img>

      </div></Slide></div>


      <div style={sw?{backgroundColor: "#ebeaeb", minHeight: 100, height: "50vh" }:{backgroundColor: "#ebeaeb", height: "60vw" }} className='w-full justify-center items-center flex '>
        <div className='flex flex-col  my-auto text-center space-y-8 md:space-y-16 w-full' >
          <h1 style={sw?{fontFamily: "'Fjalla One', sans-serif",wordSpacing:1.5,fontSize:"1.875vw",marginBottom:"1vw"}:{fontFamily: "'Fjalla One', sans-serif",wordSpacing:1.5,fontSize:"1.875vh",margin:"1vw 0vw"}}  className='md:text-2xl mx-2 font-bold text-gray-800 2xl:text-3xl'>BENEFITS OF BEING ASSOCIATED WITH SKETCH ART</h1>
          <div style={sw?{fontSize:"1.1vw"}:{fontSize:"1.1vh"}} className='flex flex-col md:flex-row'>
            <div style={sw?{padding:"0vw 0.75vw"}:{padding:"0.5vh 0.75vh"}} className='flex flex-col md:flex-row font-semibold items-center flex-wrap text-gray-600 justify-center px-2  border-r-2 border-gray-500 '><RubberBand><VscGear style={{fontSize:"5vw",marginBottom:"1.5vw"}} className='md:text-6xl md:mx-4 2xl:mx-6 mb-5 2xl:text-7xl text-3xl' /></RubberBand>Access to the best automation solutions for solar protection and tertiary access.</div>
            <div style={sw?{padding:"0vw 0.75vw"}:{padding:"0.5vh 0.75vh"}} className='flex flex-col md:flex-row font-semibold items-center flex-wrap text-gray-600 justify-center px-2  border-r-2 border-gray-500 '><RubberBand><MdLocalParking style={{fontSize:"5vw",marginBottom:"1.5vw"}} className='md:text-6xl md:mx-4  2xl:mx-6 mb-5 2xl:text-7xl text-3xl' /></RubberBand>Advice on motor and controller choice.Product training and installion training support electrial requirements.</div>
            <div style={sw?{padding:"0vw 0.75vw"}:{padding:"0.5vh 0.75vh",marginBottom:"1vh"}} className='flex flex-col md:flex-row font-semibold items-center flex-wrap text-gray-600 justify-center px-2   '><RubberBand><VscTools style={{fontSize:"5vw",marginBottom:"1.5vw"}} className='md:text-6xl md:mx-4  2xl:mx-6 mb-5 2xl:text-7xl text-3xl' /></RubberBand>On site engineering support, Marketing support, Troubleshooting And After sales services.</div>
          </div>
        </div>
      </div>

      {sw && <div style={sw?{ backgroundColor: "#bfb1c4", height: "56vh" ,padding:"0vw 2.5vw"}:{ backgroundColor: "#bfb1c4", height: "56vw" ,padding:"0vh 2.5vh"}} className="w-full grid grid-flow-row content md:grid-flow-col px-8">
        <div className='md:col-span-4  flex md:justify-center  md:items-center'>
          <div style={sw?{fontSize:"1.25vw",lineHeight:"2vw"}:{fontSize:"1.25vh",lineHeight:"2vh"}} className='flex flex-col text-white text-center md:border-b-2 pb-8 md:pb-0 md:border-none justify-start items-start md:border-r-2 space-y-6 md:space-y-10 '>
            <h1 style={sw?{fontFamily: "'Fjalla One', sans-serif",letterSpacing:1.2,wordSpacing:1.5,fontSize:"1.875vw",padding:"0vw 3.2vw"}:{fontFamily: "'Fjalla One', sans-serif",letterSpacing:1.2,wordSpacing:1.5,fontSize:"1.875vh",padding:"0vh 3.2vh"}}  className=' 2xl:text-2xl text-2xl px-10 text-white'>CONNECT  WITH  US</h1>
            <div className='font-thin flex w-full justify-around'><div className=' w-1/2 flex flex-col justify-center items-center '><FaFacebookF style={sw?{fontSize:"2vw"}:{fontSize:"2vh"}} className='2xl:text-3xl md:text-2xl  hover:animate-pulse cursor-pointer' />Facebook</div><div className='w-1/2 flex flex-col justify-center items-center '><CgMail style={sw?{fontSize:"2vw"}:{fontSize:"2vh"}} className='2xl:text-3xl md:text-2xl  hover:animate-pulse cursor-pointer' />Gmail</div></div>
            <div className='font-thin flex w-full justify-around '><div className=' w-1/2 flex flex-col justify-center items-center '><BsWhatsapp style={sw?{fontSize:"2vw"}:{fontSize:"2vh"}} className='2xl:text-3xl md:text-2xl  hover:animate-pulse cursor-pointer' />Whatsapp</div><div className='w-1/2 flex flex-col justify-center items-center '><FaInstagram style={sw?{fontSize:"2vw"}:{fontSize:"2vh"}} className='2xl:text-3xl md:text-2xl  hover:animate-pulse cursor-pointer' />Instagram</div></div>
          </div>
        </div>

        <div style={sw?{fontSize:"1.1vw",lineHeight:"2vw"}:{fontSize:"1.1vh",lineHeight:"2vh"}} className='md:col-span-8 flex md:justify-center md:items-center md:space-y-5 space-y-2 flex-col text-white text-xs md:text-sm 2xl:text-base'>
          <h1 style={sw?{fontFamily: "'Fjalla One', sans-serif",letterSpacing:1.5,fontSize:"1.875vw"}:{fontFamily: "'Fjalla One', sans-serif",letterSpacing:1.5,fontSize:"1.875vh"}}  className='md:text-2xl 2xl:text-3xl text-xl '>CONTACT US</h1>
          <p>Sign up with your email to contact us</p>
          <section className="text-gray-600 body-font relative">
            <div style={sw?{height:"11.75vw",width:"73vw",padding:"0vw 1.6vw"}:{height:"11.75vh",width:"73vh",padding:"0vh 1.6vh"}} className=" px-5  mx-auto flex ">
              <div style={sw?{padding:"2.5vw"}:{padding:"2.5vh"}} className=" md:bg-white md:p-8 flex flex-col md:flex-row  items-center md:space-x-5 md:ml-auto w-full relative z-10 md:shadow-md">
                <div style={sw?{marginBottom:"1.25vw"}:{marginBottom:"1.25vh"}} className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-gray-600">Name</label>
                  <input style={sw?{padding:"0.3125vw 0.9375vw",height:"3.275vw",width:"17.5vw",marginTop:"0.6vw"}:{padding:"0.3125vh 0.9375vh",height:"3.275vh",width:"17.5vh",marginTop:"0.6vh"}} onChange={(e)=>{handleChange(e)}} type="text" id="name" name="name"value={name} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 md:text-base outline-none text-gray-700 py-1 px-3 md:leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div style={sw?{marginBottom:"1.25vw"}:{marginBottom:"1.25vh"}} className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-gray-600">Email</label>
                  <input style={sw?{padding:"0.3125vw 0.9375vw",height:"3.275vw",width:"17.5vw",marginTop:"0.6vw"}:{padding:"0.3125vh 0.9375vh",height:"3.275vh",width:"17.5vh",marginTop:"0.6vh"}} onChange={(e)=>{handleChange(e)}} type="email" id="email" name="email" value={email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 md:text-base outline-none text-gray-700 py-1 px-3 md:leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div style={sw?{marginBottom:"1.25vw"}:{marginBottom:"1.25vh"}} className="relative mb-4">
                  <label htmlFor="number" className="leading-7 text-gray-600">Number</label>
                  <input style={sw?{padding:"0.3125vw 0.9375vw",height:"3.275vw",width:"17.5vw",marginTop:"0.6vw"}:{padding:"0.3125vh 0.9375vh",height:"3.275vh",width:"17.5vh",marginTop:"0.6vh"}} onChange={(e)=>{handleChange(e)}} type="tel" id="number" name="number" value={number} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 md:text-base outline-none text-gray-700 py-1 px-3 md:leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button style={sw?{backgroundColor:"#bfb1c4",height:"3.2vw",width:"6.75vw",marginLeft:"1.6vw",marginTop:"1vw",fontSize:"1.25vw"}:{backgroundColor:"#bfb1c4",height:"3.2vh",width:"6.75vh",marginLeft:"1.6vh",marginTop:"1vh",fontSize:"1.25vh"}} onClick={submit} className="text-white  border-0 inline-flex justify-center items-center focus:outline-none hover:bg-gray-700  md:text-base">Send</button>
              </div>
            </div>
          </section>
          <p>We respect your privacy</p>
        </div>
      </div>}

    </div>
  )
}
