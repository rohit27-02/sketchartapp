/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { CgTrashEmpty } from 'react-icons/cg';
import { MdOutlinePayment } from "react-icons/md"
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import Router from 'next/router';
import CryptoJS from 'crypto-js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Checkout = ({ cart, removeFromCart,clearCart, addToCart, subTotal }) => {
  const [sw, setsw] = useState();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [address, setaddress] = useState();
  const [phone, setphone] = useState();
  const [pin, setpin] = useState();
  const [payment, setpayment] = useState(false);

  const [user, setuser] = useState({});



  function handleChange(e) {
    if (e.target.id == "name") {
      setname(e.target.value)
    }
    else if (e.target.id == "email") {
      setemail(e.target.value)
    }
    else if (e.target.id == "phone") {
      setphone(e.target.value)
    }
    else if (e.target.id == "state") {
      setstate(e.target.value)
    }
    else if (e.target.id == "pin") {
      setpin(e.target.value)
    }
    else if (e.target.id == "city") {
      setcity(e.target.value)
    }
    else if (e.target.id == "address") {
      setaddress(e.target.value)
    }
  }



  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const posttransaction = async (payinfo) => {
    const response = await fetch("/api/postpayment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(payinfo)
    })
    console.log(response)
    if (response.ok) {
      const status = "done"
      const cart2 = JSON.parse(localStorage.getItem("cart"))
      pushorder(payinfo,cart2,status)
      console.log(cart2)
     
    }
  }
  
  const pushorder = async (payinfo,product,status)=>{
    const order={name,email,phone,payinfo,address,status,subTotal,pin,product}
    const addorder = await fetch("/api/addorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(order)
    })
      toast.success('Your order has been placed', {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      localStorage.removeItem("cart")
    clearCart()
    setTimeout(() => {
      Router.push(`/order/${payinfo.orderid}`)
    }, 2000);
  }

  const makePayment = async (event) => {

    event.preventDefault()
    setpayment(true)
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify(subTotal)
    }).then((t) =>
      t.json()
    );
    setpayment(false)



    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Sketch Art",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Complete the payment",
      image: "/logo.jpeg",
      handler: function (response) {
        console.log(response)
        const paymentinfo = { payid: response.razorpay_payment_id, orderid: response.razorpay_order_id, sign: response.razorpay_signature }
       
        posttransaction(paymentinfo);

      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      "theme": { "color": "#bfb1c4" }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    if (screen.width > 768) {
      setsw(true)
    }
    if (localStorage.getItem("token")) {
      var decoded = jwt_decode(localStorage.getItem("token"));
      setuser(decoded)
    }
    else {
      Router.push("/")
    }
  
  }, []);

  useEffect(() => {
    setemail(user.email)
    setname(user.name)

  }, [user]);

  useEffect(() => {
    if (subTotal == 0) {
      document.getElementById("paynow").classList.add("hidden")
    }

  }, [subTotal]);



  return (<>
    {!sw && <div style={{ backgroundColor: "#bfb1c4" }} className='w-full absolute top-0 h-12'></div>}
    {sw && <div style={{ height: "6.2vw" }} className='absolute border-b  border-black  top-0 w-full  '></div>}
    <form onSubmit={makePayment} style={{ fontFamily: "'Roboto Slab', serif" }} className=' m-auto'>
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

      <h1 style={sw ? { fontFamily: "'Fjalla One', sans-serif", letterSpacing: 1.5, paddingTop: "12vw", paddingBottom: "6vw", fontSize: "3vw" } : { fontFamily: "'Fjalla One', sans-serif", letterSpacing: 1.5, paddingTop: "12vh", paddingBottom: "6vh", fontSize: "3vh" }} className='font-bold text-xl md:text-4xl text-center text-gray-800  '>CHECKOUT</h1>
      <div style={sw ? { fontSize: "1.1vw", marginBottom: "2vw" } : { fontSize: "1.5vh", marginBottom: "2vh" }}>
        <h2 style={sw ? { fontSize: "1.5vw", marginBottom: "2vw", marginLeft: "16vw" } : { fontSize: "2vh", marginBottom: "2vh" }} className='font-bold text-xl md:mx-52 mx-8'>1. Contact Details</h2>
        <div style={sw ? { width: "66vw" } : { width: "48vh" }} className="flex lg:w-2/3 md:flex-row  w-full flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex flex-col w-full ">
            <label forhtml="full-name" className="leading-7  text-gray-600">Full Name</label>
            <input required value={name} onChange={(e) => { handleChange(e) }} style={sw ? { width: "32.5vw", height: "3.3vw", padding: "0.3vw 0.9vw", margin: "1vw 0vw" } : { width: "100%", height: "4.5vh", padding: "0.3vh 0.9vh" }} type="text" id="name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative flex-grow flex flex-col w-full">
            <label forhtml="email" className="leading-7  text-gray-600">Email</label>
            <input required value={email} onChange={(e) => { handleChange(e) }} style={sw ? { width: "32.5vw", height: "3.3vw", padding: "0.3vw 0.9vw", margin: "1vw 0vw" } : { width: "100%", height: "4.5vh", padding: "0.3vh 0.9vh" }} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div style={sw ? { width: "66vw" } : { width: "48vh" }} className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow flex flex-col w-full">
            <label forhtml="address" className="leading-7  text-gray-600">Address</label>
            <textarea required value={address} onChange={(e) => handleChange(e)} style={sw ? { width: "66.2vw", height: "7vw", padding: "0.3vw 0.9vw", margin: "1vw 0vw" } : { width: "100%", height: "7vh", padding: "0.3vh 0.9vh" }} type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div style={sw ? { width: "66vw" } : { width: "48vh" }} className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow flex flex-col w-full">
            <label forhtml="phone" className="leading-7  text-gray-600">Phone number</label>
            <input required value={phone} onChange={(e) => { handleChange(e) }} style={sw ? { width: "32.5vw", height: "3.3vw", padding: "0.3vw 0.9vw", margin: "1vw 0vw" } : { width: "100%", height: "4.5vh", padding: "0.3vh 0.9vh" }} type="phone" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

          <div className="relative flex-grow flex flex-col w-full">
            <label forhtml="pincode" className="leading-7  text-gray-600">Pincode</label>
            <input required value={pin} onChange={(e) => { handleChange(e) }} style={sw ? { width: "32.5vw", height: "3.3vw", padding: "0.3vw 0.9vw", margin: "1vw 0vw" } : { width: "100%", height: "4.5vh", padding: "0.3vh 0.9vh" }} type="number" id="pin" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>

        </div>
      </div>
      <div>
        <h2 style={sw ? { fontSize: "1.5vw", marginBottom: "2vw", marginLeft: "16vw" } : { fontSize: "2vh", marginBottom: "2vh" }} className='font-bold text-xl md:mx-52 md:py-10 py-6 mx-8'>2. Review Cart</h2>
        <div style={sw ? { margin: "3vw 17vw", fontSize: "1.3vw" } : { margin: "1vw 6.5vw", fontSize: "1.5vh" }} className='mx-12 md:mx-56 my-3 '>
          <ol className='list-decimal font-semibold '>
            {Object.keys(cart).length == 0 && <div>
              No items in the cart 😭
            </div>}
            <div className='w-full'>

              {Object.keys(cart).map((k) => {
                return <li key={k} className='flex flex-row justify-between w-full items-center my-4'>
                  <span style={sw ? { width: "20vw" } : { width: "20vh" }} className='w-52'> <div className='mx-4 flex flex-col '>
                    <span><span className='text-gray-600'> style :  </span>{cart[k].name}</span>
                    <span><span className='text-gray-600'> width :  </span>{cart[k].width} meters</span>
                    <span><span className='text-gray-600'> height : </span> {cart[k].height} meters</span>
                    <span><span className='text-gray-600'> color :  </span>{cart[k].variant}</span>
                  </div>
                  </span>

                  <span>Qty : {cart[k].qty}</span>
                  <CgTrashEmpty style={sw ? { fontSize: "2vw" } : { fontSize: "2vh" }} className='cursor-pointer' onClick={() => { removeFromCart(cart[k].itemCode, cart[k].height, cart[k].width, cart[k].variant) }} />

                  <span><img alt='product' style={sw ? { height: "12vw" } : { height: "12vh" }} src={cart[k].img}></img></span></li>


              })}    </div>
          </ol>
          <div style={sw ? { fontSize: "2vw", marginTop: "3vw" } : { fontSize: "2vh", marginTop: "3vh" }} className='font-bold'>Total : ₹ {subTotal}</div>
        </div>

        {payment ? <img className='h-[7vh] ml-[16vh] md:h-[7vw] md:ml-[16vw]' src='/334-loader-5 (1).webp'></img> : <input id='paynow' className='cursor-pointer bg-[#bfb1c4] text-white md:text-[1.4vw] text-[1.4vh] md:py-[0.625vw] md:px-[1.875vw] md:ml-[16vw] ml-[9vw] py-[0.625vh] px-[1.875vh]' value={"Pay now"} type={'submit'} />}
      </div>
    </form>
  </>
  )
}


export default Checkout