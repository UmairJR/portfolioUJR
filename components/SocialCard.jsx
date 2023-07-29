import React from 'react'

const SocialCard = (props) => {
    return (
        <div>
            <a href={props.link} target="_blank">
                <div className='social--card'>
                    <img className='social--icon pr--10' src={props.url} />
                    <a className='social--text'>{props.title}</a>
                </div>

            </a>
        </div>
    )
}

export default SocialCard
