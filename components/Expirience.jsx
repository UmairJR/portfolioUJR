'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { msgboxVariant, homeContainerVariant } from '@/motion'

const Expirience = () => {
  return (
    <div className='bg--black container--fluid color--white font--family pt--50 pb--50'>
    <motion.h1
        className='fs--50 mb-5'
        variants={homeContainerVariant(1)}
        initial='hidden'
        whileInView='show'
        >Work Expirience.</motion.h1>
    <div className='flex'>
    <div className='width--column-two-1'>
        
        
        
    </div>
    <div className='width--column-two-1 font--center'>
        
    </div>
    </div>
</div>
  )
}

export default Expirience

const exp = [
    {
        'title':'SDE Intern',
        'company':'Octaware Technologies',
        'company-link':'https://octaware.com',
        'certificate':'',
        'start-date':'Jun 2022',
        'end-date':'July 2022',
        'desc':'Hands-on experience of MS Power Apps.Worked with a team and developed Vendor Management System.Deeply learned the phases of SDLC.'
    },
    {
        'title':'Web Developer Intern',
        'company':'Insys Technologies',
        'company-link':'https://www.insystechnologies.in',
        'certificate':'',
        'start-date':'Jun 2020',
        'end-date':'Aug 2020',
        'desc':'Developed Hospital Management System.Primarily learned and implemented – HTML, JS, PHP, CSS, and AJAX'
    }
]