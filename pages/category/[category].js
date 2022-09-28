/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Product from '../../models/Product';
import Motor from '../../models/Motor';
import mongoose from "mongoose";
import Router from 'next/router';
import { useState, useEffect } from 'react';

const Tshirts = ({ products, motors }) => {
  const [type, settype] = useState("roller");
  const [sw, setsw] = useState(false);

  useEffect(() => {
    if (screen.width > 768) {
      setsw(true)
    }
    if (Router.asPath == "/category/tubular%20motors/") {
      settype("tm");
    }
    else if (Router.asPath == "/category/battery%20motors/") {
      settype("bm");
    }
    else if (Router.asPath == "/category/wifi%20motors/") {
      settype("wm");
    }
    else if (Router.asPath == "/category/curtain%20motors/") {
      settype("cm");
    }
  }, []);



  return (<div style={sw ? { marginTop: "8vw" } : { marginTop: "8vh" }}>


    {!sw && <div style={{ backgroundColor: "#bfb1c4" }} className='w-full absolute top-0 h-12'></div>}
    {sw && <div style={{ height: "6.2vw", backgroundClip: "" }} className='absolute border-b  border-black  top-0 w-full  '></div>}


    {type == "tm" && <div>{ sw ? <img style={sw?{height:"73vh",marginBottom:"4.5vw",marginTop:"10vw" ,padding:"0vw 7.5vw"}:{height:"50vw",marginTop:"9vh" }} className=' w-full' alt='img' src="/tubular motor.jpg"></img>:"" }
     <div style={{fontFamily: "'Fjalla One', sans-serif"}} className='text-center md:text-[3.5vw] text-[3.5vh] pt-10 uppercase'>Tubular motors</div>
     </div>
   }
    {type == "bm" && <div>{ sw ? <img style={sw?{height:"73vh",marginBottom:"4.5vw",marginTop:"10vw" ,padding:"0vw 7.5vw"}:{height:"50vw",marginTop:"9vh" }} className=' w-full' alt='img' src="/battery motor.jpg"></img>:"" }
     <div style={{fontFamily: "'Fjalla One', sans-serif"}} className='text-center md:text-[3.5vw] text-[3.5vh] pt-10 uppercase'>Battery motors</div>
     </div>
   }
    {type == "wm" && <div>{ sw ? <img style={sw?{height:"73vh",marginBottom:"4.5vw",marginTop:"10vw" ,padding:"0vw 7.5vw"}:{height:"50vw",marginTop:"9vh" }} className=' w-full' alt='img' src="/wifi motors.jpg"></img>:"" }
     <div style={{fontFamily: "'Fjalla One', sans-serif"}} className='text-center md:text-[3.5vw] text-[3.5vh] pt-10 uppercase'>Wifi motors</div>
     </div>
   }
    {type == "cm" && <div>{ sw ? <img style={sw?{height:"73vh",marginBottom:"4.5vw",marginTop:"10vw" ,padding:"0vw 7.5vw"}:{height:"50vw",marginTop:"9vh" }} className=' w-full' alt='img' src="https://sketchartphotos.s3.ap-south-1.amazonaws.com/Curtain+motor.jpg"></img>:"" }
     <div style={{fontFamily: "'Fjalla One', sans-serif"}} className='text-center md:text-[3.5vw] text-[3.5vh] pt-10 uppercase'>Curtain motors</div>
     </div>
   }
  
    <div>
      <section className="text-gray-600 body-font ">
        <div style={{padding:"7vw 1.7vw"}} className=" px-5 py-20  mx-auto ">
          <div className="flex flex-wrap   ">
            {Object.keys(motors).map((item) => {
              return <div style={{marginLeft:"6vw"}} key={motors[item]._id} className="lg:w-1/4 md:w-1/3 p-2 my-[4vw]  w-full shadow-lg cursor-pointer ">
                  <a href={`/motors/${motors[item]._id}`} className="block relative  rounded overflow-hidden">
                  <img alt="ecommerce" className=" w-[36vh] md:h-[36vh] m-auto block" src={motors[item].poster} />

                  <div className="md:mt-[3vw] mt-[3vh]">
                    <h2 className="text-center text-gray-900 title-font text-[2vh] md:text-[1.5vw] font-medium">{motors[item].title}</h2>
                    <p className="md:my-[1vw] my-[1vh] text-[1.75vh] md:text-[1.25vw] text-center">₹{motors[item].price}</p>

                    <button className='mx-auto w-full md:text-[1.25vw] md:px-[2vw] md:py-[1vw] text-[1.75vh] px-[2vh] py-[1vh]  hover:bg-slate-800 hover:text-white btn font-bold '>Shop now</button>
                  </div>
                </a>
              </div>
            })}

          </div>
        </div>
      </section>
    </div>

  </div>
  )
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
console.log(context.query.category)
  let products = await Product.find({ category: context.query.category })
  let motors = await Motor.find({ category: context.query.category })

  return {
    props: { products: JSON.parse(JSON.stringify(products)), motors: JSON.parse(JSON.stringify(motors)) }, // will be passed to the page component as props
  }
}

export default Tshirts