import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { portfolio } from '../data/portfolio'
export default function Projects(){const [filter,setFilter]=useState('All');const filters=['All','Cybersecurity','Web Development','Networking'];const shown=filter==='All'?portfolio.projects:portfolio.projects.filter(p=>p.category===filter);return <section id="projects" className="section-shell section-pad"><SectionHeading eyebrow="Portfolio" title="My Projects" subtitle="A showcase of my work in cybersecurity and development."/><div className="filters" role="group" aria-label="Filter projects">{filters.map(f=><button key={f} className={filter===f?'active':''} onClick={()=>setFilter(f)}>{f}</button>)}</div><motion.div layout className="projects-grid"><AnimatePresence mode="popLayout">{shown.map((p,i)=><ProjectCard key={p.title} project={p} index={portfolio.projects.indexOf(p)}/>)}</AnimatePresence></motion.div></section>}
