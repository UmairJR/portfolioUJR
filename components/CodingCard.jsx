'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn, slideIn } from '@/motion'
const CodingCard = (props) => {
    return (
        <div>

            <motion.div 
            variants={fadeIn('up', 'spring', props.index * 0.5, 1)}
            className='coding--card flex'
            >
                <div className='coding--title--section width--column-four-1'>
                    <img className='coding--icon pd--5' src={props.url} />
                    <a className='coding--text pd--5 ml--10'>{props.title}</a>
                </div>
                <div className='coding--handle width--column-three-1 font--center'>
                    <a href={props.link} className='coding--handle--text' target="_blank">
                        {props.handle}
                    </a>
                </div>
                <div className='coding--desc width--column-two-1'>
                    <p className='padding--left'>
                        {props.desc}
                    </p>
                </div>
            </motion.div>


        </div>
    )
}

export default CodingCard
