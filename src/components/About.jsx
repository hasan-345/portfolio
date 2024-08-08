import React from 'react'
import user from "../assets/user.jpg"
import {motion} from "framer-motion"
import curve from "../assets/curve.png"
const About = () => {

  

return (
    <section className='my-[60px] py-[50px]'>

<motion.div whileInView={{y:0, opacity:1}} initial={{y:50, opacity:0}} transition={{duration:1}} className='flex justify-center flex-col w-full relative z-[4]  mb-9'><div> <h1 className='text-white text-5xl text-center'> About <span className='text-neutral-400'>Me</span> </h1> <div className='text-center flex justify-center'> <motion.img whileInView={{width:100 , opacity:1}} initial={{ opacity:0}} transition={{duration:1, delay:0.5}} src={curve} alt="" className='w-[100px] h-[10px] mt-1' /></div> </div></motion.div>

        
        
        <div className='w-full relative my-5 max_width_screen text-white flex gap-3 flex-col-reverse sm:flex-row justify-between p-5'>
        <div className='flex-1 flex justify-center my-5 sm:mt-0 mt-16  '>
    <img  src={user} alt="user" className='rounded-lg h-[400px] relative z-10  md:w-[60%] object-cover' />
    
    </div>
    
    <div className="flex-1 flex flex-col gap-2 items-start" whileInView={{x:0, opacity:1}} initial={{x:100, opacity:0}} transition={{duration:1}}>
     
       <p   className='tracking-tighter font-light  relative z-[1] leading-6'>I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.</p>
      
  <div className='absolute z-[0] w-[60%] h-[30%] top-0 right-0 pink__gradient overflow-hidden'/>
  <div className='absolute z-[0] w-[70%] h-[60%] top-1 right-0   blue__gradient  overflow-hidden'/>
  <div className='absolute z-[0] w-[40%] h-[40%] top-2 right-0 yellow__gradient  overflow-hidden'/>
    </div>

    
    </div>
</section>
  )
}

export default About