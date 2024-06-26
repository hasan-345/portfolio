import React from 'react'
import {motion} from "framer-motion"
import curve from "../assets/curve.png"

const Experience = () => {
   
    const EXPERIENCES = [
        {
          year: "2023 - Present",
          role: "Senior Full Stack Developer",
          company: "Google Inc.",
          description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
          technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
        },
        {
          year: "2022 - 2023",
          role: "Frontend Developer",
          company: "Adobe",
          description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
          technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
        },
        {
          year: "2021 - 2022",
          role: "Full Stack Developer",
          company: "Facebook",
          description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
          technologies: ["Python", "Svelte", "Three.js", "Postgres"],
        },
        {
          year: "2020 - 2021",
          role: "Software Engineer",
          company: "Paypal",
          description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
          technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
        },
      ];
      


  return (
    <section className='my-10 p-3'>
               <motion.div whileInView={{y:0, opacity:1}} initial={{y:-100, opacity:0}} transition={{duration:1}} className='flex justify-center flex-col w-full relative z-[4]  mb-9'><div> <h1 className='text-white text-5xl text-center'> Experience </h1> <div className='text-center flex justify-center'> <motion.img whileInView={{width:100, opacity:1}} initial={{width:0, opacity:0}} transition={{duration:1, delay:0.5}} src={curve} alt="" className='h-[10px] mt-1' /></div> </div></motion.div>
              
         <div className="relative max_width_screen w-full text-white">
            {EXPERIENCES.map((item,i)=>(
                <div key={i} className='relative z-[10] flex sm:flex-row flex-col mb-3 mx-1'>
                  <div className='flex-1 flex sm:justify-center justify-start sm:my-0 my-2 text-neutral-400'> {item.year} </div>
                  <div className='flex flex-1 flex-col gap-3'>
                    <div className='flex gap-2 font-semibold'> <p> {item.role} - </p> <p> {item.company} </p> </div>
                    <p className="text-neutral-400"> {item.description} </p>
                    <div className='flex gap-2'> {item.technologies.map((tech,i)=>(
                        <div key={i} className='px-2 py-1 text-sm font-medium  text-purple-800 bg-neutral-900'>
                            {tech}
                        </div>

                    ))}  </div>
                  </div>
                </div>
            ))}

<div className='absolute z-[0] w-[30%] h-[60%] top-0   left-0 pink__gradient overflow-hidden'/>
  <div className='absolute z-[0] w-[20%] h-[70%] top-1 left-0   blue__gradient  overflow-hidden'/>
  <div className='absolute z-[0] w-[10%] h-[50%] top-2 left-0 yellow__gradient  overflow-hidden'/>
         </div>

    </section>
  )
}

export default Experience