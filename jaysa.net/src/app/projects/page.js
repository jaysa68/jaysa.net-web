import Image from'next/image';
import styles from '../styles/Projects.module.css';
import Link from 'next/link';

import ProjectBox from '../_components/projectBox.js';

export default function Projects() {
  return (
  <div className={styles.projectsWrapper}>
    <ProjectBox title="My Homelab">
        <li className={styles.factsLi}><a className={styles.link} href="https://huniebee.jaysa.net/status/all">Status</a></li>
        <li className={styles.factsLi}>It hosts this website, backups, and a few other services. Also, it's a good place for testing new things.</li>
        <li className={styles.factsLi}>If you are a friend, I'd be happy to host a game server or a site for you for free! Just message me. (I cannot guarantee 100% uptime... but I can guarantee I will try my best) </li>
    </ProjectBox>
  </div>
  )
}
