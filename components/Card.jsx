'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn, slideIn } from '@/motion'
const Card = (props) => {
  return (
    <motion.div 
    variants={slideIn('left', 'spring', props.index * 0.5, 0.7)}
    className='card'>
    
    {props.text}
      
    </motion.div>
  )
}

export default Card
