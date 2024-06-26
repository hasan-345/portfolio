import './App.css'
import {motion} from "framer-motion"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technology from './components/Technology'
import Experience from './components/Experience'
import Project from './components/Project'
import Contact from './components/Contact'
import { useEffect, useState } from 'react'
import Loading from './components/Loading'
function App() {
  
 const [load,setLoading] = useState(false)
  
 useEffect(()=>{
  window.addEventListener("load",()=>{
    setLoading(true)
  })
 },[])
 

  if(!load){
    return (
      <Loading/>
    )
  }

  return (
      <div className='bg-slate-900'>
       
      <Navbar/>
     <Hero/>
     <About/>
     <Technology/>
     <Experience/>
     <Project/>
     <Contact/>
      </div>
  )
}

export default App
