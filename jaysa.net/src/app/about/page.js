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

	Hi! My name is Jaysa Garcia. I live in San Francisco and I'm a programmer at <Link ref="https://www.arini.ai/"
	className={styles.pLink}>Arini</Link>.

        <br/>-──────────────────── ⋆⋅☆⋅⋆ ───────────────────-<br/>

        When I'm not at work, I attend the [Bay Area Nix User Group](https://www.bayareanixos.com/) meetups and work on [my homelab setup](https://github.com/jaysa68/jaysaflake). I also frequent second-hand stores like [Out of the Closet](https://outofthecloset.org/) and [Crossroads](https://crossroadstrading.com/) looking for cute stuff.


        <br/>⠄⠂ ⠂⠄⠄⠂⠁⠁⠂⠄⠄⠂⠁⠁⠂⠄⠄⠂ ⠂⠄⠄⠂⠁⠁⠂⠄⠄⠂⠁⠁⠂⠄⠄⠂ ⠂⠄⠂⠁⠁⠂⠄⠂☆<br/>

	I graduated with my bachelor's degree from U.C. Berkeley in the spring
	of 2026, and I majored in English and Computer Science. I spent a lot
	of time at the <Link className={styles.pLink}
	href="https://www.ocf.berkeley.edu/"> Open Computing Facility</Link>, a
	student-run computer lab which I love very dearly.

        I grew up right on the edge of Turlock, which is a mid-sized
        town in the [Central Valley of California](https://en.wikipedia.org/wiki/San_Joaquin_Valley). In high school, I was co-president of the Game
        Club (both board and video games) and played clarinet in the marching band. I still go home to visit about once a month to be with my friends and fam        ily and to go to church with my mom. I've been a bit too busy with work and moving in to be there as much as I'd like... but I'll bring it back soon.


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
