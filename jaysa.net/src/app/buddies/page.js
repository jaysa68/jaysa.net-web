import Image from'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import FriendsList from '../_components/friendsList.js'

export default function Home() {
  return (
    <div className={styles.innerContainer}>
      <div className={styles.innerFriendBox}>
         <FriendsList />
      </div>
    </div>
  )
}

// add Contact card & friends list
