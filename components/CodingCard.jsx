'use client'
import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn, slideIn } from '@/motion'
import useCheckMobileScreen from './useCheckMobileScreen'
const CodingCard = (props) => {
    const {isMobile} = useCheckMobileScreen()
    return (
        <div>

            <motion.div 
            variants={fadeIn('up', 'spring', props.index * 0.5, 1)}
            className={`coding--card flex flex--align-items-center flex--justify-content-between`}
            >
                <div className='coding--title--section'>
                    <img className='coding--icon pd--5' src={props.url} />
                    {
                        !isMobile ?
                        <a className='coding--text pd--5 '>{props.title}</a>
                        : null
                    }
                </div>
                <div className={`${isMobile ? '' : 'flex'} coding--card-group`}>
                    <div className={`coding--handle font--center ${isMobile ? '' : 'width--column-two-1'} ${isMobile ? 'mb--15' : ''}`}>
                        <a href={props.link} className='coding--handle--text' target="_blank">
                            {props.handle}
                        </a>
                    </div>
                    <div className={`coding--desc font--center ${isMobile ? '' : 'width--column-two-1'}`}>
                        <p>
                            {props.desc}
                        </p>
                    </div>
                </div>
            </motion.div>


        </div>
    )
}

export default CodingCard
