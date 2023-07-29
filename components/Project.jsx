'use client'
import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectCardInverse from './ProjectCardInverse'
import { motion } from 'framer-motion'
import { staggerContainer } from '@/motion'

const Project = () => {
    return (
        <div className='bg--black container--fluid color--white font--family pt--50 pb--50'>
            <h1 className='fs--50 pb--50'>Projects.</h1>
            <motion.div
                className='mb--50'
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <ProjectCard
                    url={projects[0].url}
                    title={projects[0].title}
                    desc={projects[0].desc}
                    tech={projects[0].tech}
                    link={projects[0].link}
                    repo={projects[0].repo}
                />
            </motion.div>
            <motion.div
                className='mb--50'
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <ProjectCardInverse
                    url={projects[0].url}
                    title={projects[0].title}
                    desc={projects[0].desc}
                    tech={projects[0].tech}
                    link={projects[0].link}
                    repo={projects[0].repo}

                />
            </motion.div>
            <div className='mb--50'>
                <ProjectCard />
            </div>
            <div className='mb--50'>

            </div>




        </div>
    )
}

export default Project

const projects = [
    {
        'url': '../projects/animeworld_laptop.png',
        'title': 'Anime World --- (Landing Page)',
        'desc': 'This website serves as a showcase of my front-end development skills, demonstrating my expertise in creating interactive and visually appealing user interfaces. Feel free to browse through the website to see examples of my work and get a sense of my creative approach to front-end development.',
        'tech': 'ReactJS , TailwindCSS , Framer Motion',
        'link': 'https://animeworld-portfolio1.netlify.app/',
        'repo': 'https://github.com/UmairJR/anime-cool-ui-ux-spa'
    }
]