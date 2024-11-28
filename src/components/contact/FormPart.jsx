import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";

import { motion } from 'framer-motion';

const FormPart = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        // email validation start //
        const emailValidate =()=>{
        return String(email)
        .toLocaleLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
      }
      
      // email validation end //



    // form validation//

        if(name === ""){
            setErrorMsg("Enter Your Name")
            setSuccessMsg("")
        }
        else if(!emailValidate(email)){
            setErrorMsg("Enter a Valid Email")
            setSuccessMsg("")
        }
        else if(phone === ""){
            setErrorMsg("Enter Your Phone Number")
            setSuccessMsg("")
        }
        else if(message === ""){
            setErrorMsg("Enter a Message")
            setSuccessMsg("")
        }
        
        else{
            setName("")
            setEmail("")
            setPhone("")
            setMessage("")
            setErrorMsg("")
            setSuccessMsg(`Thank You ${name} Your Message has been sent Successfully !`)
            
            console.log("name:" + name, "email:" + email, "phone:" + phone, "Message:" + message)
        }
    }

        // form validation end//



  return (
    <div className='overflow-x-hidden'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <motion.div
        initial={{x:"100%", opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{duration:.4, delay:.1}} >

         <input type='text' placeholder='Your Name' onChange={(e)=>{setName(e.target.value)}} value={name}  className={`${errorMsg === "Enter Your Name" && 'border-red-600'} w-full mx-auto bg-transparent px-4 py-3 border border-gray-600 outline-none rounded-md shadow-md`}/>
         </motion.div>

         <motion.div initial={{x:"100%", opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{duration:.4, delay:.2}} 
          >
         <input type='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} value={email} className={`${errorMsg === "Enter a Valid Email" && 'border-red-600'} w-full mx-auto bg-transparent px-4 py-3 border border-gray-600 outline-none rounded-md shadow-md`}/>
         </motion.div>

         <motion.div initial={{x:"100%", opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{duration:.5, delay:.3}} 
          >
         <input type='text' placeholder='Number' onChange={(e)=>{setPhone(e.target.value)}} value={phone}  className={`${errorMsg === "Enter Your Phone Number" && 'border-red-600'} w-full mx-auto bg-transparent px-4 py-3 border border-gray-600 outline-none rounded-md shadow-md`}/>
         </motion.div>

         <motion.div initial={{x:"100%", opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{duration:.6, delay:.3}} 
          >
         <textarea type='text' placeholder='Message' onChange={(e)=>{setMessage(e.target.value)}} value={message}   className={`${errorMsg === "Enter a Message" && 'border-red-600'} w-full mx-auto bg-transparent px-4 py-3 border border-gray-600 outline-none rounded-md shadow-md`}/>
         </motion.div>

         {
            errorMsg && <p className='w-full py-3 bg-[#1e2024] shadow-shadowOne rounded-lg text-red-600 text-base tracking-wide text-center animate-bounce'>{errorMsg}</p>
         }

         {
            successMsg && <p className='w-full py-3 bg-[#1e2024] shadow-shadowOne rounded-lg text-green-600 text-base tracking-wide text-center animate-bounce px-4 inline-flex'>{successMsg}<span onClick={()=>{setSuccessMsg("")}} className='ml-2 mt-1 text-gray-400 hover:text-red-600 transition-colors duration-300 cursor-pointer'>
                <IoCloseOutline size={20} />
            </span></p>
         }

         <motion.button
          initial={{x:"100%", opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{duration:.6, delay:.2}}  type='submit' className='border border-designColor py-3 px-5 rounded-md w-1/2 md:w-1/3 mx-auto hover:bg-designColor hover:bg-opacity-70 transition-colors duration-300 outline-none'>Send Message</motion.button>
        </form>
    </div>
  )
}

export default FormPart
