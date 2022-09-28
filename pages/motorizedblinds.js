/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Slide } from 'react-reveal'
import { useRef, useState, useEffect } from 'react';
import  Router  from 'next/router';

const Motorizedblinds = () => {
  const containerRef = useRef(null);
const [sw, setsw] = useState(false);

  useEffect(() => {
    if(screen.width>768){
      setsw(true)
    }
    console.log(Router.asPath)
    if(Router.asPath == "/motorizedblinds/#second"){
      setTimeout(() => {
        containerRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 250);
    }
   
  }, []);
  return (<>
  {!sw && <div style={{backgroundColor:"#bfb1c4"}} className='w-full absolute top-0 h-12'></div>}
     {sw &&<div style={{height:"6.2vw",backgroundClip:""}} className='absolute border-b  border-black  top-0 w-full  '></div>}
    <div style={sw?{padding:"6.275vw 7.5vw 3.125vw",marginTop:"4vw"}:{padding:"6.275vh 7.5vw 3.125vh",marginTop:"4vh"}} className='px-24 pt-20 pb-10'>
      {sw && <Slide bottom> <div ><img style={sw?{height:"37.1vw",width:"83.75vw"}:{height:"45vw",width:"83.75vh"}} alt='img' src='/IMage for motorized blinds.png'></img></div></Slide>}

      <div style={sw?{ fontFamily: "'Fjalla One', sans-serif",fontSize:"3.75vw",marginTop:"4vw",marginBottom:"4vw" }:{ fontFamily: "'Fjalla One', sans-serif",fontSize:"3.75vh",marginTop:"4vh",marginBottom:"4vh" }} className='text-center text-5xl  '>MOTORIZED BLINDS</div>

      <Slide left><div style={sw?{marginBottom:"4vw", height: "61vh", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" }:{marginBottom:"4vh", height: "70vw", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" }} className="flex ">
        {sw && <img src='/2016-nan-east-bay-playroom.jpeg' className='h-full w-4/6' alt='img'></img>}
        <div style={sw?{padding:"1.56vw"}:{padding:"1.56vh"}} className='p-5 space-y-8'>
          <h1 style={sw?{ fontFamily: "'Fjalla One', sans-serif" ,fontSize:"2.35vw",marginTop:"2.5vw",lineHeight:"2.5vw "}:{ fontFamily: "'Fjalla One', sans-serif" ,fontSize:"2.35vh",marginTop:"1vh",lineHeight:"2.5vh "}} className='text-3xl scale-y-125 mt-8  text-gray-800 uppercase'>Cordless Design Offers Maximum<br></br> Safety for Children and Pets</h1>
          <p style={sw?{fontSize:"1.1vw",marginTop:"2.5vw",paddingRight:"2.5vw",lineHeight:"1.6vw "}:{fontSize:"1.2vh",marginTop:"1.5vh",paddingRight:"2.5vh",lineHeight:"1.8vh "}} className='text-sm leading-relaxed pr-8 '>Window coverings with corded systems are safety hazard for young children as well as pets. Cords pose as a suffocation hazard when children become entangled in them, particularly corded systems featuring a loop. Pets are also at risk of injury from corded window blinds in similar ways to young children.
            Motorized window blinds are a cordless system which makes them one of the safest window treatments options for parents and pet owners.
          </p>
        </div>
      </div></Slide>

      <Slide right><div style={sw?{marginBottom:"4vw", height: "61vh", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" }:{marginBottom:"4vh", height: "70vw", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" }} className="flex">
        <div style={sw?{padding:"1.56vw"}:{padding:"1.56vh"}} className='p-5 space-y-8'>
          <h1 style={sw?{ fontFamily: "'Fjalla One', sans-serif" ,fontSize:"2.35vw",marginTop:"2.5vw",lineHeight:"2.5vw "}:{ fontFamily: "'Fjalla One', sans-serif" ,fontSize:"2.35vh",marginTop:"1vh",lineHeight:"2.5vh "}} className='text-3xl scale-y-125 mt-8  text-gray-800 uppercase'>Automation Settings Adds Security When You Are Away from Home</h1>
          <p style={sw?{fontSize:"1.1vw",marginTop:"2.5vw",paddingRight:"2.5vw",lineHeight:"1.6vw "}:{fontSize:"1.2vh",marginTop:"1.5vh",paddingRight:"2.5vh",lineHeight:"1.8vh "}} className='text-sm leading-relaxed pr-8 '>Since motorized window blinds can operate automatically throughout the day they will make it seem like someone is home, even if you are thousands of miles away. Motorized window blinds are more of a deterrent to potential thieves than any other window covering, especially when coupled with an automated smart home lighting system.
            Improves Your Sleep Quality and Helps You Wake Up Naturally
            Selecting motorized window blinds with maximum light-blocking opacity will help your bedroom be as dark as possible, to improve quality of sleep.
            Setting your motorized window blinds to gradually open in the morning will wake you up slowly and naturally rather than abruptly.

          </p>
        </div>
        {sw && <img src='/pic-1.jpg' className='h-full w-5/12' alt='img'></img>}
      </div></Slide>

      <Slide left><div style={sw?{marginBottom:"4vw", height: "61vh", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" }:{marginBottom:"4vh", height: "70vw", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" }} className="flex">
        {sw && <img src='/1-03.jpg' className='h-full w-5/12' alt='img'></img>}
        <div style={sw?{padding:"1.56vw"}:{padding:"1.56vh"}} className='p-5 space-y-8'>
          <h1 style={sw?{ fontFamily: "'Fjalla One', sans-serif" ,fontSize:"2.35vw",marginTop:"2.5vw",lineHeight:"2.5vw "}:{ fontFamily: "'Fjalla One', sans-serif" ,fontSize:"2.35vh",marginTop:"1vh",lineHeight:"2.5vh "}} className='text-3xl scale-y-125 mt-8  text-gray-800 uppercase'>Varied Control Options Include Remotes, and Apps</h1>
          <p style={sw?{fontSize:"1.1vw",marginTop:"2.5vw",paddingRight:"2.5vw",lineHeight:"1.6vw "}:{fontSize:"1.2vh",marginTop:"1.5vh",paddingRight:"2.5vh",lineHeight:"1.8vh "}} className='text-sm leading-relaxed pr-8 '>You can control your motorized blinds with either a wall-mounted wireless switch, a remote control or an app. It is wise to have a wall-mounted switch or remote on hand so anyone can adjust the motorized window blind when needed.
            When you are on the couch watching a movie or reading a book, the last thing you want to do is get up to adjust your blinds. Motorized window blinds can either be set to close during the timeframe when the sun causes a glare on your TV or with the touch of a button.
            There are different apps you can use to control your motorized blinds, including Connector, an app specifically designed for the purpose ,such as Google Assistant or Amazon Alexa .

          </p>
        </div>
      </div>
      </Slide>

      <div ref={containerRef} id='second'  className='space-x-6 space-y-6 text-center' style={sw?{ fontFamily: "'Roboto Slab', serif" ,paddingTop:"3.125vw",fontSize:"1.25vw"}:{ fontFamily: "'Roboto Slab', serif" ,paddingTop:"3.125vh",fontSize:"1.25vh"}} >
        <h1 style={sw?{ fontFamily: "'Fjalla One', sans-serif",fontSize:"3.75vw" }:{ fontFamily: "'Fjalla One', sans-serif",fontSize:"3.75vh" }} className='text-center text-5xl  '>HOW TO CHOOSE YOUR BLINDS ?</h1>
        <p style={sw?{margin:"1.875vw 0vw"}:{margin:"1.875vh 0vw"}} >Selecting window treatments for a specific room is all about assessing the way the space functions. </p>
        <a href='#living' className='underline underline-offset-4'>LIVING AREA</a>
        <a href='#bedroom' className='underline underline-offset-4'>BEDROOM</a>
        <a href='#kitchen' className='underline underline-offset-4'>KITCHEN</a>
        <a href='#bathroom' className='underline underline-offset-4'>BATHROOM</a>
      </div>

      <Slide left> <div id="living" style={sw?{marginBottom:"4vw", height: "61vh", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" ,marginTop:"4vw"}:{marginBottom:"4vh", height: "65vw", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" ,marginTop:"4vh"}} className="flex">
        {sw && <img src='/pexels-max-vakhtbovych-7533758.jpg' className='h-full w-3/6' alt='img'></img>}
        <div className='p-5 space-y-10'>
          <h1 style={sw?{ fontFamily: "'Fjalla One', sans-serif",fontSize:"2.35vw",marginTop:"2.5vw",lineHeight:"2.5vw " }:{ fontFamily: "'Fjalla One', sans-serif",fontSize:"2.35vh",marginTop:"1vh",lineHeight:"2.5vh " }} className='text-3xl scale-y-125 mt-8  text-gray-800 uppercase'>Living Area</h1>
          <p style={sw?{fontSize:"1.1vw",marginTop:"2.5vw",paddingRight:"2.5vw",lineHeight:"1.6vw "}:{fontSize:"1.2vh",marginTop:"1.5vh",paddingRight:"2.5vh",lineHeight:"1.8vh "}} className='text-sm leading-relaxed pr-8 '>When picking the best window treatment for the living or dining room, you have more flexibility than, say, the bathroom or kitchen, and much of it rides on personal preferences. If you’re looking to keep things modern and minimalist, shades are probably the way to go. Sheer curtains will invite an almost ethereal element, while heavy, layered drapes will run more traditional. Triple shade blinds & honeycomb blinds give that hotel like look to your living area. Can’t decide? A combination of curtains and shades are always welcome.

          </p>
        </div>
      </div></Slide>
      <Slide right><div id="bedroom" style={sw?{marginBottom:"4vw", height: "61vh", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" }:{marginBottom:"4vh", height: "65vw", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" }} className="flex">
        <div className='p-5 space-y-10'>
          <h1 style={sw?{ fontFamily: "'Fjalla One', sans-serif" ,fontSize:"2.35vw",marginTop:"2.5vw",lineHeight:"2.5vw "}:{ fontFamily: "'Fjalla One', sans-serif" ,fontSize:"2.35vh",marginTop:"1vh",lineHeight:"2.5vh "}} className='text-3xl scale-y-125 mt-8  text-gray-800 uppercase'>Bedroom</h1>
          <p style={sw?{fontSize:"1.1vw",marginTop:"2.5vw",paddingRight:"2.5vw",lineHeight:"1.6vw "}:{fontSize:"1.2vh",marginTop:"1.5vh",paddingRight:"2.5vh",lineHeight:"1.8vh "}} className='text-sm leading-relaxed pr-8 '>Window treatments for the bedroom are usually poised to serve more than an aesthetic purpose. From blackout shades to layered drapes, the functionality here is all about creating a soothing ambiance for a restful night’s (and morning’s!) sleep.
            “For those who like their bedroom dark, the best option is a blackout lining.” If you don’t mind a little sun filtering in, consider sheer curtains or shades.
            If your room has an office space and a window over it, one could go with wooden venetian blinds to make your work from home more office like.

          </p>
        </div>
        {sw && <img src='/pexels-eren-li-7241676.jpg' className='h-full w-3/6' alt='img'></img>}
      </div></Slide>
      <Slide left>
        <div id="kitchen" style={sw?{marginBottom:"4vw", height: "61vh", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" }:{marginBottom:"4vh", height: "65vw", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" }} className="flex">
          {sw && <img src='/pexels-max-vakhtbovych-7614610 (1).jpg' className='h-full w-3/6' alt='img'></img>}
          <div className='p-5 space-y-10'>
            <h1 style={sw?{ fontFamily: "'Fjalla One', sans-serif" ,fontSize:"2.35vw",marginTop:"2.5vw",lineHeight:"2.5vw "}:{ fontFamily: "'Fjalla One', sans-serif" ,fontSize:"2.35vh",marginTop:"1vh",lineHeight:"2.5vh "}} className='text-3xl scale-y-125 mt-8  text-gray-800 uppercase'>Kitchen</h1>
            <p style={sw?{fontSize:"1.1vw",marginTop:"2.5vw",paddingRight:"2.5vw",lineHeight:"1.6vw "}:{fontSize:"1.2vh",marginTop:"1.5vh",paddingRight:"2.5vh",lineHeight:"1.8vh "}} className='text-sm leading-relaxed pr-8 '>Choosing the best window treatment for the kitchen could entail a variety of shapes and sizes. You can have a floor-to-ceiling window on one end of the room and a spanning picture window above the sink. Making sure your picks visually align will make quite an impact. Durability is yet another important consideration.
              In a kitchen, you are typically looking at a Roman or woven shade. It’s rare that you would need curtains, since most windows are above a sink or counter. Blinds are a perfect addition because they add a new texture and softness to a space commonly filled with hard lines and surfaces.

            </p>
          </div>
        </div></Slide>
      <Slide right>
        <div id="bathroom" style={sw?{marginBottom:"4vw", height: "61vh", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" }:{marginBottom:"4vh", height: "65vw", backgroundColor: "#ebeaeb", fontFamily: "'Roboto Slab', serif" }} className="flex">
          <div className='p-5 space-y-10'>
            <h1 style={sw?{ fontFamily: "'Fjalla One', sans-serif",fontSize:"2.35vw",marginTop:"2.5vw",lineHeight:"2.5vw " }:{ fontFamily: "'Fjalla One', sans-serif",fontSize:"2.35vh",marginTop:"1vh",lineHeight:"2.5vh " }} className='text-3xl scale-y-125 mt-8  text-gray-800 uppercase'>Bathroom</h1>
            <p style={sw?{fontSize:"1.1vw",marginTop:"2.5vw",paddingRight:"2.5vw",lineHeight:"1.6vw "}:{fontSize:"1.2vh",marginTop:"1.5vh",paddingRight:"2.5vh",lineHeight:"1.8vh "}} className='text-sm leading-relaxed pr-8 '>Bathroom windows are a fickle sort. There are those that span from wall to wall, the dreamy picture window set behind a freestanding tub, or the narrow strips high up on the wall which, let’s face it, are better than nothing. Anything faux wood or water will be the best window blinds for the bathroom.

              Linen or cotton blinds can work well in a bathroom but even better are woven wood ones made from bamboo or natural materials. It brings an element of the outside in and creates a spa-like experience in your bathroom.

            </p>
          </div>
          {sw && <img src='/pexels-curtis-adams-12119219.jpg' className='h-full w-3/6' alt='img'></img>}
        </div></Slide>

    </div>
  </>
  )
}

export default Motorizedblinds