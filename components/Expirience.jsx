'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, homeContainerVariant } from '@/motion'
import ExpCard from './ExpCard'

const Expirience = () => {
  return (
    <div className='bg--black container--fluid color--white font--family pt--50 pb--50' id='experience'>
    <motion.h1
        className='fs--50 mb-5'
        variants={homeContainerVariant(1)}
        initial='hidden'
        whileInView='show'
        >Work Expirience.
    </motion.h1>
    
    <motion.ul 
    className="experience--list"
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    >
    {
        exp.map((exps, index) => (
           
                    <ExpCard
                    index={index+1}
                    title={exp[index].title}
                    company={exp[index].company}
                    company_link={exp[index].company_link}
                    certificate={exp[index].certificate}
                    start_date={exp[index].start_date}
                    end_date={exp[index].end_date}
                    desc={exp[index].desc}
                    />
        ))
    }
    </motion.ul>
</div>
  )
}

export default Expirience

const exp = [
    {
        title:'SDE Intern',
        company:'Octaware Technologies',
        company_link:'https://octaware.com',
        certificate:'',
        start_date:'Jun 2022',
        end_date:'July 2022',
        desc:'Hands-on experience of MS Power Apps.Worked with a team and developed Vendor Management System.Deeply learned the phases of SDLC.'
    },
    {
        title:'Web Developer Intern',
        company:'Insys Technologies',
        company_link:'https://www.insystechnologies.in',
        certificate:'',
        start_date:'Jun 2020',
        end_date:'Aug 2020',
        desc:'Developed Hospital Management System.Primarily learned and implemented – HTML, JS, PHP, CSS, and AJAX'
    }
]