/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Image from 'next/image'
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus, AiOutlineMenu } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { useRef, useState, useEffect } from 'react';
import { HiShoppingCart } from "react-icons/hi"
import { IoIosArrowDown} from "react-icons/io"
import { Squash as Hamburger } from 'hamburger-react'
import Router from 'next/router';
import { Dialog } from '@headlessui/react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Flip} from 'react-reveal';
import { BsWhatsapp } from "react-icons/bs"
import {ImArrowLeft2 ,ImBin2 } from "react-icons/im"
import { CgSwap } from 'react-icons/cg';
import jwt_decode from "jwt-decode";


function Navbar({ saveCart,logout, user, cart, addToCart, removeFromCart, clearCart, subTotal, products }) {
  const [dropDown, setdropDown] = useState(false);
  const [admin, setadmin] = useState(false);
  const [listd, setlistd] = useState(false);
  const [listd2, setlistd2] = useState(false);
  const [nav, setnav] = useState(false);
  const [data, setdata] = useState([]);
  const [sw, setsw] = useState(false);
  const [subcategory, setsubcategory] = useState([]);
  const [info, setinfo] = useState({});
  const [isOpen, setOpen] = useState(false)
  const [login, setlogin] = useState(false)
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [sub, setsub] = useState([]);
  const [method, setmethod] = useState("login");
  const [name, setname] = useState("");
  const [item, setitem] = useState(0);




 
  const handleChange = (e) => {

    if (e.target.name == "email") {
      setemail(e.target.value)
    }
    if (e.target.name == "password") {
      setPassword(e.target.value)
    }
    if(e.target.name=="name"){
      setname(e.target.value)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { email, password }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let response = await res.json()
    setemail("")
    setPassword("")
    if (response.admin) {
      localStorage.setItem("admin", response.admin)
    }
    if (response.success) {
      localStorage.setItem("token", response.token)
      toast.success('congratulation your are logged in', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        Router.push(process.env.NEXT_PUBLIC_HOST)
      }, 2000);
    }
    else {
      toast.error(response.error, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }

  }
  function assign(obj) {
    return { email: obj.email }
  }
  const auth = async (res) => {
    const obj = await jwtDecode(res.credential)
    setemail(obj.email)
    const data = await assign(obj)
    let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let status = await response.json()
    setemail("")
    if (status.success) {
      localStorage.setItem("token", status.token)
      toast.success('congratulation your are logged in', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        Router.push(process.env.NEXT_PUBLIC_HOST)
      }, 2000);
    }
    else {
      toast.warning(status.error, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  const handleSubmit2 = async (e) => {
    e.preventDefault()
    const data = { name, email, password }
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let response = await res.json()
    if(response.success){
    setemail("")
    setname("")
    setPassword("")
    toast.success('congratulation your account is signed up', {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
    setTimeout(() => {
      setmethod("login")
    }, 2000);
   
  }
  }
  const assign2=(obj)=>{
    console.log(obj)
    return { name:obj.name, email:obj.email, password:obj.email}
  }
  const auth2 = async (e) => {
    let obj= await jwtDecode(e.credential)
    const data = await assign2(obj)

    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(data)
    })
    let response = await res.json()
    setemail("")
    setname("")
    setPassword("")
    if(response.success){
    toast.success('congratulation your account is signed up', {
      position: "top-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      Router.push("/Login")
    }, 2000);
  }
  }
 

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.replace("translate-x-full", "translate-x-0");
    }
    else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.replace("translate-x-0", "translate-x-full");
    }
  };
  const toggleproducts = () => {
setnav(true)
  };
  const toggleproducts2 = () => {
setnav(!nav)
setlistd(false)
setlistd2(false)
  };

  const offproducts = () => {
setnav(false)
setlistd(false)
setlistd2(false)
  };
  const off=()=>{
    setlistd(false)
    setlistd2(false)
  }
  useEffect(() => {
    setadmin(localStorage.getItem("admin"));
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getproducts`)
      .then((res) => res.json())
      .then((data) => {
        setdata(data.products)
        setsubcategory(data.subproduct)
        setsub(data.idea)
      })
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/info`)
      .then((res) => res.json())
      .then((data) => {
        setinfo(data)
      })
    
    if (screen.width > 768) {
      setsw(true)
    }
  setitem(Object.keys(cart).length)
 
  if(Router.isReady == true){
if(Router.pathname=="/product/[slug]" || Router.pathname=="/motors/[motor]" || Router.pathname=="/Checkout" ||  Router.pathname=="/switches&receivers" || Router.pathname=="/remotes" || Router.pathname=="/motorizedblinds" || Router.pathname=="/userorders/[orders]" || Router.pathname=="/category/[category]" || Router.pathname=="/order/[Order]"){
document.getElementById("nav").classList.remove("text-white")
document.getElementById("img").classList.remove("invert")
}

}


  }, []);

setInterval(() => {
  if(Object.keys(cart).length>=0 && Object.keys(cart).length !== item){
  setitem(Object.keys(cart).length)}
}, 1000);
 
 const minus=(e)=>{
  console.log(e.currentTarget.id)
  const item = JSON.parse(localStorage.getItem("cart"))
if(item[e.currentTarget.id].qty >1){
 item[e.currentTarget.id].qty=item[e.currentTarget.id].qty-1
 saveCart(item)
 localStorage.setItem("cart",JSON.stringify(item))
 cart[e.currentTarget.id].qty=item[e.currentTarget.id].qty
}
 }


 const plus=(e)=>{
  console.log(e.currentTarget.id)
  const item = JSON.parse(localStorage.getItem("cart"))
 item[e.currentTarget.id].qty=item[e.currentTarget.id].qty+1
 localStorage.setItem("cart",JSON.stringify(item))
 cart[e.currentTarget.id].qty=item[e.currentTarget.id].qty
 saveCart(item)

 }

 
  const show=(e)=>{
    setmethod(e.target.id)
  }
  const on=()=>{
    setlistd(true)
    setlistd2(false)
    
  }
  const onoff=()=>{
    
    setlistd(!listd)
    
  }

  const swap=(e)=>{
    setlistd2(false)
    const p = e.currentTarget.id
    sub[p] ? onoff() : Router.push(`${process.env.NEXT_PUBLIC_HOST}/product/${data[p]}`)
  }


  const ref = useRef();
 
  return (<>
  <div style={sw?{fontSize:"1.25vw",height:"3.75vw",right:"3.5vw",bottom:"2.6vw"}:{fontSize:"1.6vh",height:"5vh",right:"3vh",bottom:"2.6vh"}} className=" fixed overflow-hidden bottom-8 h-12 min-w-fit right-12 z-50 cursor-pointer text-white bg-green-500 rounded-full  items-center whatsapp flex justify-end"><a style={sw?{ fontFamily: "'lato', sans-serif",right:"14vw",bottom:"1vw"}:{ fontFamily: "'lato', sans-serif",right:"18.5vh",bottom:"1.2vh"}} id="what" className="absolute  right-44 bottom-3 w-0  " href="//api.whatsapp.com/send?phone=+919920223462&text=hi" title="Share on whatsapp">+919920223462</a><BsWhatsapp style={sw?{padding:"0.625vw",fontSize:"3.8vw"}:{padding:"0.8vh",fontSize:"5vh"}} className=' p-2  z-50 text-5xl ' /></div>

<ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    <Dialog style={{ width: "100vw", height: "100vh" }} className="fixed  flex justify-center items-center top-0 bg-black  bg-opacity-60 z-50" open={login} onClose={() => setlogin(false)}>
      <Dialog.Panel >
        {method =="login" && <div style={{fontFamily: "'Roboto Slab', serif"}} className='flex drop-shadow-md rounded-xl'>
          <div style={{padding:"0.8vw 4vw"}} className='bg-white block px-10 py-2  rounded-md'>
            <div  className="  w-full space-y-6">

              <form style={sw?{marginTop:"2.5vw",fontSize:"1.2vw"}:{marginTop:"2.5vh",fontSize:"1.2vh"}} onSubmit={handleSubmit} className="mt-8  w-full space-y-6" method="POST">
                <h1 style={sw?{fontSize:"1.8vw" }:{fontSize:"1.8vh" }} className=' font-bold text-center text-gray-600'>Welcome to SketchArt</h1>
                <div className=" shadow-sm">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      onChange={handleChange}
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      autoComplete="email"
                      required
style={sw?{padding:"0.5vw 1vw",width:"25vw"}:{padding:"0.5vh 1vh",width:"25vh"}}
                      className="appearance-nonerelative block w-full px-3  py-2 border mb-2 bg-gray-200 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      onChange={handleChange}
                      value={password}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="password"
                      required
                      style={sw?{padding:"0.5vw 1vw",marginTop:"0.8vw",width:"25vw"}:{padding:"0.5vh 1vh",marginTop:"0.8vh",width:"25vh"}}
                      className="appearance-none  relative block w-full px-3 py-2 border bg-gray-200 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10 "
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className=''>
                  <button
                    type="submit"
                    style={sw?{ backgroundColor: "#bfb1c4",fontSize:"1.2vw",marginTop:"2vw",height:"3vw" }:{ backgroundColor: "#bfb1c4",fontSize:"1.2vh",marginTop:"2vh",height:"3vh" }} className=" drop-shadow-sm relative w-full flex justify-center items-center border hover:shadow-lg text-white    "
                  >

                    Sign in
                  </button>
                  <div style={sw?{fontSize:"1.2vw" ,marginTop:"0.5vw"}:{fontSize:"1.2vh" ,marginTop:"0.5vh"}} className="text-sm space-x-4 mt-2 flex font-medium text-gray-800 justify-center">
                   {/**  <a id='forgot' onClick={(e)=>{show(e)}} className='hover:text-black cursor-pointer' href="/Forgot" >
                      Forgot password?
                    </a>*/}
                    <p id='signup' onClick={(e)=>{show(e)}} className='hover:text-black cursor-pointer'>Create account</p>
                  </div>
                </div>
                <div style={sw?{margin:"2vw 0vw"}:{margin:"2vh 0vw"}} className='flex justify-center  '>
                  <div style={sw?{width:"10vw"}:{width:"10vh"}} className='border-b border-gray-800  '></div>
                  <div style={sw?{margin:"-1vw 0.5vw"}:{margin:"-1vh 0.5vh"}} className=''>Or</div>
                  <div style={sw?{width:"10vw"}:{width:"10vh"}} className='border-b border-gray-800  '></div>
                </div>
                <div style={sw?{paddingBottom:"3vw"}:{paddingBottom:"3vh"}} className=' text-center'><GoogleOAuthProvider  clientId="306346834844-dut40venl0hhf8vii57vbvimfq3rbb9l.apps.googleusercontent.com"><GoogleLogin
                
                  onSuccess={res => auth(res)}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                  auto_select
                  useOneTap
                /></GoogleOAuthProvider></div>
              </form>
            </div>
          </div>

        </div>}

        {method =="signup" && <div style={{fontFamily: "'Roboto Slab', serif"}} className='flex drop-shadow-md rounded-xl'>
          <div className='bg-white block px-10 py-2  rounded-md'>
            <div className="  w-full space-y-6">

              <form style={sw?{marginTop:"2.5vw",fontSize:"1.2vw"}:{marginTop:"2.5vh",fontSize:"1.2vh"}} onSubmit={handleSubmit2} className="mt-8  w-full space-y-6" method="POST">
                <h1 style={sw?{fontSize:"1.8vw" }:{fontSize:"1.8vh" }} className=' font-bold text-center text-gray-600'>Welcome to SketchArt</h1>
                <div className=" shadow-sm">
                  <div>
                   
                    <input
                      onChange={handleChange}
                      id="name"
                      name="name"
                      type="text"
                      value={name}
                      autoComplete="name"
                      required
                      style={sw?{padding:"0.5vw 1vw",width:"25vw"}:{padding:"0.5vh 1vh",width:"25vh"}}

                      className="appearance-none  relative block w-full px-3 py-2 border bg-gray-200 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10 "
                      placeholder="Name"
                    />
                  </div>
                  <div>
                   
                    <input
                      onChange={handleChange}
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      autoComplete="email"
                      required
                      style={sw?{padding:"0.5vw 1vw",marginTop:"0.8vw",width:"25vw"}:{padding:"0.5vh 1vh",marginTop:"0.8vh",width:"25vh"}}
                      className="appearance-none  relative block w-full px-3 py-2 border bg-gray-200 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10 "
                      placeholder="Email"
                    />
                  </div>
                  <div>
                   
                    <input
                      onChange={handleChange}
                      value={password}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="password"
                      required
                      style={sw?{padding:"0.5vw 1vw",marginTop:"0.8vw",width:"25vw"}:{padding:"0.5vh 1vh",marginTop:"0.8vh",width:"25vh"}}
                      className="appearance-none  relative block w-full px-3 py-2 border bg-gray-200 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-black focus:border-black focus:z-10 "
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className=''>
                  <button
                    type="submit"
                    style={sw?{ backgroundColor: "#bfb1c4",fontSize:"1.2vw",marginTop:"2vw",height:"3vw" }:{ backgroundColor: "#bfb1c4",fontSize:"1.2vh",marginTop:"2vh",height:"3vh" }} className="group drop-shadow-sm relative w-full flex justify-center items-center py-2 px-4 border hover:shadow-lg text-white text-sm font-bold  "
                  >

                    Sign up
                  </button>
                  <div  style={sw?{fontSize:"1.2vw" ,marginTop:"0.5vw"}:{fontSize:"1.2vh" ,marginTop:"0.5vh"}} className="text-sm space-x-4 mt-2 flex font-medium text-gray-800 justify-center">
                   
                    <p id='login' onClick={(e)=>{show(e)}} className='hover:text-black cursor-pointer pt-2 '>Already have an account ?</p>
                  </div>
                </div>
                <div className='flex justify-center space-x-2 '>
                  <div  style={sw?{width:"10vw"}:{width:"10vh"}} className='border-b border-gray-800 '></div>
                  <div style={sw?{margin:"-1vw 0.5vw"}:{margin:"-1vh 0.5vh"}} className=''>Or</div>
                  <div style={sw?{width:"10vw"}:{width:"10vh"}} className='border-b border-gray-800 '></div>
                </div>
                <div className='pb-8 text-center'><GoogleOAuthProvider clientId="306346834844-dut40venl0hhf8vii57vbvimfq3rbb9l.apps.googleusercontent.com"><GoogleLogin
                  onSuccess={res => auth2(res)}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                  auto_select
                  useOneTap
                /></GoogleOAuthProvider></div>
              </form>
            </div>
          </div>

        </div>}

      </Dialog.Panel>
    </Dialog>

  
    {dropDown && <div onMouseLeave={() => setdropDown(false)} style={sw?{fontSize:"1.4vw",marginRight:"2vw",top:"5vw",padding:"0.5vw"}:{fontSize:"1.5vh",marginRight:"4vh",top:"5vh",padding:"1vh"}} className='absolute animate-fade-in-down right-14 md:right-7 z-50 2xl:text-2xl  bg-white  shadow-black shadow-sm '>
      <ul>
        
        <a className='  ' href={`/userorders/${user.value}`}><li style={sw?{padding:"0.8vw 2vw"}:{padding:"0.8vh 2vh"}} className='hover:bg-gray-800 hover:text-white'>Orders</li></a>
        <li style={sw?{padding:"0.8vw 2vw"}:{padding:"0.8vh 2vh"}} className='cursor-pointer hover:bg-gray-800 hover:text-white' onClick={logout}>Logout</li>
        {admin == "true" && <a onClick={()=>Router.push("/adminpanel")} ><li style={sw?{padding:"0.8vw 2vw"}:{padding:"0.8vh 2vh"}} className='hover:bg-gray-800 cursor-pointer hover:text-white'>Admin Panel</li></a>}
      </ul>
    </div>}
    
    <div ref={ref}  style={{fontFamily: "'lato', sans-serif"}} className="sidebar cart text-gray-600 overflow-y-scroll scrollbar-hide  fixed right-0 top-0 flex   flex-col  transform transition-transform duration-500 ease-in-out  translate-x-full z-50 bg-white shadow-xl  h-full">
      <h2  style={{fontFamily: "'Fjalla One', sans-serif" }} className="carttitle w-full text-center">CART</h2>
      <ImArrowLeft2 style={{}} onClick={toggleCart} className='arrowleft fixed  left-4 cursor-pointer ' />
      
      
      
      <div><div className='' onChange={toggleCart}>
        <ul style={{}} className='itemul overflow-y-scroll  rounded-xl  '>
          {Object.keys(cart).length == 0 && <div style={{}} className="noitem">
            No items in the cart 😭
          </div>}
          {Object.keys(cart).map((k) => {
         
            return <li style={sw?{marginTop:"1.5vw",padding:"0vw 1vw 1vw",lineHeight:"1.3vw",backgroundColor:"#ebeaeb",height:"20vh"}:{marginTop:"1.5vh",padding:"0vw 1vh 1vh",lineHeight:"1.3vh",backgroundColor:"#ebeaeb",height:"25vw"}} className='  ' key={k}>
              
              <div style={{}} className='flex my-2 justify-between items-center'>
                <div style={sw?{width:"5.2vw",marginRight:"1vw",marginTop:"1vw"}:{width:"6vh",marginRight:"1vh",marginTop:"1vh"}} className="overflow-hidden self-start"><img className='object-scale-down' alt='cart' src={cart[k].img}></img></div>
                <div style={sw?{marginLeft:"0.5vw"}:{marginLeft:"0.5vh"}} className=' w-4/5'>
                  <div style={sw?{fontSize:"1.5vw"}:{fontSize:"1.5vh"}} className="flex justify-between"><span style={sw?{marginTop:"2vw"}:{marginTop:"2vh"}} className="text-gray-800">{cart[k].name}</span> <ImBin2 style={sw?{marginTop:"1vw"}:{marginTop:"1vh"}} className='cursor-pointer text-gray-500 ' onClick={() => { removeFromCart(cart[k].itemCode,cart[k].height,cart[k].width,cart[k].variant) }}/></div>
                <div style={sw?{margin:"0.7vw 0vw"}:{margin:"0.7vh 0vh"}} className='flex'><div style={sw?{marginRight:"1vw"}:{marginRight:"1vh"}}><span className='text-gray-500'>Size</span> : <span style={sw?{fontSize:"1vw"}:{fontSize:"1vh"}}>{cart[k].width} x {cart[k].height}</span></div>
                <div><span className='text-gray-500'>Color</span> :  <span style={sw?{fontSize:"1vw"}:{fontSize:"1vh"}}>{cart[k].variant}</span></div></div>
               
               <div className='flex justify-between w-full'> <div className=' flex justify-end flex-col items-end' style={sw?{fontSize:"1.5vw",fontFamily: "'Fjalla One', sans-serif"}:{fontSize:"2vh",fontFamily: "'Fjalla One', sans-serif"}}>₹ {cart[k].price*cart[k].qty}
                </div>
                <div style={sw?{fontSize:"1.25vw",lineHeight:"1.6vw"}:{fontSize:"1.25vh",lineHeight:"1.6vh"}} className='flex items-center  bg-white border border-black '>
                <AiOutlineMinus id={k} onClick={(e)=>minus(e)}className=' cursor-pointer mx-2' style={sw?{margin:"0vw 0.5vw"}:{fontSize:"1.25vh",lineHeight:"2vh",margin:"0.5vh 1vh"}} />
                <span style={sw?{width:"3vw"}:{width:"3vh"}} className='h-full border-x flex items-center justify-center border-black '>{cart[k].qty}</span>
                <AiOutlinePlus id={k} onClick={(e)=>plus(e)} className=' cursor-pointer mx-2' style={sw?{margin:"0vw 0.5vw"}:{fontSize:"1.25vh",lineHeight:"2vh",margin:"0.5vh 1vh"}} />
                </div>
                </div>
               
                </div>
              </div>
              
            </li>;
          })}
        </ul>
      </div>

      <div style={sw?{fontSize:"1.5vw",marginTop:"2vw",padding:"0vw 1vw"}:{fontSize:"2vh",marginTop:"2vh",padding:"0vh 1vh"}} className='font-bold w-full flex justify-between mt-10'>
        <span>Total ({item} items) </span> <span>₹ {subTotal}</span></div>

     <div style={sw?{marginTop:"1.8vw"}:{marginTop:"1.8vh"}} className='w-full flex justify-center'>
      <a onClick={()=>{if(localStorage.getItem("token")){Router.push("/Checkout")}else{toast.error("login first", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })}}} ><button style={sw?{ backgroundColor: "#bfb1c4",fontSize:"1.25vw",height:"3.125vw",width:"10.45vw" }:{ backgroundColor: "#bfb1c4",fontSize:"2vh",height:"4vh",width:"12vh" }} className="flex  text-white hover:opacity-80     border-0  justify-center focus:outline-none   "><span className='my-auto'>Check out</span></button></a>
      </div> 
      </div>
     

    </div>


    {/**main nav**/}
    <nav  id='nav' onMouseLeave={offproducts} className=" z-40 text-white  absolute top-0 w-full ">

      <div style={sw?{padding:"0vw 1vw"}:{padding:"0vw 1vh"}}>
        <div className="flex ">
         

          <div style={{margin:"1vw 0vw"}} className="hidden md:flex  justify-between w-full  ">
          
            <div>

              <a href="/" className="flex   ">
                <img style={{height:"5vw"}} id='img' src="/logo.svg" alt="Logo" className="h-10 md:h-16 invert w-auto " />
              </a>
            
          </div>

            <div id='navtext' style={{fontSize:"1.25vw",paddingTop:"1.3vw"}} className="hidden md:flex  absolute w-full justify-center    ">
              <a style={{ textUnderlineOffset: 8 }} onClick={()=>Router.push("/")} onMouseEnter={offproducts} className="  hover:underline cursor-pointer decoration-2 ">HOME</a>
              <div style={{ textUnderlineOffset: 8}}  className=" "><span style={{padding:"0vw 2vw"}} onMouseEnter={toggleproducts} className='flex  justify-center px-6 cursor-pointer '>PRODUCTS< IoIosArrowDown style={{marginLeft:"1vw"}} className={`${nav ? 'rotate-180 transform ml-4 self-center' : 'ml-4 self-center'} `}/></span><div> {nav && <Flip top><div style={{fontSize:"1.25vw",marginTop:"0.4vw"}} className='   bg-black bg-opacity-70  shadow-black shadow-sm   md:px-0 my-1  md:acctext ' >
     
     <div style={{ }} className="flex flex-col  text-white">
       {
         Object.keys(data).map((p) => {
           return (<div key={p} style={{fontSize:"1vw"}} className="flex z-50">
            
               <li  id={data[p]} onMouseEnter={sub[p] ? on:off} style={{height:"2.85vw",width:"11vw",marginLeft:"0.4vw"}} className='flex items-center  '  ><span className='flex items-center '><span className='w-full cursor-pointer uppercase'><a onClick={()=>{sub[p]?"":Router.push(`${process.env.NEXT_PUBLIC_HOST}/product/${data[p]}`)}}>{data[p]}</a></span><span>{sub[p] && < IoIosArrowDown style={{marginLeft:"1vw"}} className={`${listd ? '-rotate-90 transform' : ''} `}/>}</span></span></li>
            
             {listd && sub[p] && <div style={{left:"12.45vw"}}  className='z-50 absolute shadow-black shadow-sm bg-black bg-opacity-70 left-44 min-w-max flex flex-col'>
             { subcategory[0].map((s)=>{return(<div key={s}  style={{fontSize:"1vw",height:"2.85vw",width:"11vw",margin:"0vw 0.5vw"}} className=' text-white min-w-max uppercase cursor-pointer flex items-center'><a onClick={()=>Router.push(`${process.env.NEXT_PUBLIC_HOST}/product/${s}`)}   >{s}</a></div>)})}
             
               </div>}
               </div>
           )


         })
       }
<div style={{height:"2.85vw",width:"11vw",marginLeft:"0.4vw",fontSize:"1vw"}} onMouseEnter={()=>{setlistd2(true);setlistd(false)}} className='flex items-center w-full cursor-pointer uppercase '>motors< IoIosArrowDown style={{marginLeft:"1vw"}} className={`${listd2 ? '-rotate-90 transform' : ''} `}/>
{listd2 && <div style={{left:"12.45vw",top:"14vw"}}  className='z-50 ml-[7.2vw] shadow-black shadow-sm bg-black bg-opacity-70  min-w-max flex flex-col'>
<div  style={{fontSize:"1vw",height:"2.85vw",width:"11vw",margin:"0vw 0.5vw"}} className=' text-white min-w-max uppercase cursor-pointer flex items-center'><a onClick={()=>Router.push(`${process.env.NEXT_PUBLIC_HOST}/category/wifi motors`)}   >WIFI MOTORS</a></div>
<div  style={{fontSize:"1vw",height:"2.85vw",width:"11vw",margin:"0vw 0.5vw"}} className=' text-white min-w-max uppercase cursor-pointer flex items-center'><a onClick={()=>Router.push(`${process.env.NEXT_PUBLIC_HOST}/category/tubular motors`)}   >TUBULAR MOTORS</a></div>
<div  style={{fontSize:"1vw",height:"2.85vw",width:"11vw",margin:"0vw 0.5vw"}} className=' text-white min-w-max uppercase cursor-pointer flex items-center'><a onClick={()=>Router.push(`${process.env.NEXT_PUBLIC_HOST}/category/battery motors`)}   >BATTERY MOTORS</a></div>
<div  style={{fontSize:"1vw",height:"2.85vw",width:"11vw",margin:"0vw 0.5vw"}} className=' text-white min-w-max uppercase cursor-pointer flex items-center'><a onClick={()=>Router.push(`${process.env.NEXT_PUBLIC_HOST}/category/curtain motors`)}   >CURTAIN MOTORS</a></div>
</div> }
</div>
<div onMouseEnter={()=>setlistd2(false)} style={{fontSize:"1vw",height:"2.85vw",width:"11vw",margin:"0vw 0.5vw"}} className=' text-white min-w-max uppercase cursor-pointer flex items-center' onClick={()=>Router.push(`/remotes`)}>Remotes</div>
<div onMouseEnter={()=>setlistd2(false)} style={{fontSize:"1vw",height:"2.85vw",width:"11vw",margin:"0vw 0.5vw"}} className=' text-white min-w-max uppercase cursor-pointer flex items-center' onClick={()=>Router.push(`/switches&receivers`)}>Switches/Receivers</div>
     </div>


   </div></Flip>}</div></div>
              <a onClick={()=>Router.push("/about")}><span style={{ textUnderlineOffset: 8 }}   className="  hover:underline  decoration-2 cursor-pointer  z-50">ABOUT US</span></a>
              <div style={{ textUnderlineOffset: 8 ,margin:"0vw 2vw" }}  onMouseEnter={offproducts} className=" hover:underline cursor-pointer decoration-2   "><a  onClick={()=>Router.push("/contact")} >CONTACT US</a></div>
            </div>

            <div style={{marginTop:"-0.5vw"}} className='flex items-center'>
            {!user.value && <a id="login"  onClick={() => setlogin(true)} style={{fontSize:"1.25vw"}} className="z-50   text-lg cursor-pointer 2x:text-xl hover:opacity-80  hover: transition duration-300">LOG IN</a>}
            {user.value && <MdAccountCircle style={{fontSize:"2.37vw"}} className=" font-medium  cursor-pointer transition  duration-300 md:text-3xl z-50 2xl:text-4xl" onMouseEnter={() => setdropDown(true)} />}
            <HiShoppingCart style={{fontSize:"2.37vw",margin:"0vw 2vw"}} id="cart" onClick={toggleCart} onMouseEnter={() => setdropDown(false)} className='  z-50 cursor-pointer  ' />
            {   item!=0  && <div style={{fontSize:"1.2vw",padding:"0vw 0.6vw",right:"2.3vw",top:"1.2vw"}} className=' z-50 absolute bg-black text-white right-3 top-2 px-2 rounded-full'>{item}</div>}
          </div>
          </div>
          </div>
      </div>
          
          <div id='mnav' className="md:hidden text-white justify-between w-full flex  ">
          <div>

<a href="/" className="flex ">
  <img style={{height:"5vh"}} id='img' src="/logo.svg" alt="Logo" className="mt-1 invert w-auto " />
</a>

</div>

              <div className='flex  items-center space-x-4'>
            {!user.value && <a onClick={() => setlogin(true)} className="  transition duration-300">LOG IN</a>}
            {user.value && <MdAccountCircle className="   text-xl  cursor-pointer transition duration-300 " onClick={() => setdropDown(!dropDown)} />}
            <HiShoppingCart onClick={toggleCart} onMouseEnter={() => setdropDown(false)} className='text-xl  cursor-pointer  ' />
            {  item!=0  && <div style={{fontSize:"1.2vh",padding:"0vw 0.575vh",right:"6.75vh",top:"0.8vh"}} className=' z-50 absolute bg-black text-white right-3 top-2 px-4 rounded-full'>{item}</div>}
            <Hamburger size={20} toggled={isOpen} toggle={setOpen} className=" mobile-menu-button" />
            </div>
          </div>
      

      {isOpen && <div id='mv' className=" mobile-menu absolute w-full animate-fade-in-down ">
        <ul className="bg-white text-black text-center">
          <li className="active"><a href="/" className="block text-sm px-2 py-4  phover ">Home</a></li>
          <div  className=" "><span  onClick={toggleproducts2} className='flex  justify-center pl-8 phover px-2 py-4  text-sm cursor-pointer '>PRODUCTS< IoIosArrowDown style={{marginLeft:"1vh"}} className={`${nav ? 'rotate-180 transform  self-center' : 'self-center'} `}/></span>
          <div> {nav && <Flip top><div style={{fontSize:"1.25vh",backgroundColor:"#bfb1c4"}}  >
     
     <div style={{ }} className="flex flex-col h-64 text-white">
       {
         Object.keys(data).map((p) => {
           return (<div key={p} style={{fontSize:"1.4vh"}} className="w-1/2 flex z-50">
            
               <li  id={p} onClick={(e)=>{swap(e)}} style={{height:"4vh",marginLeft:"2vh"}} className='flex items-center  '  ><span   className='flex items-center '><span className='uppercase'>{data[p]}</span><span>{sub[p] && < IoIosArrowDown style={{marginLeft:"1vh"}} className={`${listd ? '-rotate-90 transform' : ''} `}/>}</span></span></li>
             
             {listd && sub[p] && <div style={{left:"24vh"}}  className='z-50 border-l-2 text-white border-white absolute min-w-max flex flex-col'>
             { subcategory[0].map((s)=>{return(<div key={s}  style={{fontSize:"1.4vh",height:"3.8vh",margin:"0vh 2vh"}} className='z-50  min-w-max uppercase cursor-pointer flex items-center'><a   href={`${process.env.NEXT_PUBLIC_HOST}/product/${s}`}  >{s}</a></div>)})}
             
               </div>}
               </div>
           )


         })
       }
 <div  onClick={()=>{setlistd2(!listd2);setlistd(false)}} style={{height:"4vh",marginLeft:"2vh"}} className='flex items-center w-1/2'  ><span   className='flex items-center '><span className=' uppercase'>motors</span><span> < IoIosArrowDown style={{marginLeft:"1vh"}} className={`${listd2 ? '-rotate-90 transform' : ''} `}/></span></span>
{listd2 && <div style={{left:"24vh"}}  className='z-50 border-l-2 text-white border-white absolute min-w-max min-h-fit flex flex-col'>
<div  style={{fontSize:"1.4vh",height:"3.8vh",margin:"0vh 2vh"}} className='z-50  min-w-max uppercase cursor-pointer flex items-center'><a   href={`${process.env.NEXT_PUBLIC_HOST}/category/wifi motors`}  >WIFI MOTORS</a></div>
<div  style={{fontSize:"1.4vh",height:"3.8vh",margin:"0vh 2vh"}} className='z-50  min-w-max uppercase cursor-pointer flex items-center'><a   href={`${process.env.NEXT_PUBLIC_HOST}/category/tubular motors`}  >TUBULAR MOTORS</a></div>
<div  style={{fontSize:"1.4vh",height:"3.8vh",margin:"0vh 2vh"}} className='z-50  min-w-max uppercase cursor-pointer flex items-center'><a   href={`${process.env.NEXT_PUBLIC_HOST}/category/battery motors`}  >BATTERY MOTORS</a></div>
<div  style={{fontSize:"1.4vh",height:"3.8vh",margin:"0vh 2vh"}} className='z-50  min-w-max uppercase cursor-pointer flex items-center'><a   href={`${process.env.NEXT_PUBLIC_HOST}/category/wifi motors`}  >WIFI MOTORS</a></div>
</div>}
</div>
<div onMouseEnter={()=>setlistd2(false)} style={{fontSize:"1.4vh",height:"3.8vh",margin:"0vh 2vh"}}  className=' text-white min-w-max uppercase cursor-pointer flex items-center' onClick={()=>Router.push(`/remotes`)}>Remotes</div>
     </div>


   </div></Flip>}</div></div>
          <li><a onClick={()=>Router.push("/about")}  className="block text-sm px-2 py-4 phover transition duration-300">About</a></li>
          <li><a onClick={()=>Router.push("/contact")}  className="block text-sm px-2 py-4 phover transition duration-300">Contact Us</a></li>
        </ul>
      </div>}



    </nav>
  </>
  );
}
export default Navbar