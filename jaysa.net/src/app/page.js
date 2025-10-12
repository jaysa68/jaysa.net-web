import styles from './styles/Home.module.css';
import FriendsList from './_components/friendsList.js'
import QuickLinks from './_components/quickLinks.js'

export const metadata = {
  title: 'jaysa.net',
  keywords: ['Jaysa', 'Jaysa Garcia', 'jaysa.net'],
  description: 'Jaysa\'s personal website. Check out links to other things I\'ve worked on, the websites of my friends inside The Buddy Box, and other extra details about me :)'
}


const overflowStyle = {
  wrapper: {
    justifyContent: 'center',
  },
  container: {
    position: 'absolute',
    alignSelf: 'center'
  }
}

//<p className={styles.cardText}><img className={styles.icon} src='/github-icon.png' />jaysa68</p>
//<p className={styles.cardText}><img className={styles.icon} src='/linkedin-icon.png' />jaysa-garcia</p>

import Image from'next/image'

export default function Home() {
  return (
    <div className={styles.imageWrapper}>
        <Image
          src='/room.jpg'
          alt='my room'
          placeholder='empty'
          quality={100}
          priority={true}
          width='1000'
          height='1000'
            style={{
              width: 'auto',
              height: '100%',
            }}
          object-fit='contain'
        />

	<div className={styles.centerContainer}>
          <div className={styles.cardBox}>
            <div className={styles.card}>
               <p className={styles.cardTitle}>Finding Jaysa</p>
               <a href="mailto:contact@jaysa.net"><p className={styles.cardText}><img className={styles.icon} src='/envelope.svg' />contact@jaysa.net</p></a>
               <a href="https://signal.me/#eu/DV4BfjYvhqW6hsIRUiwMnZ6mOFa1ilhJ6RQWW2Gpfgu0DbAjKjtGmJaLclQMpAlp"><p className={styles.cardText}><img className={styles.icon} src='/signal.svg' />jaysa.88</p></a>
               <a href="https://github.com/jaysa68"><p className={styles.cardText}><img className={styles.icon} src='/github.svg' />jaysa68</p></a>
               <a href="https://discord.com/users/202542121247440896"><p className={styles.cardText}><img className={styles.icon} src='/discord.svg' />evil_girl_making_laggy_chairs</p></a>
            </div>
            <div className={styles.innerFriendBox}>
               <FriendsList />
            </div>
	    <div>
	       <QuickLinks />
	    </div>
          </div>
	</div>

    </div>
  )
}
