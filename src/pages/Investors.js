import './investor.css'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Investors() {
const navigate=useNavigate() 
const form = useRef();
const [email,setEmail]=useState("")
const[firstName,setFirstName]=useState("")
const[secondName,setSecondName]=useState("")
const [amount, setAmount] = useState("")
const[phoneNumber,setPhoneNumber]=useState("")
const [password,setPassword]=useState("")
const [errrors,seterrors]=useState("")

    const handleSubmit= (e)=>{
        e.preventDefault()
       //  alert()
        
        //  navigate("/white")
        
         // ...
     

         
       
           emailjs.sendForm('service_1nzqupt', 'template_1gilt7h', form.current, 'CMSQKiws59IN5Dh76')
             .then((result) => {
                 console.log(result.text);
                 toast.success('Your prospectus request has been sent !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                 console.log("sent");
             }, (error) => {
                toast.error(`Request Prospectus FAILED!!!!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                 console.log(error.text);
                 console.log("Failed");
             });
       setFirstName("")
       setSecondName("")
       setEmail("")
       setPhoneNumber("")
       setAmount("")
       
       
     }
     




  const handleLogin= (e)=>{
   
    e.preventDefault()
   //  alert()
  
     
   e.preventDefault()
   signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     // Signed in 
     toast.success('login succesful', {
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "dark",
       });
     const user = userCredential.user;
     console.log(user);
     navigate("/white")
     setEmail("")
     setPassword("")
    //  setislogged(true)

    
     // ...
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     seterrors(errorCode)

   });
}
    return (
        <div className='investor-page'>
            
            <h1 className='investor-head'>INVESTORS</h1>
            <div className='w-fit h-fit'>
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
            </div>

            <div className='investor-request'>
                <div className='investor-text'>
                    <p>
                        I have experienced a fantastic product in working with the fund manager and amazing returns. The fund manager
                        is very receptive to any questions and responds quickly. He has a vast understanding and gives his priority to
                        make the fund successful.
                    </p>
                    <p className='investor-bold-text'>- Scott S. star star</p>
                </div>
                <form ref={form} onSubmit={handleSubmit}>

               
                <div className='investor-request-form'>
                    <div className='form-names-container'>
                        <div className='form-name'>
                            <label>First Name</label>
                            <input required name="first_name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} type={'text'} placeholder='Elon' />
                        </div>
                        <div className='form-name'>
                            <label>Second Name</label>
                            <input required value={secondName} name="second_name" onChange={(e)=>setSecondName(e.target.value)} type={'text'} placeholder='Musk' />
                        </div>
                    </div>
                    <label>Email</label>
                    <input required type={'email'} name="user_email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='your@email.com'/>
                    <label>Phone Number</label>
                    <input value={phoneNumber} name="phone_number" required onChange={(e)=>setPhoneNumber(e.target.value)} type={'number'} placeholder='(xxx) xxx-xxx '/>
                    <label>Expected Investment Amount</label>
                    <input value={amount} name="amount" required onChange={(e)=>setAmount(e.target.value)} type={'number'} placeholder='$'/>
                    <label>Are You An Accredited Investor</label>
                    <select className=' border-3px border-red-900'>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <button  type='submit'>Request Prospectus</button>
                </div> 
                </form>
            </div>

            <hr/>
            
            <div className='investor-login'>

                <h3>Current Investors</h3>
                <form onSubmit={handleLogin}>
                    <div className='loginItem'>
                    <label>Email-Address</label>
                    <input required onChange={(e)=>setEmail(e.target.value)} value={email}  type={'text'} />
                </div>
                <div className='loginItem'>
                    <label>Password</label>
                    <input required onChange={(e)=>setPassword(e.target.value)} value={password} className='' type={'password'} />
                </div> 
                <p>Remember Me</p>
                <button >Log In</button>
                <p>Lost your password? </p>
               </form>
               
            </div>
           
                
        </div>
    )
}