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
      <div>
        <HeaderLink
          name="about"
          url="/about"
        />
        <HeaderLink
          name="projects"
          url="/projects"
        />
        <HeaderLink
          name="blog"
          url="http://blog.jaysa.net"
        />
      </div>
    </div>
  )
}
