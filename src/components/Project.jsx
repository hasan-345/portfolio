import React from 'react'
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import curve from "../assets/curve.png"
import {motion} from "framer-motion"
import { HiOutlineExternalLink } from "react-icons/hi";

const Project = () => {
   
    const PROJECTS = [
        {
          title: "Banking UI Website",
          des: "https://bankingapp-ochre.vercel.app/",
          image: project1,
          description:
            "A fully Customize Banking UI  website with features like Customized UI, attractive, and user friendly.This website can be used as banking web application.",
          technologies: ["HTML", "CSS", "React","JavaScript"],
        },
        {
          title: "Portfolio Website",
          des: "http://ihaveweb.000webhostapp.com/",
          image: project2,
          description:
            "An application for showing my expertise in HTML CSS & JavaScript and projects. This project has been created when I began journey of web development. This project is included UI animations.",
          technologies: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "Services Website UI",
          image: project3,
          description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
          technologies: ["HTML", "CSS", "JavaScript"],
        },
        {
          title: "Blog React Website",
          image: project4,
          description:
            "Blog webiste is created using React Js and backend services provided such that Appwrite. This website is included functionality such that Upload posts, Edit posts, All posts etc. This website is fully functionally. ",
          technologies: ["HTML", "CSS", "JavaScript","React", "Appwrite", "Database"],
        }
      ];


  return (
    <section className='my-10 p-3 py-[70px]'>
        <motion.div whileInView={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{duration:1}} className='flex justify-center flex-col w-full relative z-[4]  mb-9'><div> <h1 className='text-white text-5xl text-center'> Projects </h1> <div className='text-center flex justify-center'> <motion.img whileInView={{width:100, opacity:1}} initial={{width:0, opacity:0}} transition={{duration:1, delay:0.5}} src={curve} alt="" className='w-[100px] h-[10px] mt-1' /></div> </div></motion.div>

         <div className="relative max_width_screen w-full text-white">
            {PROJECTS.map((item,i)=>(
                <div key={i} className='flex sm:flex-row flex-col my-4 relative z-[10]'>
                  <div className='flex-1 flex sm:justify-center justify-start sm:my-0 my-2 '> <img src={item.image} alt="image" className='sm:w-[40%] w-[90%] rounded-2xl' /> </div>
                  <div className='flex flex-1 flex-col gap-3'>

                     {item.des? (
                      <a href={item.des} target='_blank' className='font-semibold flex gap-1 cursor-pointer'> {item.title} <HiOutlineExternalLink className='text-2xl' /> </a>
                     ): (
<div className='font-semibold'> <p className=' flex gap-1'> {item.title}   </p> </div>
                     )  }

                    
                    <p className="text-neutral-400"> {item.description} </p>
                    <div className='flex gap-2'> {item.technologies.map((tech,i)=>(
                        <div key={i} className='px-2 py-1 text-sm font-medium  text-purple-800 bg-neutral-900'>
                            {tech}
                        </div>

                    ))}  </div>
                  </div>
                </div>
            ))}

            
<div className='absolute z-[0] w-[30%] h-[60%]   bottom-0   -right-0 pink__gradient overflow-hidden'/>
  <div className='absolute z-[0] w-[20%] h-[70%] bottom-1 -right-0   blue__gradient  overflow-hidden'/>
  <div className='absolute z-[0] w-[10%] h-[50%] bottom-2 -right-0 yellow__gradient  overflow-hidden'/>
         </div>

    </section>
  )
}

export default Project