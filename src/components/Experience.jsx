import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Code2, FlaskConical } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { portfolio } from '../data/portfolio'
const icons={study:BookOpen,code:Code2,lab:FlaskConical}
export default function Experience(){return <section id="experience" className="section-shell section-pad"><SectionHeading eyebrow="Journey" title="Education & Certifications" subtitle="Academic milestones and professional cybersecurity learning."/><div className="timeline"><div className="timeline-line"/>{portfolio.experience.map((item,i)=>{const Icon=icons[item.type];return <motion.article className="timeline-item" key={item.title} initial={{opacity:0,x:i%2?20:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.4}} transition={{delay:i*.08}}><div className="timeline-icon"><Icon/></div><div className="timeline-card"><span className="date">{item.date}</span><h3>{item.title}</h3><h4>{item.organization}</h4><p>{item.description}</p><div className="tags">{item.tags.map(t=><span key={t}>{t}</span>)}</div></div></motion.article>})}</div></section>}
