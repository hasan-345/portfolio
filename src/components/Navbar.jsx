import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import logo from "../assets/website logo.png"
import { motion} from "framer-motion"

const Navbar = () => {

  

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

  const iconVar = (duration)=>({
    hidden:{
        y: 80,
        opacity: 0
    },
    visible:{
        y:0,
        opacity:1,
        transition: {
            duration: duration
        }
    }
  })

//  variants={iconVar(i/2)} initial="hidden" animate="visible"
  return (
    <header className='w-full flex justify-between p-5 text-white items-center max_width_screen'>
     <img className="text-5xl font-semibold h-[100px] relative z-[10] object-cover" src={logo}/>
     <ul className="flex sm:gap-7 gap-3">
       {
        navItems.map((item,i)=>(
            <li key={item.id} >
              <a href={item.dest} target='_blank'>  {item.title}</a>
            </li>
        ))
       }
     </ul>
    </header>
  )
}

export default Navbar