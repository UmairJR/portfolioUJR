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
        >Work Expirience.
    </motion.h1>
    <ul className="experience--list">
    {
        exp.map((exps, index) => (
            <li className='flex flex--align-items-center mb--25'>
                <div className='ml--25'>
                    <div>
                        {exps.title}
                    </div>
                    <div>
                        {exps.title}
                    </div>
                    <div>
                        {exps.title}
                    </div>
                    <div>
                        {exps.title}
                    </div>
                    <div>
                        {exps.title}
                    </div>
                    
                </div>
            </li>
        ))
    }
    </ul>
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