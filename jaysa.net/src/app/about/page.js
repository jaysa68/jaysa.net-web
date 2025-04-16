import Image from'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.innerContainer}>
      <div className={styles.halfDiv}>
        <p className={styles.text}>

	Hi! My name is Jaysa Garcia. I'm a third-year undergraduate student at
	  UC Berkeley. I study English and Computer Science. I'll be working as
	  an intern on infrastructure and DevOps stuff at <Link
	  className={styles.pLink}
	  href="https://en.wikipedia.org/wiki/Blackhawk_Network_Holdings">
	  Blackhawk Network</Link> this summer.

        <br/><br/>

        When I'm not in class, I'm nearly always at the
        <Link className={styles.pLink} href="https://www.ocf.berkeley.edu/"> Open Computing Facility</Link>,
        a student-run computer lab which I love very dearly. I also have my part-time campus job with the <Link
        href="https://csf.berkeley.edu/" className={styles.pLink}>Committee For Student Fees</Link>.

        <br/><br/>

        I grew up right on the edge of Turlock, which is a mid-sized
        town in the Central Valley of California. In high school, I was co-president of the Game
        Club (both board and video games) and played clarinet in the marching band.
        When I got home, I'd join a voice chat with my friends and play more games
        until late into the night. I've been a bit too busy in college to continue
        this habit... but I'll bring it back soon.
        </p>
    </div>

    <div className={styles.imageBox} title="my rendition of the OCF mascot, Waddles">
      <div className={styles.quarterBox}> 
        <img className={styles.penguinPic} src="/real-waddles.png" />
      </div>
      <div className={styles.quarterBox} title="at any given moment.....im probably doing this"> 
        <Image 
          src="/jaysa-pics/about-to-fail-midterm.jpg" 
          className={styles.perpendicularPic}
          alt="jaysa at an ocf computer"
          width={400}
          height={400}
        />
      </div>
      <div className={styles.quarterBox} title="attending the beach"> 
        <Image 
          src="/jaysa-pics/beach-thumbs-up.jpg" 
          className={styles.perpendicularPic}
          alt="jaysa standing at the beach"
          width={250}
          height={250}
        />
      </div>
      <div className={styles.quarterBox} title="every dollar from students and their families should be spent wisely!"> 
        <img className={styles.csfPic} src="/csf.png" />
      </div>
    </div>

  </div>
  )
}

// add Contact card & friends list
