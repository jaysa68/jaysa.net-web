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

	Hi! My name is Jaysa Garcia. I live in San Francisco and I'm a programmer at <Link href="https://www.arini.ai/"
	className={styles.pLink}>Arini</Link>.

        <br/>-──────────────────── ⋆⋅☆⋅⋆ ───────────────────-<br/>

        When I'm not at work, I attend the <Link className={styles.pLink} href="https://www.bayareanixos.com/">Bay Area Nix User Group</Link> meetups and work on <Link href="https://github.com/jaysa68/jaysaflake" className={styles.pLink}>my homelab setup</Link>. I also frequent second-hand stores like <Link className={styles.pLink} href="https://outofthecloset.org">Out of the Closet</Link> and <Link className={styles.pLink} href="https://crossroadstrading.com">Crossroads</Link> looking for cute stuff. I want to get my passport and visit friends in Finland soon.


        <br/>⠄⠂ ⠂⠄⠄⠂⠁⠁⠂⠄⠄⠂⠁⠁⠂⠄⠄⠂ ⠂⠄⠄⠂⠁⠁⠂⠄⠄⠂⠁⠁⠂⠄⠄⠂☆<br/>

	I graduated with my bachelor's degree from U.C. Berkeley in the spring
	of 2026, and I majored in English and Computer Science. I spent a lot
	of time at the <Link href="https://www.ocf.berkeley.edu/"
	className={styles.pLink}>Open Computing Facility</Link>, a student-run
	computer lab which I love very dearly.

        <br/>-──────────────────── ⋆⋅☆⋅⋆ ───────────────────-<br/>

        I grew up right on the edge of Turlock, which is a mid-sized
        town in the <Link className={styles.pLink} href="https://en.wikipedia.org/wiki/San_Joaquin_Valley">Central Valley of California</Link>. In high school, I was co-president of the Game
        Club (both board and video games) and played clarinet in the marching band. I still go home about once a month to be with my friends and family and to go to church with my mom. I've been a bit too busy with work and moving in to be there as much as I'd like... but I'll bring it back soon.

	<br/>


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
      <div className={styles.quarterBox} title="2 bean and cheese burritos no red sauce no onions a chips and cheese and a baja blast freeze"> 
        <Image 
          src="/jaysa-pics/graduation-jaysa.webp" 
          className={styles.perpendicularPic}
          alt="jaysa eating taco bell after college graduation"
          width={300}
          height={400}
        />
      </div>
      <div className={styles.quarterBox} title="the anthropic security then chased us off the property"> 
        <Image 
          src="/jaysa-pics/sitting-jaysa.webp" 
          className={styles.perpendicularPic}
          alt="jaysa sitting while anna takes a pic"
          width={203}
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
