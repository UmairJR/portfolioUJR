import Coding from '@/components/Coding'
import Expirience from '@/components/Expirience'
import Hero from '@/components/Hero'
import Overview from '@/components/Overview'
import Project from '@/components/Project'
import Skill from '@/components/Skill'
import Image from 'next/image'
// import styles from '../styles/index.scss'

export default function Home() {
  return (
    <main>
    <Hero />
    <Overview />
    <Skill />
    <Project />
    <Expirience />
    <Coding />
    </main>
  )
}
