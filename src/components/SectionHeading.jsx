import React from 'react'
import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return <motion.div className="section-heading" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .6 }} transition={{ duration: .5 }}>
    <p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{subtitle && <p className="section-subtitle">{subtitle}</p>}
  </motion.div>
}
