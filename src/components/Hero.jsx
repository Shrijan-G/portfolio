import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export default function Hero(){
  const [role,setRole]=useState(0)
  useEffect(()=>{const t=setInterval(()=>setRole(i=>(i+1)%portfolio.person.roles.length),2400);return()=>clearInterval(t)},[])
  const scroll=id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
  return <section id="home" className="hero section-shell">
    <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/><div className="hero-grid"/>
    <motion.div className="hero-content" initial="hidden" animate="visible" variants={{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12}}}}>
      <motion.p className="hello-pill" variants={{hidden:{opacity:0,y:14},visible:{opacity:1,y:0}}}><span/>{portfolio.person.eyebrow}</motion.p>
      <motion.h1 variants={{hidden:{opacity:0,y:18},visible:{opacity:1,y:0}}}>{portfolio.person.name}</motion.h1>
      <motion.div className="role-wrap" variants={{hidden:{opacity:0,y:18},visible:{opacity:1,y:0}}}><span className="role-text" key={role}>{portfolio.person.roles[role]}</span><span className="cursor"/></motion.div>
      <motion.p className="hero-tagline" variants={{hidden:{opacity:0,y:18},visible:{opacity:1,y:0}}}>{portfolio.person.tagline}</motion.p>
      <motion.div className="hero-buttons" variants={{hidden:{opacity:0,y:18},visible:{opacity:1,y:0}}}><button className="button primary" onClick={()=>scroll('projects')}>View Projects <ArrowUpRight size={17}/></button><button className="button secondary" onClick={()=>scroll('contact')}>Contact Me</button></motion.div>
      <motion.div className="social-row" variants={{hidden:{opacity:0},visible:{opacity:1}}}><a href={portfolio.socials.github} aria-label="GitHub"><Github/></a><a href={portfolio.socials.linkedin} aria-label="LinkedIn"><Linkedin/></a><a href={portfolio.socials.email} aria-label="Email"><Mail/></a></motion.div>
    </motion.div>
    <button className="scroll-cue" onClick={()=>scroll('about')}><span>Scroll</span><ArrowDown/></button>
  </section>
}
