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

    <ProjectBox title=<a className={styles.link} href="https://berkeleyfee.org">berkeleyfee.org</a>>
        <li className={styles.factsLi}>A website I made for the Committee on Student Fees to visualize how the UC Berkeley allocates student dollars. It uses React, Next.js, and also the Recharts library.</li>
        <li className={styles.factsLi}>It's more of a proof-of-concept at the moment... I'll polish it up soon. I'd like to make it great before I graduate.</li>
    </ProjectBox>

    <ProjectBox title="This Website">
        <li className={styles.factsLi}><a className={styles.link} href="https://github.com/jaysa68/jaysa.net-web">Source code</a> and <a className={styles.link} href="https://github.com/morhetz/gruvbox">Color scheme</a></li>
        <li className={styles.factsLi}>I made jaysa.net so I could learn React and Next.js (I've still got a ways to go). Also, many of my friends have cool personal websites, and I wanted to have one too :^)</li>
        <li className={styles.factsLi}>Aside from the websites in The Buddy Box, I spend a lot of time admiring <a className={styles.link} href="https://owltastic.com/">owltastic.com</a> and nearly everything that's on <a className={styles.link} href="https://neocities.org/">neocities.org</a>.
        </li>
    </ProjectBox>
  </div>
  )
}
