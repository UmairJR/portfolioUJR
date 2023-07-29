'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn,slideIn, staggerContainer } from '@/motion'

const ProjectCardInverse = (props) => {
    return (
        <div>
            <div className='flex'>
                <motion.div 
                className='width--column-two-1'
                variants={slideIn('left', 'tween', 0.2, 1)}
                >
                    <div className='proj--title fs--30 mb--20'><h2>{props.title}</h2></div>
                    <div className='proj--desc fs--20 mb--40'><p>{props.desc}</p></div>
                    <div className='proj--tech mb--25'>
                        <div className='made-with fs--25 mb--10'><h3>Made with</h3></div>
                        <span className='tech fs--20'>{props.tech}</span>
                    </div>
                    <div className='proj--links '>
                        <a className='btn btn--outline-gold mr--10' href={props.link}>Link</a>
                        |
                        <a className='btn btn--outline-gold ml--10' href={props.repo}>Repo</a>
                    </div>


                </motion.div>
                <motion.div
                    className='width--column-two-1'
                    variants={slideIn('right', 'tween', 0.2, 1)}
                >
                    <img src={props.url} />

                </motion.div>
            </div>
        </div>
    )
}

export default ProjectCardInverse
