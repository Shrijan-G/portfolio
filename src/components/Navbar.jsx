import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Menu, X } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll=()=>setScrolled(scrollY>24); onScroll(); addEventListener('scroll',onScroll); return()=>removeEventListener('scroll',onScroll)},[])
  const go = id => { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); setOpen(false) }
  return <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <nav className="nav-wrap" aria-label="Main navigation">
      <button className="brand" onClick={()=>go('home')} aria-label="Go home">{portfolio.person.initials}<span>.</span></button>
      <div className="desktop-nav">{portfolio.navigation.map(item=><button key={item} onClick={()=>go(item.toLowerCase())} className={activeSection===item.toLowerCase()?'active':''}>{item}</button>)}</div>
      <div className="nav-actions"><a href={portfolio.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a><button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open?<X/>:<Menu/>}</button></div>
    </nav>
    <AnimatePresence>{open&&<motion.div className="mobile-menu" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}>{portfolio.navigation.map(item=><button key={item} onClick={()=>go(item.toLowerCase())}>{item}</button>)}</motion.div>}</AnimatePresence>
  </header>
}
