import React from 'react'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className="faq">
    <div className="faq-header py-[4em] bg-[rgb(36,32,33)] text-white">
    <h1 className=' '>SecureNet Loan Services</h1>
    </div>
 <h1 className=' font-bold  text-[2.4em] underline my-7 '> Contact Us</h1>
    <div className='  grid grid-cols-1 items-center md:grid-cols-2 w-full  px-[2em] md:px-[5em] py-8   gap-6'>
      <div>
       
        <form className=' flex flex-col  space-y-6' action="">
          <div className=' flex flex-col'>
             <label  className=' text-left '  htmlFor="">Full Name</label>
              <input placeholder=' John Doe' className=' border-black rounded-md p-3 border-2' type="text" />
          </div>
          <div className=' flex flex-col'>
             <label  className=' text-left '  htmlFor="">Email</label>
              <input placeholder='johndoe@mail.com' className=' border-black rounded-md p-3 border-2' type="email" />
          </div>
          <div className=' flex flex-col'>
             <label  className=' text-left '  htmlFor="">Message</label>
              <textarea cols={2} rows={7} placeholder=' enter message ....' className=' border-black rounded-md p-3 border-2' type="t" />
          </div>

          <div>
             <button className=' bg-[#ffd23e] hover:bg-[#ffc44e] hover:text-black hover:scale-70  ease-out font-bold p-3 rounded-md w-full shadow-lg  border-[#340f0f] border-[2px]'> Submit</button>
          </div>
         
        </form>
      </div>


    <div className="flex flex-col gap-[4rem] my-5 py-5 text-[1.2em] px-5 md:text-[1.8em] ">
       
        <div className=' text flex flex-col justify-center '>

           

              <div className='flex flex-col  justify-center item-start  md:items-center   '  >
             
                <div  className=' text-center border-b-gray-700'>
                  <h1 className=' font-bold  text-[1.1em] underline my-3'>Other Informations</h1>
                  <p>1500 Pennsylvania Avenue, NW Washington, D.C. 20220 </p> 
                  <p>San Antonio Texas, 78212</p>
                  <br />
                  <a href="tel:+1 (202) 871-3196 "> <p>Tel: +1 (202) 871-3196</p></a>
                 
                  <br />
                  <a href="tel:+1 (746) 288-7818"> <p>Tel: +1 (747) 288-7818</p></a>
                  {/* <br /> */}
                  <p>or</p>
                  {/* <br /> */}
                  <a href="tel:+1 (305) 615-6058"><p>Tel: +1 (305) 615-6058</p></a>
                  <br />
                   <a href="mailto:info@securenetloanservices.com"><p>Email: info@securenetloanservices.com</p></a>
                   
                   <br />
                  
                
                
                </div>
                     
                </div>
                
                

        </div>

         
        </div>

        <div>
        <a target='_blank' className=' flex justify-center items-center text-center gap-4' href="https://api.whatsapp.com/message/J6UHR2BUJF73A1?autoload=1&app_absent=0"> <img src="/chat.jpeg" className=' h-[20em] mx-auto my-4 w-[17em]' alt="" /></a>
                 
                 <a target='_blank' className=' flex flex-col md:flex-row justify-center  bg-[#36d365] text-white p-3 rounded-md items-center text-center gap-4' href="https://api.whatsapp.com/message/J6UHR2BUJF73A1?autoload=1&app_absent=0"><AiOutlineWhatsApp className=' w-fit scale-150'/><button type='button' className=' w-full gap-4 flex justify-center items-center flex-col sm:flex-row text-white  rounded-xl' >
                   Click Here To Chat with Bluegate Investment 
                 </button>
               </a>
        </div>
        </div>
        </div>
  )
}

export default Contact
