import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
export default function ProjectCard({project,index}){return <motion.article className={`project-card art-${index%3}`} layout initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.96}} transition={{duration:.35}}>
  <div className="project-art"><div className="art-grid"/><span>{project.short}</span><b>{String(index+1).padStart(2,'0')}</b></div>
  <div className="project-body"><span className="category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div>{(project.github||project.demo)&&<div className="project-links">{project.github&&<a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><Github/> Source</a>}{project.demo&&<a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} demo`}><ExternalLink/> Preview</a>}</div>}</div>
</motion.article>}
