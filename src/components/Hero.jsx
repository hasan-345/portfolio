import React from 'react'
import user from "../assets/user.jpg"
import { motion} from "framer-motion"
const Hero = () => {

  const container = (delay)=>({
    hidden : {
      x: -100,
      opacity: 0
    },
    visible: {
      x:0,
      opacity: 1,
      transition: {
        duration: 0.5, delay: delay
      }
    }
  }) 

  return (
    <section className='w-full sm:pt-[80px] pt-[20px] relative sm:my-5 my-2 max_width_screen text-white flex flex-col sm:flex-row justify-center p-5 items-center'>
        
        <div className="flex-1 flex flex-col gap-2" >
          <motion.div whileInView={{x:0,opacity: 1}} initial={{x: -100, opacity: 0}} transition={{duration:0.6}} className='z-[2]' >
           <h1  className='text-4xl sm:text-5xl font-thin text-white relative z-[1]'>Ahtisham Ul Hassan</h1>
           <span  className='my-2  text__gradient bg-clip-text text-transparent  relative z-[1] text-3xl'>Full Stack Developer</span>
           <p className=' leading-6 tracking-tighter font-light  relative z-[1]'>I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</p>
           </motion.div>
      <div className='absolute z-[0] w-[60%] h-[30%] top-0 left-0 pink__gradient overflow-hidden'/>
      <div className='absolute z-[0] w-[70%] h-[60%] top-1 left-0   blue__gradient  overflow-hidden'/>
      <div className='absolute z-[0] w-[40%] h-[40%] top-2 left-0 yellow__gradient  overflow-hidden'/>
        </div>
          <div className='flex-1 w-full flex sm:justify-end justify-center my-5 sm:mt-0 mt-16 '>
        <motion.img whileInView={{x:0,opacity: 1}} initial={{x: 100, opacity: 0}} transition={{duration:0.6}}  src={user} alt="user" className='rounded-lg h-[400px]  md:w-[60%] object-cover relative z-10' />
        </div>
    </section>
  )
}

export default Hero