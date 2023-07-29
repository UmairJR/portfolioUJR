import React from 'react'

const SkillCard = (props) => {
    return (
        <div className='skill--wrapper'>
            <div className='skill--card flex '>
                <div className='mb--10'>
                    <img src={props.url} />
                </div>

                <a className='skill--text'>{props.title}</a>
            </div>
        </div>
    )
}

export default SkillCard

