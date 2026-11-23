import styles from '../styles/Home.module.css'
import Link from 'next/link'

export function QuickLink({ text, url }) {
  return (
    <li>
      <Link className={styles.Link} href={url}>{text}</Link>
    </li>
  )
}

export default function QuickLinks() {
  return (
    <div className={styles.quickLinks}>
      <ul>
	<QuickLink
	  text="chat.jaysa.net"
	  url="https://chat.jaysa.net"
	/>
	<QuickLink
	  text="rss.jaysa.net"
	  url="https://rss.jaysa.net"
	/>
	<QuickLink
	  text="minecraft.jaysa.net"
	  url="https://blog.jaysa.net/2026/11/16/turlockmc/"
	/>
      </ul>
    </div>
  )
}
