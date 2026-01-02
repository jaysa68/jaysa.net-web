import styles from '../styles/Header.module.css';
import Link from 'next/link'

export function HeaderLink({ name, url }) {
  return (
    <Link className={styles.headerLink} href={url}>{name}</Link>
  )
}

export default function Header() {
  return (
    <div className={styles.container}>
      <HeaderLink
        className={styles.siteName}
        name="jaysa.net"
        url="/"
      />
      <div className={styles.headerTabs}>
        <HeaderLink
          name="about"
          url="/about"
        />
        <HeaderLink
          name="homelab"
          url="/homelab"
        />
        <HeaderLink
          name="emoticons"
          url="/emoticons"
        />
        <HeaderLink
          name="blog"
          url="http://blog.jaysa.net"
        />
      </div>
    </div>
  )
}
