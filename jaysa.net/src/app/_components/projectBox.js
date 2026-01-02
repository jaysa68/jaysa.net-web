import styles from '../styles/Projects.module.css';
import Image from'next/image';

export default function ProjectBox( {title, subtitle, imgSrc, projLink} ) {
  return (
  <div className={styles.outerBox}>
  <a href={projLink}>
    <div className={styles.projectBox}>
      <Image 
        src={imgSrc}
        className={styles.homelabThumbnail}
        width={100}
        height={100}
      />
      <div className={styles.infobox}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
    </a>
  </div>
  );
}
