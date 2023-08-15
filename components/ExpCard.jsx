'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '@/motion'

const ExpCard = (props) => {
    return (
        <div>

            <motion.div
                variants={fadeIn('up', 'spring', props.index * 0.5, 1)}
                className='exp--card flex'
            >
                <li className='flex flex--align-items-center mb--25'>
                    <div className='ml--25'>
                        <div className='exp--title--section width--column-three-1'>
                            <h2 className='exp--text pd--5 ml--10'>{props.title}</h2>
                        </div>
                        <div className='exp--company width--column-two-1 font--center'>
                            <a href={props.company_link} className='exp--handle--text' target="_blank">
                                {props.company}
                            </a>
                        </div>
                        <div className='exp--desc width--column-two-1'>
                            <p className='padding--left'>
                                {props.desc}
                            </p>
                        </div>
                    </div>
                </li>
            </motion.div>


        </div>
    )
}

export default ExpCard
