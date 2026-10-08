import React from 'react'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { portfolio } from '../data/portfolio'
export default function Footer(){return <footer><div className="section-shell footer-inner"><button className="brand" onClick={()=>scrollTo({top:0,behavior:'smooth'})}>{portfolio.person.initials}<span>.</span></button><p>© 2026 Shrijan Giri. All rights reserved.</p><div className="footer-socials"><a href={portfolio.socials.github} aria-label="GitHub"><Github/></a><a href={portfolio.socials.linkedin} aria-label="LinkedIn"><Linkedin/></a><a href={portfolio.socials.email} aria-label="Email"><Mail/></a><button onClick={()=>scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top"><ArrowUp/></button></div></div></footer>}
