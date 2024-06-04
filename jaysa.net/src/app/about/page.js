import Image from'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.innerContainer}>
      <div className={styles.halfDiv}>
        <p className={styles.text}>

        Hi! My name is Jaysa Garcia. I'm a second-year undergraduate student at UC
        Berkeley. I study English and, if they'll let me, Computer Science. 

        <br/><br/>

        When I'm not in class, I'm involved at a student-run computer lab called
        the <Link className={styles.pLink} href="https://www.ocf.berkeley.edu/">Open Computing Facility</Link>,
        which I love very dearly. I also have my on-campus job with the <Link
        href="https://csf.berkeley.edu/" className={styles.pLink}>Committee For Student Fees</Link>, where I do
        a lot of student fee related work, if you can believe it. Finally, I
        volunteer for <Link className={styles.pLink} href="https://sweplusplus.github.io/">SWE++</Link>, a weekly class that teaches coding to middle school
        girls.

        <br/><br/>

        I grew up right on the edge of Turlock, which is a mid-sized
        town in the Central Valley of California. In high school, I was co-president of the Game
        Club (both board and video games) and played clarinet in the marching band.
        When I got home, I'd join a voice chat with my friends and play more games
        until late into the night. I've been a bit too busy in college to continue
        this habit... but I'll bring it back soon.

        <br/><br/>

        I built this website with React and Next.js, and it is running out of my
        homelab (a re-purposed gaming PC) using NGINX and Docker. I will keep
        working on it :)

        </p>
    </div>

    <div className={styles.imageBox}>
      <div className={styles.quarterBox}> 
        <img className={styles.penguinPic} src="/real-waddles.png" />
      </div>
      <div className={styles.quarterBox}> 
        <Image 
          src="/perpendicular.jpg" 
          className={styles.perpendicularPic}
          alt="i am sideways"
          width={330}
          height={440}
        />
      </div>
      <div className={styles.quarterBox}> 
        <Image 
          src="/fox_grove_park.png" 
          className={styles.foxGrovePic}
          alt="i am sideways"
          width={205}
          height={168}
        />
      </div>
      <div className={styles.quarterBox}> 
        <img className={styles.csfPic} src="/csf.png" />
      </div>
    </div>

  </div>
  )
}

// add Contact card & friends list
