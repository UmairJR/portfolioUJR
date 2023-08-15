import React from 'react'
import SocialCard from './SocialCard'
import useCheckMobileScreen from './useCheckMobileScreen'

const Footer = () => {
    return (
        <footer className='bg--footer container--fluid color--white font--family pt--50 pb--30'>
            <div className='flex footer--group'>
                <div className='width--column-two-1 footer--group-wrap'>
                    <h1 className="footer--heading fs--50">
                        <span className="font--bold">Dont be a stranger!</span>
                        <small>👋</small>
                    </h1>
                    <p className="connectwith--me mt--10 fs--25">Connect with me online</p>
                </div>
                <div className='width--column-two-1 pl--20 footer--group-wrap'>
                    <div className='footer--content fs--25'>
                        <p >If you have any questions about me or my projects,
                         or (politely) argue about who is better, Messi or Ronaldo?<br/> I'm your man!
                        </p>
                        <p className='pt--30'>
                        I'm available to grab a coffee and chat! 
                        Drop a comment, question, concern, or Spotify playlist, and thanks for stopping by!
                        </p>
                        <div>
                        <h3 className='pt--30 pb--10'>Straight shot to my inbox:</h3>
                        <a><span className='footer--email '>umairjr1265@gmail.com</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex pt--50 footer--socials'>
                {
                    socials.map((element, index) => (
                        <div className='width--column-four-1' key={`socials--${index}`}>
                            <SocialCard title={socials[index].title} link={socials[index].link} url={socials[index].url} />
                        </div>
                    ))
                }
            </div>
            <div className='footer--copyright fs--20 mt--50'>
            
            DESIGNED & DEVELOPED BY 
            <span className="copyright--fancy"> Umair Shaikh.</span> ©  
            <span className="copyright--underlined copyright--underline-mask">2023</span>
            
            </div>
        </footer>
    )
}

export default Footer

const socials = [
    {
        'link': 'https://twitter.com/UmairJR11',
        'url': '../icons/icons8-twitter.svg',
        'title': '@UmairJR11',
    },
    {
        'link': 'https://www.linkedin.com/in/umair--shaikh/',
        'url': '../icons/icons8-linkedin.svg',
        'title': '@umair--shaikh',
    },
    {
        'link': 'https://github.com/UmairJR',
        'url': '../icons/icons8-github.svg',
        'title': '@UmairJR ',
    },
    {
        'link': 'https://www.instagram.com/umair_jr_soccerstar/?hl=en',
        'url': '../icons/icons8-instagram.svg',
        'title': '@umair_jr_soccerstar',
    }
]