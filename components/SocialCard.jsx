import React from 'react'

const SocialCard = (props) => {
    return (
        <a href={props.link} target="_blank">
            <img className='social--icon' src={props.url} />
        </a>
    )
}

export default SocialCard
