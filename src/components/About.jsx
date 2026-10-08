import React from 'react'
import { motion } from 'framer-motion'
import { Download, MapPin } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { portfolio } from '../data/portfolio'

export default function About(){return <section id="about" className="section-shell section-pad">
  <SectionHeading eyebrow="Who I am" title="About Me" subtitle="Practical security learning, responsible testing, and clear reporting."/>
  <div className="about-grid">
    <motion.div className="portrait-card" initial={{opacity:0,x:-24}} whileInView={{opacity:1,x:0}} viewport={{once:true}}><div className="portrait-placeholder"><img src="/shrijan-profile.png" alt="Illustrated portrait of Shrijan Giri" /></div><div className="portrait-meta"><span><MapPin size={15}/> Based in Nepal 🇳🇵</span><span className="status-badge"><i/> {portfolio.person.availability}</span></div></motion.div>
    <motion.div className="about-copy" initial={{opacity:0,x:24}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>{portfolio.person.bio.map(p=><p key={p}>{p}</p>)}<div className="stats-grid">{portfolio.stats.map(s=><div className="stat" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}</div><div className="about-facts"><div><strong>Languages</strong><span>{portfolio.languages.join(' · ')}</span></div><div><strong>CTF practice</strong><span>{portfolio.ctfCategories.join(' · ')}</span></div></div><a className="button primary" href="/Shrijan-Giri-CV.png" download>Download CV <Download size={17}/></a></motion.div>
  </div>
</section>}
