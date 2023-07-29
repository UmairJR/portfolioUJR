import React from 'react'

const Header = () => {
  return (
    <header className='bg--black'>
    <div className='container--responsive pt--10 font--right pr--30' >
    {
        navLink.map((nav, index)=>(
            <span className={`fs--25 nav--link font--uppercase color--white ${navLink.length - 1 == index ? "" : "mr--20"} font--family`}>{nav}</span>
        ))
    }
    </div>
    </header>
  )
}

export default Header

const navLink = ['Header', 'About', 'Contact'];