import React from 'react'

const ExpCard = (props) => {
  return (
    <div>

            <div className='exp--card flex'>
                <div className='exp--title--section width--column-three-1'>
                    <h2 className='exp--text pd--5 ml--10'>{props.title}</h2>
                </div>
                <div className='exp--company width--column-two-1 font--center'>
                    <a href={props.company-link} className='exp--handle--text' target="_blank">
                        {props.company}
                    </a>
                </div>
                <div className='exp--desc width--column-two-1'>
                    <p className='padding--left'>
                        {props.desc}
                    </p>
                </div>
            </div>


        </div>
  )
}

export default ExpCard
