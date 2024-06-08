import styles from '../styles/Projects.module.css';

export default function ProjectBox( {children, title} ) {
  return (
  <div className={styles.outerBox}>
    <div className={styles.projectBox}>
      <p className={styles.title}>{title}</p>
        <ul className={styles.facts}>
         {children}
        </ul>
    </div>
  </div>
  );
}
