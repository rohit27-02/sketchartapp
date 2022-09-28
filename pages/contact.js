/* eslint-disable @next/next/no-head-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Info from '../models/Info'
import mongoose from "mongoose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useState } from 'react';
import {GrMapLocation} from "react-icons/gr"
import {AiOutlineFlag} from "react-icons/ai"
import {IoIosPhonePortrait} from "react-icons/io"
import Router from 'next/router';
import { Slide } from 'react-reveal';
import dynamic from 'next/dynamic'







const Contact = ({ info }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [company, setcompany] = useState("");
  const [number, setnumber] = useState("");
  const [sw, setsw] = useState(false);

  const Map = dynamic(() => import("../components/Map"), {
    loading: () => "Loading...",
    ssr: true
  });

  function handleChange(e) {
    if (e.target.id == "name") {
      setname(e.target.value)
    }
    else if (e.target.id == "email") {
      setemail(e.target.value)
    }
    else if (e.target.id == "message") {
      setmessage(e.target.value)
    }
    else if (e.target.id == "company") {
      setcompany(e.target.value)
    }
    else if (e.target.id == "number") {
      setnumber(e.target.value)
    }
  }
  async function submit(e) {
    const data = { name, email, message,number,company }
    console.log(data)
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
      setmessage("")
      setcompany("")
      setnumber("")
      toast.success('Your feedback has been submitted', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        Router.push("/")
      }, 3000);
    }
  }

  
  useEffect(() => {
    if(screen.width>768){
      setsw(true)
    }
    
  }, []);

 

  return (<>


<ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
  <div style={sw ?{height:"85vh"}:{height:"85vw"}} className="w-full">
  <div style={sw ?{height:"90vh"}:{height:"90vw"}} className="overflow-hidden absolute z-10  top-0  w-full">
    <div className='bg-black w-full h-full absolute top-0 bg-opacity-40 z-30'></div>
    <h1 style={sw ?{fontFamily: "'Fjalla One', sans-serif",letterSpacing:1.5,fontSize:"4.75vw",top:"20vw"}:{fontFamily: "'Fjalla One', sans-serif",letterSpacing:1.5,fontSize:"4.75vh",top:"20vh"}} className='2xl:text-7xl text-6xl font-bold w-full text-center absolute   z-50 text-gray-200  '>CONTACT US</h1>
    <Slide bottom><img src='/contact us image.png' className='object-cover h-full w-full'></img></Slide>
  </div>
  </div>
  <div  className='bg-white w-full'></div>
  <div style={{fontFamily: "'Roboto Slab', serif",backgroundColor:"#ebeaeb"}}>
  <div style={sw?{marginTop:"6.25vw",padding:"4.375vw 0vw"}:{marginTop:"6.25vh",padding:"4.375vh 2vw"}} className="flex  mt-20 py-14  items-center w-full">
    <div style={sw?{padding:"0vw 8.75vw"}:{padding:"0vw 2vh"}} className='flex flex-col md:flex-row items-center md:items-start md:justify-evenly px-28 w-full'>

    <div style={sw?{fontSize:"1.25vw",lineHeight:"4vw"}:{fontSize:"1.25vh",lineHeight:"8vw"}} className='  flex  flex-col  items-center w-1/3'> 
        <AiOutlineFlag style={sw?{fontSize:"3.75vw"}:{fontSize:"3.75vh"}} className='text-5xl'/>
        <h1 className='md:text-[2vw] text-[2vh]' style={{fontFamily: "'Fjalla One', sans-serif"}}>OUR EMAIL</h1>
        <p className='md:h-[4vw] h-[4vh]'>{info[0].email}</p>
      </div>
       <div style={sw?{fontSize:"1.25vw"}:{fontSize:"1.25vh",marginBottom:"4vw"}} className='   flex flex-col items-center w-full md:w-1/3'> 
        <GrMapLocation style={sw?{fontSize:"3.75vw"}:{fontSize:"3.75vh"}} className='text-5xl'/>
        <h1 className='md:text-[2vw] text-[2vh]' style={sw?{margin:"0.5vw 0vw  1.6vw 0vw",fontFamily: "'Fjalla One', sans-serif"}:{margin:"1.5vh 0vw  1.6vh 0vw",fontFamily: "'Fjalla One', sans-serif"}}>OUR ADDRESS</h1>
        <p className='md:h-[4vw] h-[4vh]'>{info[0].address}</p>
      </div>
     
       <div style={sw?{fontSize:"1.25vw",lineHeight:"4vw"}:{fontSize:"1.25vh",lineHeight:"8vw"}} className='  flex  flex-col items-center w-1/3'>
        <IoIosPhonePortrait style={sw?{fontSize:"3.75vw"}:{fontSize:"3.75vh"}} className='text-5xl'/>
        <h1 className='md:text-[2vw] text-[2vh]' style={{fontFamily: "'Fjalla One', sans-serif"}}>CALL US</h1>
        <p className='md:h-[4vw] h-[4vh]'>{info[0].phone}</p>
        </div>
    </div>
  </div>
  </div>

<section  style={{fontFamily: "'Roboto Slab', serif",backgroundColor:"#bfb1c4" }} className="text-gray-600 body-font relative">
  <div style={sw?{padding:" 7.5vw 1.575vw"}:{padding:" 7.5vw 1.575vh"}} className=" px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
   
   <div id='map' className="h-80 md:h-auto md:w-1/2 bg-gray-300    w-full p-10  flex md:p-0 ">
  
  <Map/>
   </div>
    
   
     
    
    <div style={sw?{backgroundColor:"#bfb1c4",lineHeight:"5vw",fontSize:"1.25vw",marginLeft:"2vw"}:{backgroundColor:"#bfb1c4",lineHeight:"5vh",fontSize:"1.25vh"}} className=" md:w-1/2 bg-white flex  flex-col md:ml-auto w-full">
      <h2 style={sw?{fontFamily: "'Fjalla One', sans-serif",wordSpacing:2,fontSize:"1.875vw",marginBottom:"1vw"}:{fontFamily: "'Fjalla One', sans-serif",wordSpacing:2,fontSize:"1.875vh",marginBottom:"1vh",marginTop:"2vh"}} className="text-white md:text-2xl 2xl:text-3xl mb-1 font-medium title-font">LEAVE A COMMENT</h2>
      
      <div  style={{marginBottom:"0.5vw"}} className="flex  relative  ">
      <div >
        
        <input placeholder='Name' required onChange={(e)=>handleChange(e)} type="text" style={sw?{width:"23vw",height:"3.4vw",padding:"0.325vw 0.9375vw"}:{width:"21vh",height:"3.4vh",padding:"0.325vh 0.9375vh"}} id="name" name="name" className="w-full  bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div >
        
        <input placeholder='Company' required onChange={(e)=>handleChange(e)} type="text" style={sw?{width:"23vw",height:"3.4vw",padding:"0.325vw 0.9375vw",marginLeft:"1.8vw"}:{width:"20.5vh",height:"3.4vh",padding:"0.325vh 0.9375vh",marginLeft:"1.8vh"}} id="company" name="company" className="w-full  bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div style={{marginBottom:"1vw"}} className="flex  relative ">
      <div >
      
        <input placeholder='Email' required onChange={(e)=>handleChange(e)} type="email" id="email" style={sw?{width:"23vw",height:"3.4vw",padding:"0.325vw 0.9375vw"}:{width:"21vh",height:"3.4vh",padding:"0.325vh 0.9375vh"}} name="email" className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div >
        
        <input placeholder='Number ' required onChange={(e)=>handleChange(e)} type="number" id="number" style={sw?{width:"23vw",height:"3.4vw",padding:"0.325vw 0.9375vw",marginLeft:"1.8vw"}:{width:"20.5vh",height:"3.4vh",padding:"0.325vh 0.9375vh",marginLeft:"1.8vh"}} name="number" className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div style={sw?{marginBottom:"1.5vw"}:{marginBottom:"1.5vh"}} className="flex relative mb-4">
       
        <textarea style={sw?{width:"48vw",height:"10vw",padding:"1vw 0.9375vw"}:{width:"50vh",height:"10vh",padding:"1vh 0.9375vh"}} placeholder='Write your message here ' required onChange={(e)=>handleChange(e)} id="message" name="message" className=" bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32  outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div><button style={sw?{color:"#bfb1c4",height:"2.825vw",width:"7.5vw",fontSize:"1.25vw"}:{color:"#bfb1c4",height:"2.825vh",width:"7.5vh",fontSize:"1.25vh"}} onClick={(e)=>submit(e)} className="bg-white   flex justify-center items-center float-left   border-0 py-2 px-6  text-sm 2xl:text-lg">Submit</button></div>
     
    </div>
  </div>
</section>

    {/*<section className=" body-font relative">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div style={{ fontFamily: "'Poppins', sans-serif" }} className="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 overflow-hidden sm:mr-10 p-10 flex flex-col justify-start relative">
          <div className='self-start space-y-8  '>
            <h1 className='text-3xl font-bold'>Work with us</h1>
            <p className='leading-loose font-thin'>Our help center is fresh and always open for business. <br></br>If you can&apos;t find the answers you&apos;re looking for, <br></br>we&apos;re are here to lend a hand.</p>
          </div>
        </div>
        <div className="bg-white relative flex flex-wrap py-6 ">

          <div className="space-y-4">
            <h2 className="title-font font-bold text-black tracking-widest text-2xl">Email</h2>
            <p><a className="underline underline-offset-4 leading-loose">{info[0].email}</a></p>
            <h2 className="title-font font-bold text-black tracking-widest text-2xl mt-4">Phone</h2>
            <p className="leading-loose">{info[0].phone}</p>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className='absolute text-7xl leading-normal font-bold my-24 mx-10 float-right w-full text-white'>A Right Window <br></br>Is a Bright Window .</h1>
        <img style={{ height: "60vh" }} className='w-full  object-center object-cover ' src='/pexels-savvas-stavrinos-814544.jpg'></img>
      </div>

      <section className="body-font w-full">
        <div className="container px-5  mx-auto flex ">
          <div className=" md:bg-white justify-center md:p-8 flex flex-col md:flex-row  items-center md:space-x-5 md:ml-auto w-full relative z-10 ">
            <div className="relative mb-4">
              <label htmlFor="Full Name" className="leading-7 text-lg text-gray-600">Name</label>
              <input type="text" id="Full Name" name="Full Name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg md:text-base outline-none text-gray-700 py-1 px-3 md:leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-lg text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg md:text-base outline-none text-gray-700 py-1 px-3 md:leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="phone" className="leading-7 text-lg text-gray-600">Phone</label>
              <input type="tel" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-lg md:text-base outline-none text-gray-700 py-1 px-3 md:leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg md:text-lg">Send</button>
          </div>
        </div>
      </section>
     
    </section>*/}
    </>
  )
}
export async function getStaticProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let info = await Info.find()
  return {
    props: { info: JSON.parse(JSON.stringify(info)) },
  }
}

export default Contact