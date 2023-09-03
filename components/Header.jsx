import React, { useEffect, useRef, useState } from 'react'

const Header = () => {
  const [headerHeight, setHeaderHeight] = useState(0)
  const headerRef = useRef()

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight)
  }, [])
  
  return (
    <>
      <div className="header--placeholder" style={{height: headerHeight}}></div>
      <header className='bg--black width--column-one pd--15' ref={headerRef}>
      <div className='container--responsive pt--10 font--right pr--30' >
      {
          navLink.map((nav, index)=>(
              <a href={`#${nav.id}`} className={`fs--25 nav--link font--uppercase color--white ${navLink.length - 1 == index ? "" : "mr--20"} font--family`} key={`navLink--${index}`}>{nav.label}</a>
          ))
      }
      </div>
      </header>
    </>
  )
}

export default Header

const navLink = [
  {
    label: 'About',
    id: 'about',
  },
  {
    label: 'Skills',
    id: 'skills',
  },
  {
    label: 'Project',
    id: 'project',
  },
  {
    label: 'Experience',
    id: 'experience',
  },
  {
    label: 'Profile',
    id: 'profile',
  },
  {
    label: 'Connect',
    id: 'connect',
  }
];