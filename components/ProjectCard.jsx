'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '@/motion'
import useCheckMobileScreen from './useCheckMobileScreen'


const ProjectCard = (props) => {
    const isMobile = useCheckMobileScreen()
    return (
        <div>
            <div className={isMobile ? '' : 'flex'}>
                {
                    isMobile ?
                        <motion.div
                            className={isMobile ? '' : 'width--column-two-1'}
                            variants={fadeIn('up', 'spring', props.index * 0.5, 1)}
                        >
                            <img src={props.url} />

                        </motion.div>
                    :
                    <motion.div
                        className={isMobile ? '' : 'width--column-two-1'}
                        variants={slideIn('left', 'tween', 0.2, 1)}
                    >
                        <img src={props.url} />

                    </motion.div>
                }
                {
                    isMobile ?
                    <motion.div
                        className={isMobile ? '' : 'width--column-two-1'}
                        variants={fadeIn('up', 'spring', props.index * 1, 1)}
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
                    :
                    <motion.div
                        className={isMobile ? '' : 'width--column-two-1'}
                        variants={slideIn('right', 'tween', 0.2, 1)}
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
                }
                
            </div>
        </div>
    )
}

export default ProjectCard
