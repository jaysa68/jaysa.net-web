import Image from'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <p className={styles.text}>

    Hi! My name is Jaysa Garcia. I'm a second-year undergraduate student at UC
    Berkeley. I study English and, if they'll let me, Computer Science. 

    <br/><br/>

    When I'm not in class, I'm involved at a student-run computer lab called
    the <Link href="https://www.ocf.berkeley.edu/">Open Computing Facility</Link>,
    which I love very dearly. I also have my on-campus job with the <Link
    href="https://csf.berkeley.edu/">Committee For Student Fees</Link>, where I do
    a lot of student fee related work, if you can believe it. My third thing: I
    volunteer for <Link href="https://sweplusplus.github.io/">SWE++</Link>, a weekly class that teaches coding to middle school
    girls.

    <br/><br/>

    I grew up right on the edge of Turlock, California, which is a mid-sized
    town in the Central Valley. In high school, I was co-president of the Game
    Club (both board and video games) and played clarinet in the marching band.
    When I got home, I'd join a voice chat with my friends and play more games
    until late into the night. I've been a bit too busy in college to continue
    this habit... but I'll bring it back soon.

    <br/><br/>

    I built this website with React and Next.js, and it is running out of my
    homelab (a re-purposed gaming PC) using NGINX and Docker. I will keep
    working on it :)

    </p>
  )
}

// add Contact card & friends list
