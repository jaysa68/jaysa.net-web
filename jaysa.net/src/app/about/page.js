import Image from'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.innerContainer}>
      <div className={styles.halfDiv}>
        <p className={styles.text}>

        Hi! My name is Jaysa Garcia. I'm an incoming third-year undergraduate student at UC
        Berkeley. I study English and Computer Science. 

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
        </p>
    </div>

    <div className={styles.imageBox}>
      <div className={styles.quarterBox}> 
        <img className={styles.penguinPic} src="/real-waddles.png" />
      </div>
      <div className={styles.quarterBox}> 
        <Image 
          src="/hdmi-jaysa.jpg" 
          className={styles.perpendicularPic}
          alt="jaysa plugging in a monitor"
          width={325}
          height={433}
        />
      </div>
      <div className={styles.quarterBox}> 
        <Image 
          src="/fox_grove_park.png" 
          className={styles.foxGrovePic}
          alt="jaysa feeding some cats"
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
