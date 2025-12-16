import Image from'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.innerContainer}>
      <div className={styles.halfDiv}>
        <p className={styles.text}>

        ╔═══════════════*.·:·.☽✧&nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;✧☾.·:·.*═══════════════╗
        <br/>

	Hi! My name is Jaysa Garcia. I'm a fourth-year undergraduate student at
	  UC Berkeley. I study English and Computer Science.

        <br/>-──────────────────── ⋆⋅☆⋅⋆ ───────────────────-<br/>

        When I'm not in class, I'm nearly always at the
        <Link className={styles.pLink} href="https://www.ocf.berkeley.edu/"> Open Computing Facility</Link>,
        a student-run computer lab which I love very dearly. I'm also working part-time on platform engineering type stuff at <Link
        href="https://www.arini.ai/" className={styles.pLink}>Arini</Link> until May.

        <br/>⠄⠂ ⠂⠄⠄⠂⠁⠁⠂⠄⠄⠂⠁⠁⠂⠄⠄⠂ ⠂⠄⠄⠂⠁⠁⠂⠄⠄⠂⠁⠁⠂⠄⠄⠂ ⠂⠄⠂⠁⠁⠂⠄⠂☆<br/>

        I grew up right on the edge of Turlock, which is a mid-sized
        town in the Central Valley of California. In high school, I was co-president of the Game
        Club (both board and video games) and played clarinet in the marching band.
        When I got home, I'd join a voice chat with my friends and play more games
        until late into the night. I've been a bit too busy in college to continue
        this habit... but I'll bring it back soon.


        ╚═══════════════*.·:·.☽✧&nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;✧☾.·:·.*═══════════════╝
        ——————————
        <br/>
        ┊┊┊┊ ➶ ❁۪ ｡˚  ✧
        <br/>
        ┊┊┊✧ ⁺    ⁺ 　°
        <br/>
        ┊┊❁ཻུ۪۪♡ ͎. ｡˚  　　°
        <br/>
        ┊┊.
        <br/>
        ┊ ➶ ｡˚  　　°
        <br/>
        *.           *    ·

        </p> </div>

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
      <div className={styles.quarterBox} title="a parrot... because they talk back to you or something... like a voice agent ooooo"> 
        <img className={styles.csfPic} src="/arini-gruvbox.png" />
      </div>
    </div>

  </div>
  )
}

// add Contact card & friends list
