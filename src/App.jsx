import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')]
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id))
    }, { rootMargin: '-38% 0px -54%' })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return <>
    <Navbar activeSection={activeSection} />
    <main><Hero /><About /><Skills /><Projects /><Experience /><Contact /></main>
    <Footer />
  </>
}
