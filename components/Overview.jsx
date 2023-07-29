'use client'
import React from 'react'
import Card from './Card'
import { motion } from 'framer-motion'
import { msgboxVariant, homeContainerVariant, staggerContainer } from '@/motion'

const Overview = () => {
    return (
        <div className='bg--black container--fluid color--white font--family pt--50 pb--50'>



            <div className='pr--80'>
                <h1 className='fs--50 mb--10'> Overview.</h1>
                <p className='fs--20 mb--100'> I'm a skilled software developer with experience in TypeScript and
                    JavaScript, and expertise in frameworks like React, Node.js, and
                    Three.js. I'm a quick learner and collaborate closely with clients to
                    create efficient, scalable, and user-friendly solutions that solve
                    real-world problems. Let's work together to bring your ideas to life!</p>
            </div>


            <motion.div
                className='flex'
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                {
                    cardTexts.map((cardText, index) => (
                        <div className={`width--column-four-5 ${cardTexts.length - 1 == index ? "" : "mr--10"}`}>
                            <Card index={index+1} text={cardText} />
                        </div>
                    ))
                }
            </motion.div>

        </div>
    )
}

export default Overview

const cardTexts = ['Front-End Developer', 'Back-End Developer', 'Python', 'Designer']