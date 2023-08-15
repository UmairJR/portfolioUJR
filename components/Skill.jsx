'use client'
import React from 'react'
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter'
import SkillCard from './SkillCard'
import useCheckMobileScreen from './useCheckMobileScreen'

const Skill = () => {
    const {isMobile} = useCheckMobileScreen()
    return (
        <div className='bg--black container--fluid color--white font--family pt--50 pb--50'>
            <h1 className='fs--50 mb--20'> Skills.</h1>
            <div className={isMobile ? '' : 'flex'}>
                <div className={`width--column-${isMobile ? 'one' : 'three-1'} fonr--center mr--5`}>
                    <div className='border--right mb--30'>
                        <h3 className='fs--30 pd--10 font--center'>Programming Language</h3>
                    </div>
                    <div className='flex'>
                        <div className='width--column-two-1 mr--5'>
                            {
                                pl.map((element, index) => {
                                    const midpoint = Math.floor(pl.length / 2);
                                    if (index < midpoint) {
                                        return <SkillCard title={pl[index].title} url={pl[index].url} key={`skill--card-${index}`}/>;
                                    }
                                    return null;
                                })
                            }
                        </div>
                        <div className='width--column-two-1'>
                            {
                                pl.map((element, index) => {
                                    const midpoint = Math.floor(pl.length / 2);
                                    if (index >= midpoint) {
                                        return <SkillCard title={pl[index].title} url={pl[index].url} key={`skills--card-${index}`}/>;
                                    }
                                    return null;
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={`width--column-${isMobile ? 'one' : 'three-1'} font--center mr--5`}>
                    <div className='border--right mb--30'>
                        <h3 className='fs--30 pd--10 font--center min--height'>Frameworks / Libraries</h3>
                    </div>

                    <div className='flex'>
                        <div className='width--column-two-1 mr--5'>
                            {
                                lib.map((element, index) => {
                                    const midpoint = Math.floor(lib.length / 2);
                                    if (index >= midpoint) {
                                        return <SkillCard title={lib[index].title} url={lib[index].url} key={`skills--cards-${index}`}/>;
                                    }
                                    return null;
                                })
                            }
                        </div>
                        <div className='width--column-two-1'>
                            {
                                lib.map((element, index) => {
                                    const midpoint = Math.floor(lib.length / 2);
                                    if (index < midpoint) {
                                        return <SkillCard title={lib[index].title} url={lib[index].url} key={`skill--cards-${index}`}/>;
                                    }
                                    return null;
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={`width--column-${isMobile ? 'one' : 'three-1'} font--center`}>
                    <div className='mb--30'>
                        <h3 className='fs--30 pd--10 font--center min--height'>Databases</h3>
                    </div>
                    <div className='font--center flex'>
                        <div className='width--column-two-1 mr--5'>
                            <SkillCard title={db[0].title} url={db[0].url} />
                        </div>
                        <div className='width--column-two-1'>
                            <SkillCard title={db[1].title} url={db[1].url} />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Skill

const pl = [
    {
        "title": "Java",
        "url": "../icons/icons8-java.svg"
    },
    {
        "title": "Javascript",
        "url": "../icons/icons8-javascript.svg"
    },
    {
        "title": "C#",
        "url": "../icons/icons8-c.svg"
    },
    ,
    {
        "title": "Python",
        "url": "../icons/icons8-python.svg"
    },
]

const lib = [
    {
        "title": "React JS",
        "url": "../icons/icons8-react.svg"
    },
    {
        "title": "SCSS",
        "url": "../icons/icons8-sass.svg"
    },
    {
        "title": "Next JS",
        "url": "../icons/nextjs-icon-svgrepo-com.ico"
    },
    {
        "title": "Flask",
        "url": "../icons/icons8-flask.svg"
    },
    {
        "title": "Node JS",
        "url": "../icons/icons8-nodejs.svg"
    },
    {
        "title": "Sci-kit learn",
        "url": "../icons/Scikit_learn_logo_small.ico"
    }
]

const db = [
    {
        "title": "My SQL",
        "url": "../icons/icons8-mysql.svg"
    },
    {
        "title": "MongoDB",
        "url": "../icons/icons8-mongodb.svg"
    }
]