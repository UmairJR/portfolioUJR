'use client'
import React from 'react'
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { msgboxVariant, homeContainerVariant } from '@/motion'

const Hero = () => {
    const { text } = useTypewriter({
        words: ['Developer', 'Student', 'Athlete', 'Coder'],
        loop: {},
    })
    return (
        <div className='bg--black container--fluid color--white font--family flex pt--50 pb--50'>
            <div className='width--column-two-1'>
                <motion.div
                    className='msg--box arrow--bottom font--family fs--17'
                    variants={msgboxVariant}
                    initial='hidden'
                    whileInView='show'
                >
                    It's me
                </motion.div>
                <motion.h1
                className='fs--60 mb-5'
                variants={homeContainerVariant(1)}
                initial='hidden'
                whileInView='show'
                >Umair Shaikh<span className='fs--25 dot'>.</span></motion.h1>
                <motion.h3 
                className='fs--30 mb--50'
                variants={homeContainerVariant(1.6)}
                initial='hidden'
                whileInView='show'
                >I'm a <span className='fs--25 color--cyan'><Typewriter
                    words={['Developer', 'Student', 'Athlete', 'Coder']}
                    loop={0}
                    cursor
                    cursorStyle='}&'
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></span>
                </motion.h3>

                <motion.p
                    className='fs--20 mb--70'
                    variants={homeContainerVariant(2)}
                    initial='hidden'
                    whileInView='show'
                >Mikasa Ackerman is a fictional character from Hajime Isayama's manga series Attack on Titan.
                 Mikasa is introduced as a young villager living with the protagonist, 
                 the young Eren Yeager.
                 </motion.p>
                <button className='btn btn--outline-gold'>Resume</button>
            </div>
            <div className='width--column-two-1 font--center'>
                <img src="../profilepic/tilt_try.png"></img>
                {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIZNI7K61c1DOczIe_PsuXNG4oIpGXpo82Q&usqp=CAU */}
            </div>
        </div>
    )
}

export default Hero
