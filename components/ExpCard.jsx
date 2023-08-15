'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '@/motion'

const ExpCard = (props) => {
    return (
        <li className={`flex flex--align-items-center mb--25`}>

            <motion.div
                variants={fadeIn('up', 'spring', props.index * 0.5, 1)}
                className='exp--card flex'
            >
                <div className='ml--25'>
                    <div className=''>
                        <h2 className='exp--text'>{props.title}</h2>
                    </div>
                    <div className='exp--company'>
                        <a href={props.company_link} className='exp--handle--text' target="_blank">
                            {props.company}
                        </a>
                    </div>
                    <div className='exp--desc width--column-two-1'>
                        <p>
                            {props.desc}
                        </p>
                    </div>
                </div>
            </motion.div>


        </li>
    )
}

export default ExpCard
