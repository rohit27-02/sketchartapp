/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react'
import Product from '../../models/Product';
import mongoose from "mongoose";
import { Disclosure, Dialog } from '@headlessui/react'
import { IoIosArrowDown } from "react-icons/io"
import { MdOutlineCancel } from "react-icons/md"
import { BsInfoCircleFill } from "react-icons/bs"
import { BsImages } from "react-icons/bs"
import { AiOutlinePlus,AiOutlineMinus,AiOutlineLeft,AiOutlineRight } from 'react-icons/ai';
import { Router } from 'next/router';
import Motor from '../../models/Motor'
import AppWithZoomCustomization from "../../components/zoom"




const Post = ({ buyNow,  addToCart, product ,m1,m2,m3,m4}) => {
  const [selectedheight, setselectedheight] = useState(2 );
  const [cartheight, setcartheight] = useState(2 );
  const [cartwidth, setcartwidth] = useState(2 );
  const [selectedwidth, setselectedwidth] = useState(2 );
  const [selectedexactwidth, setselectedexactwidth] = useState(".0");
  const [selectedexactheight, setselectedexactheight] = useState(".0");
  const [selectedcolor, setselectedcolor] = useState(0);
  const [prevcolor, setprevcolor] = useState(0);
  const [isenable, setisenable] = useState(false);
  const [mechanism, setmechanism] = useState("Manual");
  const [qty, setqty] = useState(1);

  const [sw, setsw] = useState(false);
  const [withmotor, setwithmotor] = useState(false);
  const [motor, setmotor] = useState(null);

  const [recomendedmotors, setrecomendedmotors] = useState([]);
  const [showgallery, setshowgallery] = useState(false);
  const [index, setindex] = useState(0);
  const [i, seti] = useState(0);

  const height = []
  const width = []
  const exactHeightOrWidth = ['0', '1/8', '1/4', '3/8', '1/2', '5/8', '3/4', '7/8']

  for (let i = 2; i < 41; i++) {
    height.push(i )
  }
  for (let i = 2; i < 31; i++) {
    width.push(i )
  }
 
  function selecth(e) {
    let m = (e.target.value).split(" ")
    setselectedheight(m[0])
  }
  function selecteh(e) {
    let m = (e.target.value).split(" ")
    let a= eval(m[0])
    let b=a.toString()
    let c=b.slice(1)
    setselectedexactheight(c)
  }
  function selectew(e) {
    let m = (e.target.value).split(" ")
    let a= eval(m[0])
    let b=a.toString()
    let c=b.slice(1)
   
    setselectedexactwidth(c)
  }
  function selectw(e) {
    let m = (e.target.value).split(" ")
    setselectedwidth(m[0])
  }
  function selectcolor(e) {
    setselectedcolor(e.target.id)

    document.getElementById(e.target.id).classList.add("border-2")

  }
useEffect(() => {
 setcartheight(`${selectedheight}${selectedexactheight}`)
}, [selectedexactheight,selectedheight]);
useEffect(() => {
 setcartwidth(`${selectedwidth}${selectedexactwidth}`)
}, [selectedexactwidth,selectedwidth]);

  useEffect(() => {
    document.getElementById(prevcolor).classList.remove("border-2")
    setprevcolor(selectedcolor)
  }, [selectedcolor]);
  useEffect(() => {
    if (screen.width > 768) {
      setsw(true)
    }
    document.getElementById(0).classList.add("border-2")
    Object.keys(product.variants).map((p,d)=>seti(d));

  }, []);

  const measuringguide = () => {
    setisenable(!isenable)
  }
  const mechanismtype=(e)=>{
  
    if(e.target.id == "Manual"){
      setwithmotor(false)
    setrecomendedmotors([])
    setmotor(null)
    }
    setmechanism(e.target.id)
    if(e.target.id == "Motorized"){
      setwithmotor(!withmotor)
     if( recomendedmotors.length > 0){
      setmotor(null)
      setrecomendedmotors([])
     }
     if(selectedheight<=20 && selectedwidth>10 && selectedwidth<=20 ){
      setrecomendedmotors(m1);
   
    }
      
      if(selectedheight<=14 && selectedwidth<=10 && selectedwidth>=3 ){
        setrecomendedmotors(m2);
      
      }
      else if( selectedwidth<=10 && selectedwidth>=3 && selectedheight<100){
        setrecomendedmotors(m3);
      }
      else if(selectedheight<=14 && selectedwidth<=10 && selectedwidth>=2){
        setrecomendedmotors(m4);
      }
     
    }
  }
  useEffect(() => {
    if( recomendedmotors.length > 0){
      setmotor(null)
      setrecomendedmotors([])
     }
     if(selectedheight<=20 && selectedwidth>10 && selectedwidth<=20 ){
      setrecomendedmotors(m1);
   
    }
      
      if(selectedheight<=14 && selectedwidth<=10 && selectedwidth>=3 ){
        setrecomendedmotors(m2);
      
      }
      else if( selectedwidth<=10 && selectedwidth>=3 && selectedheight<100){
        setrecomendedmotors(m3);
      }
      else if(selectedheight<=14 && selectedwidth<=10 && selectedwidth>=2){
        setrecomendedmotors(m4);
      }
  }, [selectedheight,selectedwidth]);



  return <>

  {sw && <div style={{height:"6.2vw",backgroundClip:""}} className='absolute border-b  border-black  top-0 w-full  '></div>}
    {sw && <img style={sw?{height:"73vh",marginBottom:"4.5vw",marginTop:"10vw" ,padding:"0vw 7.5vw"}:{height:"50vw",marginTop:"9vh" }} className=' w-full' alt='img' src={product.poster}></img>}
{!sw && <div style={{backgroundColor:"#bfb1c4"}} className='w-full absolute top-0 h-12'></div>}
    <section id='main'   style={sw?{  fontFamily: "'poppins', sans-serif",padding:"0vw 3.5vw"}:{ fontFamily: "'poppins', sans-serif"}} className="text-gray-900  justify-center flex body-font overflow-hidden">
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
      {sw && <div className='absolute bg-white h-[11vw] w-[42.1vw] top-[23vw] left-0'>
        <h1 style={{fontFamily: "'Fjalla One', sans-serif"}} className="text-[2.5vw] mt-[1.3vw] ml-[10vw] uppercase">{product.title}</h1>
        <p className='ml-[10vw] text-[1.1vw]'>{product.tagline}</p>
        </div>}
      <div  className=" w-full ">

        <div  className='w-full  flex-col justify-center md:flex-row flex '>
          <div style={{ backgroundColor: "#ebeaeb"}} className='md:w-5/12 pt-10 md:pt-0 w-full'>
          
          
       
           {sw && <AppWithZoomCustomization   image={product.variants[selectedcolor].img}/>  }
           {!sw && <img src={product.variants[selectedcolor].img} className=" scale-75"></img>}
     
            

            <div style={sw?{fontSize:"1.1vw",paddingLeft:"1.875vw"}:{fontSize:"1.5vh",paddingLeft:"3.5vh"}} className='w-full pl-6  pb-4'>
              
              <div style={sw?{fontSize:"1.25vw",padding:"1.875vw"}:{fontSize:"2vh",padding:"1.875vh"}} className='text-gray-800 flex items-center  pb-2 pt-6'><p style={sw?{backgroundColor: "#bfb1c4",height:"1vw",width:"2.75vw",marginLeft:"-3.3vw"}:{backgroundColor: "#bfb1c4",height:"1vh",width:"2.75vh",marginLeft:"-3.3vh"}} className='w-5 -ml-6 absolute h-3'></p>Product Summary</div>
              <div className='w-full  grid grid-flow-col  '>
                <div  className='text-gray-800 border-r  border-gray-300'>
                  <p className='leading-loose '>Style</p>
                  <p className='leading-loose '>Color</p>
                  <p className='leading-loose '>Height</p>
                  <p className='leading-loose '>Width</p>
                  <p className='leading-loose '>Mechanism</p>
                 {withmotor && <p className='leading-loose '>Motor</p>}
                  
                </div>
                <div  className='ml-8 '>
                  <p className='leading-loose '>{product.category}</p>
                  <p className='leading-loose '>{product.variants[selectedcolor].color}</p>
                  <p className='leading-loose '>{selectedheight}{selectedexactheight} Meters</p>
                  <p className='leading-loose '>{selectedwidth}{selectedexactwidth} Meters</p>
                  <p className='leading-loose '>{mechanism}</p>
                  {withmotor && <p className='leading-loose '>{motor}</p>}
                 
                </div>
              </div>
            </div>
            </div>

            <div style={sw?{ backgroundColor: "#ebeaeb",padding:"3.75vw 3.125vw" }:{ backgroundColor: "#ebeaeb",padding:"3.75vh 3.5vh" }} className='py-12 text-gray-800 md:w-1/2 w-full px-4 md:px-10 '>
          <div  className='flex flex-col '>
            <span style={sw?{fontFamily: "'Fjalla One', sans-serif",fontSize:"3.8vw"}:{fontFamily: "'Fjalla One', sans-serif",fontSize:"3.8vh"}} className="  text-5xl uppercase ">{product.title} </span>
            <div style={sw?{fontSize:"1.25vw",padding:"1.875vw 0vw"}:{fontSize:"1.5vh",padding:"1.875vh 0vh"}} className='space-x-6 flex py-6  text-base'>
              <a href='#details' className='cursor-pointer flex items-center  space-x-3  pr-4 border-black underline underline-offset-2 '><BsInfoCircleFill /><span>Product Details</span></a>
              <button onClick={()=>setshowgallery(true)} className='cursor-pointer flex items-center  space-x-3  pr-4 border-black underline underline-offset-2 '><BsImages /><span>Product Gallery</span></button>
              <Dialog style={{ width: "100vw", height: "100vh" }} className="fixed bg-black flex justify-center items-center top-0   bg-opacity-60 z-50" open={showgallery} onClose={() => setshowgallery(false)}>
                        <Dialog.Panel > 
                        <div style={sw?{padding:"2vw"}:{padding:"0vw 0vw"}} className='h-[90vh] w-[80vw] flex justify-evenly items-center text-[4vw] bg-white '>
                        <AiOutlineLeft onClick={()=>setindex(index==0?0:index-1)} className='cursor-pointer hover:border-2 border-[#bfb1c4] text-gray-700 transition-all duration-150 rounded-full hover:bg-[#bfb1c4]'/>
                        <img className='h-[90vh]' src={product.variants[index].img}></img>
                        <AiOutlineRight onClick={()=>setindex(index==i?index:index+1)} className='cursor-pointer hover:border-2 border-[#bfb1c4] text-gray-700 transition-all duration-150 rounded-full hover:bg-[#bfb1c4]'/>

                        </div>
                        </Dialog.Panel>
                      </Dialog>
            </div>
           
            <div style={sw?{padding:"0vw 2.5vw",marginBottom:"1.875vw"}:{padding:"0vh 2.5vh",marginBottom:"1.875vh"}} className="  w-full px-8 mb-6 bg-white  ">
              <div style={sw?{fontSize:"1.25vw",marginTop:"1.25vw"}:{fontSize:"2vh",marginTop:"1.25vh"}} className='  font-medium mt-4  flex items-center'><p style={sw?{backgroundColor: "#bfb1c4", fontFamily: "'poppins', sans-serif",height:"1vw",width:"2.75vw",marginLeft:"-3.2vw"}:{backgroundColor: "#bfb1c4", fontFamily: "'poppins', sans-serif",height:"1vh",width:"2.75vh",marginLeft:"-3.2vh"}}  className='w-8 -ml-10 absolute h-3'></p>Color Selection</div>
              <div style={sw?{height:"30vw"}:{height:"30vh",marginTop:"2vh"}} className='flex justify-center overflow-y-scroll '>
              <div className='  grid grid-flow-row w-full  grid-cols-2 2xl:grid-cols-3'>
                {

                  Object.keys(product.variants).map((p) => { return <div key={p} ><div id={p} onClick={(e) => { selectcolor(e) }} style={sw?{ backgroundImage: `url(${product.variants[p].colorcode})`, borderColor: "red",height:"20vh",width:"10vw"}:{ backgroundImage: `url(${product.variants[p].colorcode})`, borderColor: "red",height:"20vw",width:"10vh"}} className="  mt-8  cursor-pointer "></div><span style={sw?{fontSize:"1.1vw"}:{fontSize:"1.1vh"}}>{product.variants[p].color}</span></div> })}
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
              <span style={sw?{fontFamily: "'Fjalla One', sans-serif",fontSize:"1.58vw"}:{fontFamily: "'Fjalla One', sans-serif",fontSize:"2vh"}} className="title-font ml-4  text-xl text-gray-900">₹ {product.variants[selectedcolor].price*qty}</span></div>
              <div className='flex space-x-4 mt-4 md:mt-0'>
              <button style={sw?{ backgroundColor: "#bfb1c4" ,fontSize:"1.1vw",width:"8.75vw",height:"2.8125vw"}:{ backgroundColor: "#bfb1c4" ,fontSize:"1.5vh",width:"10vh",height:"3.5vh"}} className="flex items-center border-0 md:py-2 py-1 w-28 justify-center focus:outline-none text-white " onClick={() => { buyNow(product.slug,qty, product.price, product.title, cartheight, cartwidth, product.variants[selectedcolor].color,motor ,product.variants[selectedcolor].img) }}>Buy now</button>
              <button style={sw?{ backgroundColor: "#bfb1c4" ,fontSize:"1.1vw",width:"8.75vw",height:"2.8125vw"}:{ backgroundColor: "#bfb1c4" ,fontSize:"1.5vh",width:"10vh",height:"3.5vh"}} onClick={() => { addToCart(product.slug, qty, product.price, product.title,cartheight, cartwidth, product.variants[selectedcolor].color, motor ,product.variants[selectedcolor].img) }} className="flex items-center   border-0 md:py-2 py-1 w-28 justify-center focus:outline-none text-white  ">Add to cart</button>
              </div>
            </div>
            </div>
            </div>


            <div style={sw?{fontSize:"1.1vw"}:{fontSize:"1.1vh"}} className='flex flex-col'>

              <Disclosure className="">
                {({ open }) => (
                  <>
                    <Disclosure.Button style={sw?{padding:"0vw 2.1875vw"}:{padding:"0vw 2.1875vh"}} className="flex w-full items-center bg-white px-7  text-left text-sm font-medium   focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <p style={sw?{backgroundColor: "#bfb1c4",height:"1vw",width:"2.75vw",marginLeft:"-3.2vw"}:{backgroundColor: "#bfb1c4",height:"1vh",width:"2.75vh",marginLeft:"-3.2vh"}} className='w-8 -ml-10 absolute h-3'></p>
                     <div style={sw?{fontSize:"1.25vw",padding:"1.875vw 0vw"}:{fontSize:"1.5vh",padding:"1.875vh 0vw"}} className='flex justify-between w-full py-6'>
                      <span  >Product measurement</span>
                      <IoIosArrowDown
                        className={`${open ? 'rotate-180 transform' : ''
                          }  `}
                      />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel style={sw?{padding:"1.25vw 2.25vw 1.875vw "}:{padding:"1.25vh 2.25vh 1.875vh "}} className="px-7  pt-4 pb-6  bg-white text-gray-900">
                      <h1>Provide exact measurements. we will deduct for inside mount.
                      </h1>
                      <div className="flex my-10 flex-col md:flex-row mx-auto justify-center space-y-4 md:space-y-0 md:space-x-10 ">

                        <div className='flex items-center'><span className="">Height</span>

                          <select id='h' onChange={(e) => selecth(e)} style={sw?{fontFamily:"'montstrrat,sans-serif",height:"3.45vw",width:"6.25vw",marginLeft:"0.625vw",paddingLeft:"0.625vw",fontSize:"1.25vw"}:{fontFamily:"'montstrrat,sans-serif",height:"3.45vh",width:"6.25vh",marginLeft:"0.625vh",paddingLeft:"0.625vh",fontSize:"1.25vh"}} className='w-20 border ml-2 pl-2   h-11'>
                            {/* {product.height.map((i) => { return <option className='text-lg font-semibold ' key={i}>{i}  </option> })} */}
                            {height.map((i) => { return <option className=' ' key={i}>{i}  </option> })}
                          </select>


                          <select id='exactheight' onChange={(e) => selecteh(e)} style={sw?{fontFamily:"'montstrrat,sans-serif",height:"3.45vw",width:"6.25vw",marginLeft:"0.625vw",paddingLeft:"0.625vw",fontSize:"1.25vw"}:{fontFamily:"'montstrrat,sans-serif",height:"3.45vh",width:"6.25vh",marginLeft:"0.625vh",paddingLeft:"0.625vh",fontSize:"1.25vh"}} className='w-20 h-11  border ml-2 pl-2   '>
                            {/* {product.height.map((i) => { return <option className=' ' key={i}>{i}  </option> })} */}
                            {exactHeightOrWidth.map((i) => { return <option className=' ' key={i}>{i}  &quot;</option> })}
                          </select>
                        </div>


                        <div className='flex items-center'><span className="">Width</span>

                          <select id='w' onChange={(e) => selectw(e)} style={sw?{fontFamily:"'montstrrat,sans-serif",height:"3.45vw",width:"6.25vw",marginLeft:"0.625vw",paddingLeft:"0.625vw",fontSize:"1.25vw"}:{fontFamily:"'montstrrat,sans-serif",height:"3.45vh",width:"6.25vh",marginLeft:"0.625vh",paddingLeft:"0.625vh",fontSize:"1.25vh"}} className='w-20 h-11  border ml-2 pl-2  '>
                            {/* {product.width.map((i) => { return <option className='' key={i}>{i}  </option> })} */}
                            {width.map((i) => { return <option className='' key={i}>{i}  </option> })}
                          </select>


                          <select id='exactwidth' onChange={(e) => selectew(e)} style={sw?{fontFamily:"'montstrrat,sans-serif",height:"3.45vw",width:"6.25vw",marginLeft:"0.625vw",paddingLeft:"0.625vw",fontSize:"1.25vw"}:{fontFamily:"'montstrrat,sans-serif",height:"3.45vh",width:"6.25vh",marginLeft:"0.625vh",paddingLeft:"0.625vh",fontSize:"1.25vh"}} className='w-20 h-11 border ml-2 pl-2   '>
                            {/* {product.height.map((i) => { return <option className=' ' key={i}>{i}  </option> })} */}
                            {exactHeightOrWidth.map((i) => { return <option className=' ' key={i}>{i}  &quot;</option> })}
                          </select>
                        </div>

                      </div>
                      <div onClick={measuringguide} className='underline underline-offset-4 cursor-pointer '>Measuring Guide</div>
                      <Dialog style={{ width: "100vw", height: "100vh" }} className="fixed  flex justify-center items-center top-0 bg-black  bg-opacity-60 z-50" open={isenable} onClose={() => setisenable(false)}>
                        <Dialog.Panel > 
                          <MdOutlineCancel style={sw?{top:"2vw",right:"10vw",fontSize:"2vw"}:{top:"16vh",right:"6vh",fontSize:"4vh"}} onClick={measuringguide} className=" text-white md:text-black cursor-pointer  absolute" />
                          <div style={sw?{padding:"1vw 8vw"}:{padding:"0vw 0vw"}} className='flex flex-col md:px-40 md:py-10 '>
                          <img className='' alt='img' src='/Untitled-3.png'></img>
                          <div className='bg-white p-8 grid md:grid-flow-col grid-flow-row'>
                            <h1 style={sw?{fontFamily: "'Fjalla One', sans-serif",fontSize:"1.6vw",paddingRight:'1.3vw'}:{fontFamily: "'Fjalla One', sans-serif",fontSize:"1.6vh"}} className='md:pr-4 text-xl 2xl:text-4xl pb-4 md:pb-0 text-gray-700 md:border-r-2'>HOW TO MEASURE</h1>
                            <p style={sw?{fontFamily: "'Roboto Slab', serif",fontSize:"1.1vw",paddingLeft:"1.3vw"}:{fontFamily: "'Roboto Slab', serif",fontSize:"1.1vh"}} className='text-sm 2xl:text-lg md:pl-4'>Measure the Width(side to side) between the two outermost points of the window frame, or the area which is to be covered.
                              Measure the height(top to bottom) of the outermost point of the frame to the window sill of the bottom of the frame, or from where ever you want your blind to begin to where you want it to end.</p>
                          </div>
                          </div>
                        </Dialog.Panel>
                      </Dialog>

                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" style={sw?{fontSize:"1.25vw"}:{fontSize:"1.25vh"}}>
                {({ open }) => (
                  <>
                    <Disclosure.Button style={sw?{padding:"0vw 2.1875vw"}:{padding:"0vw 2.1875vh"}} className="flex w-full justify-between  bg-white px-7 text-left text-sm font-medium  items-center focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <p style={sw?{backgroundColor: "#bfb1c4",height:"1vw",width:"2.75vw",marginLeft:"-3.2vw"}:{backgroundColor: "#bfb1c4",height:"1vh",width:"2.75vh",marginLeft:"-3.2vh"}} className='w-8 -ml-10 absolute h-3'></p>
                    <div style={sw?{fontSize:"1.25vw",padding:"1.875vw 0vw"}:{fontSize:"1.5vh",padding:"1.875vh 0vw"}} className='flex justify-between border-t-2 w-full py-6'>
                      <span  >Select Mechanism</span>
                      <IoIosArrowDown
                        className={`${open ? 'rotate-180 transform' : ''
                          } `}
                      />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel style={sw?{padding:"0.625vw 2.1875vw 2.5vw"}:{padding:"0.625vh 2.1875vh 2.5vh"}} className=" pt-2 pb-8  text-gray-500 flex flex-col px-7 bg-white">
                      <div className='flex'> <button  id="Manual"  onClick={(e)=>mechanismtype(e)} style={sw?{borderColor:"#bfb1c4",height:"3.4375vw",width:"10vw"}:{borderColor:"#bfb1c4",height:"3.4375vh",width:"10vh"}} className='items-center btn  border-2  py-2 w-32 flex  justify-center '>Manual</button>
                      <button onClick={(e)=>mechanismtype(e)} id="Motorized" style={sw?{borderColor:"#bfb1c4",height:"3.4375vw",width:"10vw",marginLeft:"1.875vw"}:{borderColor:"#bfb1c4",height:"3.4375vh",width:"10vh",marginLeft:"1.875vh"}} className='items-center btn  border-2 ml-6 py-2 w-32 flex justify-center'>Motorized</button></div>
                      {withmotor && <div style={sw?{marginTop:"1vw"}:{marginTop:"1vh"}}>Suggested Motors</div>}
                      <div className='md:max-h-[31vw] w-full max-h-36 overflow-y-auto overflow-x-hidden'>
                        {withmotor && Object.keys(recomendedmotors).map((m)=>{return <><div   id={recomendedmotors[m].slug}  style={sw?{fontFamily:"'lato',san-serif",borderColor:"#bfb1c4",height:"17vw",marginRight:"1.875vw",marginTop:"2vw",padding:"0.5vw"}:{fontFamily:"'lato',san-serif",borderColor:"#bfb1c4",height:"17vh",marginRight:"1.875vh",marginTop:"2vh",padding:"0.5vh"}} className='flex btn w-full border-2  ' key={m}>
                        <img style={sw?{width:"10vw"}:{width:"10vh"}} src={recomendedmotors[m].poster}></img>
                        <div  className='md:ml-[1vw]  ml-[1vh]'>
                        <span style={sw?{margin:"1vw 0vw",fontFamily: "'Fjalla One', sans-serif"}:{margin:"1vh 0vh",fontFamily: "'Fjalla One', sans-serif"}} className="h-full text-[1.8vh] md:text-[1.5vw] w-full underline-offset-8 underline">{recomendedmotors[m].title}</span>
                        <div className='overflow-y-scroll scrollbar-hide h-[8vw]  m-[1vw]'>{Object.keys(recomendedmotors[m].features).map((p)=>{return <li key={recomendedmotors[m].features[p]} className='text-[1vh] md:mt-[1vw] mt-[1vh] md:text-[1vw]' style={{fontFamily:"'poppins',sans-seif"}}>{recomendedmotors[m].features[p]}</li>})}</div>
                        <div className='flex justify-between border-t py-[1vw] border-slate-600'>
                      <a className='md:text-[1vw] underline hover:text-[#bfb1c4]' href={`/motors/${recomendedmotors[m]._id}`}>Learn More</a>
                        
                        <span className="  "><span className='text-[1vh] md:text-[1vw]'>Price :</span> ₹ {recomendedmotors[m].price}
                        
                        </span>
                        </div>
                        </div>
                        </div>

                        <button  id={recomendedmotors[m]}  style={sw?{ backgroundColor: "#bfb1c4" ,fontSize:"1.1vw",width:"8.75vw",height:"2.8125vw",margin:"1vw 0vw"}:{ backgroundColor: "#bfb1c4" ,fontSize:"1.5vh",width:"10vh",height:"3.5vh",margin:"1vh 0vw"}} onClick={()=>{ addToCart(recomendedmotors[m].title,1,recomendedmotors[m].price,recomendedmotors[m].title,null,null,null,null,recomendedmotors[m].poster) }} className="flex items-center float-right  border-0 md:py-2 py-1 w-28 justify-center focus:outline-none text-white  ">Add to cart</button>
                        </>})}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

            </div>

           
            </div>
            </div>

        <div style={sw?{fontFamily: "'Roboto Slab', serif",marginTop:"4.375vw",padding:"0vw 3.75vw"}:{fontFamily: "'Roboto Slab', serif",marginTop:"4.375vh",padding:"0vw 3.5vh"}} className='grid grid-flow-row mb-20 md:mb-0 px-12 mt-14'>
          <div className='flex flex-col md:flex-row'>
            
            <div id='details' className='w-full md:w-8/12  text-left 'style={sw?{fontSize:"1.25vw",marginRight:"5vw"}:{fontSize:"2vh"}}>
            <div style={sw?{backgroundColor: "#bfb1c4",height:"1vw",width:"2.75vw",marginBottom:"0.75vw"}:{backgroundColor: "#bfb1c4",height:"1vh",width:"2.75vh",marginBottom:"0.75vh"}} className='w-10 mb-2  h-3'></div><span  style={{fontFamily: "'poppins', sans-serif"}}>Care & Cleaning</span>
              <p className="leading-relaxed   mt-7 " style={sw?{fontSize:"1.1vw",marginTop:"2.188vw"}:{fontSize:"1.5vh",marginTop:"2.188vh"}}>{product.care}</p>
            </div>

            <div className='w-full md:w-11/12 mt-6 md:mt-0 text-left 'style={sw?{fontSize:"1.25vw"}:{fontSize:"2vh"}}>
            <p style={sw?{backgroundColor: "#bfb1c4",height:"1vw",width:"2.75vw",marginBottom:"0.75vw"}:{backgroundColor: "#bfb1c4",height:"1vh",width:"2.75vh",marginBottom:"0.75vh"}} className='w-10 h-3 mb-2'></p><span style={{fontFamily: "'poppins', sans-serif"}}> Product Details</span>
              <p className="leading-relaxed   mt-7  " style={sw?{fontSize:"1.1vw",marginTop:"2.188vw"}:{fontSize:"1.5vh",marginTop:"2.188vh"}}>{product.desc}</p>
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
  let product = await Product.findOne({ title: context.query.slug })
  let m1 = await Motor.find({ subcategory:{$in:["DM45-RQ-6/28" ,"DM45-SL-10/26"]}})
  let m2 = await Motor.find({ subcategory:{$in:["DM35-RL-6/28","DM35-FY-6/28","DM35-SL-6/30"]} })
  let m3 = await Motor.find({ subcategory:"DM35-FY-6/28" })
  let m4 = await Motor.find({ subcategory:"DM35-SL-6/30" })


  return {
    props: { product: JSON.parse(JSON.stringify(product)),m1:JSON.parse(JSON.stringify(m1)),m2:JSON.parse(JSON.stringify(m2)),m3:JSON.parse(JSON.stringify(m3)),m4:JSON.parse(JSON.stringify(m4)) }, // will be passed to the page component as props
  }
}

export default Post