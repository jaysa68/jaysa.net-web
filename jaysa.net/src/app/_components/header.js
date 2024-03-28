import styles from '../styles/Header.module.css';

export function HeaderLink({ name, url }) {
  return (
    <a className={styles.headerLink} href={url}>{name}</a>
  )
}

export default function Header() {
  return (
    <div className={styles.container}>
      <p className={styles.siteName}>
        jaysa.net
      </p>
      <div>
        <HeaderLink
          name="about"
          url="https://bencuan.me/"
        />
        <HeaderLink
          name="projects"
          url="https://bencuan.me/"
        />
        <HeaderLink
          name="blog"
          url="https://bencuan.me/"
        />
      </div>
    </div>
  )
}
