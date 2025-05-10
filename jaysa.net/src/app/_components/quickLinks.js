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
	  text="docs.jaysa.net"
	  url="https://docs.jaysa.net"
	/>
	<QuickLink
	  text="miniflux.jaysa.net"
	  url="https://miniflux.jaysa.net"
	/>
	<QuickLink
	  text="berkeleyfee.org"
	  url="https://berkeleyfee.org"
	/>
	<QuickLink
	  text="blog.jaysa.net"
	  url="https://blog.jaysa.net"
	/>
	<QuickLink
	  text="minecraft.jaysa.net"
	  url="https://mcsrvstat.us/server/minecraft.jaysa.net"
	/>
	<QuickLink
	  text="huniepop.wiki"
	  url="https://huniepop.wiki"
	/>
      </ul>
    </div>
  )
}
