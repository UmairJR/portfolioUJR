'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { msgboxVariant, homeContainerVariant, staggerContainer } from '@/motion'
import CodingCard from './CodingCard'

const Coding = () => {
    return (
        <div className='bg--black container--fluid color--white font--family pt--50 pb--50' id='profile'>
            <div className='coding--heading'>
                <motion.h1
                    className='fs--50 pb--20'
                    variants={homeContainerVariant(0.1)}
                    initial='hidden'
                    whileInView='show'
                >
                    Coding Profiles.
                </motion.h1>
                <motion.p
                    className='fs--20 coding--subheading pb--50'
                    variants={homeContainerVariant(0.3)}
                    initial='hidden'
                    whileInView='show'
                >
                    Coding is my <span className='threeD--superman'>superpower</span>, and I'm just a keyboard away from saving the <span className='threeD--world'>world</span>!
                </motion.p>
            </div>
            <motion.div
                className=''
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                {
                    cprofiles.map((element, index) => (

                        <CodingCard
                            index={index+1}
                            title={cprofiles[index].title}
                            link={cprofiles[index].link}
                            url={cprofiles[index].url}
                            handle={cprofiles[index].handle}
                            desc={cprofiles[index].desc}
                            key={`coding--card-${index}`}
                        />

                    ))
                }

            </motion.div>
        </div>
    )
}

export default Coding
const cprofiles = [
    {
        'link': 'https://leetcode.com/UmairShaikh/',
        'url': '../icons/leetcode.ico',
        'title': 'LeetCode',
        'handle': '@UmairShaikh',
        'desc': '| 100+ Problems Solved'
    },
    {
        'link': 'https://auth.geeksforgeeks.org/user/umairjr1265',
        'url': '../icons/icons8-geeksforgeeks.svg',
        'title': 'GeeksforGeeks',
        'handle': '@umairjr1265',
        'desc': '| 50+ Problems Solved'
    },
    {
        'link': 'https://github.com/UmairJR',
        'url': '../icons/icons8-github.svg',
        'title': 'Github',
        'handle': '@UmairJR',
        'desc': '| 140+ Contributions'
    },
    {
        'link': 'https://www.hackerrank.com/umairjr1265?hr_r=1',
        'url': '../icons/hackerrank.ico',
        'title': 'HackerRank',
        'handle': '@umairjr1265',
        'desc': '| 100+ Problems Solved'
    }
]