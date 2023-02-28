import React from 'react'
import {BsDashCircleDotted, BsPlusCircleDotted,BsFillCaretRightFill,BsFillCaretUpFill} from "react-icons/bs";
import { useState } from 'react';
import InvestorProspectus from '../components/investorProspectus';


  const data =[
    {
      Question:"Q1 - Can I invest in your funds anonymously?",
      Ans:` No. Investing in any qualified opportunity zone fund will require you to apply by completing a subscription agreement. This document will ask for a range of personal information. 
    
      We are unable to receive investments anonymously. Our qualified opportunity fund products provide accredited investors with a safe, legal way to convert capital gains from the sale of stocks, bonds, real estate and cryptocurrency into real-world assets.
    
      
      If you are a privacy-conscious person whose capital gains have primarily come through the sale of digital currencies, the investment products on liquidoz.com are likely not suitable for you.  `
    },
    {
      Question:"Q2 - How do you receive my funds?",
      Ans:"Shares in our investment vehicles can only be purchased using USD via a wire transfer. We are unable to accept cryptocurrency for investment purposes."
    },
    {
        Question: "Q3 - What return on investment (ROI) do you provide?",
        Ans: `Returns at GLOBAL FINANCE are calculated in three ways.
      
          Tax savings – provided yearly on Form 4797, Part 1.
          Income – paid quarterly proportional to fund assets.
          Asset appreciation – calculated yearly based on tax appraisals.
          
          We aim to provide the best possible returns to our fund partners by selecting real estate assets with the greatest potential for income and appreciation.`
      },
    {
      Question:"Q4 - Can I cash out at any time?",
      Ans:"Yes, with several caveats. The structure of our QOFs allows fund members to exit their positions with some notice. However, exiting will invalidate the tax savings of your qualified opportunity zone investments, so it is not recommended. Please contact our team to discuss how this process works."
    },
    {
      Question:"Are OZ Investments Tax-free?",
      Ans:"No, they are not. Based on the current regulations, an investment in an OZ Fund like our QOF I and QOF II is tax deferred. You will still be responsible for paying the original capital gains taxes at the end of 2026. However, all appreciation in the fund can be tax free if the investment is held for 10 years."
    },
   
  ]
  



const FAQ = () => {
  const [clicked,Setclick]=useState(false)
  const toggle =index =>{
    if(clicked === index){
      //if clicked question is already active ,then close it
      return Setclick(null)
    }
    Setclick(index)
  }
  return (
    <div className="faq">
        <div className="faq-header py-[4em] bg-[rgb(36,32,33)] text-white">
        <h1 className=' '>INVESTMENT FUNDS</h1>
        </div>
        <div className="faq-body flex flex-col gap-[4rem] ">
           
            <div className=' text'>
                   <h1>
            Investing Questions
            </h1> 
                {data.map((item,index)=>(

                  <div className='flex flex-col  justify-center item-start  md:items-center   ' onClick={()=> toggle(index)} key={index}>
                  {/* bg-[#F9FAFB] */}
                    {/* <div style=  {clicked===index ?{scale:"1.04",transition:"1s ease"}:{transition:"1s ease"}} className={`  ${clicked===index?" ": "" } `}  > */}

                  
                    <div  style=  {clicked===index ?{scale:"1.04",transition:"1s ease"}:{transition:"1s ease"}}   className=' w-screen p-5 md:w-[50%] text-left flex flex-col border-b-[0.2px] py-4 border-b-gray-700'>
                 
                      <h1 className='text-left flex gap-4 items-center  font-semibold text-[0.91em] md:text-[1.3em]'><span>
                         {clicked===index ? <BsFillCaretUpFill/> :<BsFillCaretRightFill/> }
                    </span>{item.Question}</h1>
                    
                     {clicked===index ? <div style={{transition:"2s ease"}} className=' text-left  font-100'>{item.Ans}</div>: <p></p>}
                    </div>
                         
                    </div>
                    
    //   </div>
                ))}
            
            </div>
            <InvestorProspectus/>
            </div>
            </div>
           
          
        

  
  )
}

export default FAQ
