import React from 'react'
import { portfolio } from '../data/portfolio'
export default function Skills(){const items=[...portfolio.skills,...portfolio.skills];return <section className="skills-section" aria-label="Technical skills"><div className="section-shell"><p className="skills-title">Technical skills</p></div><div className="marquee"><div className="marquee-track">{items.map((skill,i)=><div className="skill-chip" key={`${skill}-${i}`}><span>{skill.slice(0,1)}</span>{skill}</div>)}</div></div></section>}
