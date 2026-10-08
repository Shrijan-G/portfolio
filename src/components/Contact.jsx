import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Github, Linkedin, LoaderCircle, Mail, MapPin, Send, ShieldCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { portfolio } from '../data/portfolio'

const formEndpoint = `https://formsubmit.co/ajax/${portfolio.contact.email}`

export default function Contact(){
  const [status,setStatus]=useState('idle')
  const [errors,setErrors]=useState({})

  const submit=async e=>{
    e.preventDefault()
    const form=e.currentTarget
    const data=Object.fromEntries(new FormData(form))
    const next={}
    if(!data.name.trim())next.name='Please enter your name.'
    if(!/^\S+@\S+\.\S+$/.test(data.email))next.email='Enter a valid email address.'
    if(!data.subject.trim())next.subject='Please add a subject.'
    if(data.message.trim().length<10)next.message='Please write at least 10 characters.'
    setErrors(next)
    if(Object.keys(next).length)return

    setStatus('sending')
    try{
      const response=await fetch(formEndpoint,{
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify({
          name:data.name,
          email:data.email,
          subject:data.subject,
          message:data.message,
          _subject:`Portfolio enquiry: ${data.subject}`,
          _template:'table',
          _honey:data._honey,
          _url:'https://shrijan-giri-portfolio.maybekaleennnn.chatgpt.site/',
        }),
      })
      const result=await response.json()
      if(!response.ok||result.success===false)throw new Error('Submission failed')
      form.reset()
      setStatus('success')
    }catch{
      setStatus('error')
    }
  }

  return <section id="contact" className="section-shell section-pad">
    <SectionHeading eyebrow="Say hello" title="Let's Connect" subtitle="Open to internships, entry-level security roles, and thoughtful collaborations."/>
    <div className="contact-grid">
      <motion.div className="contact-copy" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
        <p>Have an internship, project, CTF collaboration, or security-focused opportunity in mind? Send a message directly to my inbox.</p>
        <a className="contact-detail" href={portfolio.socials.email}><Mail/><span><small>Email</small>{portfolio.contact.email}</span></a>
        <div className="contact-detail"><MapPin/><span><small>Location</small>{portfolio.contact.location} 🇳🇵</span></div>
        <div className="contact-detail"><ShieldCheck/><span><small>Availability</small>{portfolio.contact.availability}</span></div>
        <div className="contact-socials"><a href={portfolio.socials.github} target="_blank" rel="noreferrer"><Github/> GitHub</a><a href={portfolio.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a></div>
      </motion.div>
      <motion.form className="contact-form" action={`https://formsubmit.co/${portfolio.contact.email}`} method="POST" onSubmit={submit} noValidate initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
        <input type="hidden" name="_subject" value="New portfolio enquiry" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_url" value="https://shrijan-giri-portfolio.maybekaleennnn.chatgpt.site/" />
        <input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" />
        {status==='success'&&<div className="form-status success" role="status" aria-live="polite"><CheckCircle2/> Message sent successfully. I’ll reply to the email you provided.</div>}
        {status==='error'&&<div className="form-status error" role="alert"><AlertCircle/> The message could not be sent. Please email me directly at {portfolio.contact.email}.</div>}
        <div className="field-row"><Field label="Name" name="name" placeholder="Your name" error={errors.name}/><Field label="Email" name="email" type="email" placeholder="you@domain.com" error={errors.email}/></div>
        <Field label="Subject" name="subject" placeholder="Internship / collaboration / CTF" error={errors.subject}/>
        <Field label="Message" name="message" as="textarea" placeholder="Write your message here..." error={errors.message}/>
        <button className="button primary" type="submit" disabled={status==='sending'}>{status==='sending'?<>Sending <LoaderCircle className="spin" size={17}/></>:<>Send Message <Send size={17}/></>}</button>
        <p className="form-note">Your message is delivered securely to {portfolio.contact.email}.</p>
      </motion.form>
    </div>
  </section>
}

function Field({label,name,type='text',placeholder,error,as}){
  const Comp=as==='textarea'?'textarea':'input'
  return <label className="field"><span>{label}</span><Comp name={name} type={type} placeholder={placeholder} rows={as?6:undefined} aria-invalid={!!error}/>{error&&<em>{error}</em>}</label>
}
