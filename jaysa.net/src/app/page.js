import styles from './styles/Home.module.css';
import FriendsList from './_components/friendsList.js'

export const metadata = {
  title: 'jaysa.net',
  keywords: ['Jaysa', 'Jaysa Garcia']
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
               <p className={styles.cardText}><img className={styles.icon} src='/mail-icon.png' />contact@jaysa.net</p>
               <p className={styles.cardText}><img className={styles.icon} src='/signal-icon.png' />jaysa.88</p>
               <p className={styles.cardText}><img className={styles.icon} src='/github-icon.png' />jaysa68</p>
               <p className={styles.cardText}><img className={styles.icon} src='/linkedin-icon.png' />jaysa-garcia</p>
            </div>
            <div className={styles.innerFriendBox}>
               <FriendsList />
            </div>
          </div>
	</div>

    </div>
  )
}
