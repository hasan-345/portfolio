import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import curve from "../assets/curve.png"
import {motion} from "framer-motion"

const Contact = () => {

    const navItems = [
        {
            id: "Home",
            title: <FaLinkedin className='text-3xl  cursor-pointer'/>,
            dest: "https://www.linkedin.com/in/ahtisham-web-developer"
        },
        {
            id: "About",
            title: <FaGithub  className='text-3xl  cursor-pointer' />,
            dest: "https://www.github.com/hasan-345/"
        },
        {
            id: "Experience",
            title: <FaYoutube  className='text-3xl  cursor-pointer' />,
            dest: "https://www.youtube.com/channel/UC4FB_WetzRJGp5-aaJRWIqg"
        },
        {
            id: "Cont",
            title: <FaSquareUpwork  className='text-3xl cursor-pointer' />,
            dest: "https://www.upwork.com/freelancers/~0136f9e4718c573c93?mp_source=share"
        }
       ]

  return (
    <footer className='w-full flex justify-center flex-col items-center pb-5'>
     <motion.div whileInView={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{duration:1}} className='flex justify-center flex-col w-full relative z-[4]  mb-9'><div> <h1 className='text-white text-5xl text-center'> Get in touch </h1> <div className='text-center flex justify-center'> <motion.img whileInView={{width:100, opacity:1}} initial={{width:0, opacity:0}} transition={{duration:1, delay:0.5}} src={curve} alt="" className='w-[100px] h-[10px] mt-1' /></div> </div></motion.div>
     <p className='text-neutral-400'>Islampura Street No 8, Toba Tek Singh</p>
     <p className='text-neutral-400 py-1'>+923006566584</p>
     <p className='underline text-neutral-300'> ahtishamhassan345@gmail.com </p>

     <ul className="flex gap-4 flex-wrap mt-2 text-white">
       {
        navItems.map((item,i)=>(
            <motion.li key={item.id} >
              <a href={item.dest} target='_blank'>  {item.title}</a>
            </motion.li>
        ))
       }
     </ul>
    </footer>
  )
}

export default Contact