import Image from'next/image';
import styles from '../styles/Projects.module.css';
import Link from 'next/link';

import ProjectBox from '../_components/projectBox.js';

export default function Projects() {
  return (
  <div>
  <p>WORK IN PROGRESS. NOT ALL LINKS WORK YET</p>
  <div className={styles.projectsWrapper}>

    <ProjectBox title="JAYSACRAFT" subtitle="minecraft.jaysa.net" imgSrc="/homelab-thumbnails/controller.png">
    </ProjectBox>
    <ProjectBox title="HUNIEBEE" subtitle="huniebee.jaysa.net" imgSrc="/homelab-thumbnails/rose.png" projLink="https://huniebee.jaysa.net/status/all">
    </ProjectBox>
    <ProjectBox title="RSS READER" subtitle="miniflux.jaysa.net" imgSrc="/homelab-thumbnails/frisbee.png" projLink="https://miniflux.jaysa.net">
    </ProjectBox>
    <ProjectBox title="MY BLOG" subtitle="blog.jaysa.net" imgSrc="/homelab-thumbnails/notebook.png" projLink="https://blog.jaysa.net">
    </ProjectBox>
    <ProjectBox title="MY WEBSITE" subtitle="jaysa.net" imgSrc="/homelab-thumbnails/bow.png" projLink="https://jaysa.net">
        <li className={styles.factsLi}><a className={styles.link} href="https://github.com/jaysa68/jaysa.net-web">Source code</a> and <a className={styles.link} href="https://github.com/morhetz/gruvbox">color scheme</a></li>
        <li className={styles.factsLi}>I made jaysa.net so I could learn React and Next.js (I've still got a ways to go). Also, many of my friends have cool personal websites, and I wanted to have one too :^)</li>
        <li className={styles.factsLi}>Aside from the websites in The Buddy Box, I spend a lot of time admiring <a className={styles.link} href="https://owltastic.com/">owltastic.com</a> and nearly everything that is on <a className={styles.link} href="https://neocities.org/">neocities.org</a>. I would also like to incorporate more ideas from <a className={styles.link} href="https://owickstrom.github.io/the-monospace-web/">The Monospace Web</a>.
        </li>
    </ProjectBox>
    <ProjectBox title="CSF PROJECT" subtitle="berkeleyfee.org" imgSrc="/homelab-thumbnails/graduation-cap.png" projLink="https://berkeleyfee.org">
        <li className={styles.factsLi}>A website I made for the Committee on Student Fees to visualize how UC Berkeley allocates student dollars. It uses React, Next.js, and also the Recharts library.</li>
        <li className={styles.factsLi}>It's more of a proof-of-concept at the moment... I'll polish it up soon. I'd like to make it great before I graduate.</li>
    </ProjectBox>
    <ProjectBox title="OUTLINE" subtitle="docs.jaysa.net" imgSrc="/homelab-thumbnails/pens.png" projLink="https://docs.jaysa.net">
    </ProjectBox>
  </div>
  <hr/>
  <div className={styles.projectsWrapper}>
    <ProjectBox title="KYU" subtitle="Arch Linux Server" imgSrc="/homelab-thumbnails/kyu.png">
    </ProjectBox>
    <ProjectBox title="CELESTE" subtitle="NGINX Reverse Proxy" imgSrc="/homelab-thumbnails/celeste.png">
    </ProjectBox>
    <ProjectBox title="MOXIE" subtitle="Proxmox Node" imgSrc = "/homelab-thumbnails/moxie.png">
    </ProjectBox>
    <ProjectBox title="JEWN" subtitle="Proxmox Node" imgSrc="/homelab-thumbnails/jewn.png">
    </ProjectBox>
    <ProjectBox title="VENUS" subtitle="Framework 13" imgSrc="/homelab-thumbnails/venus.png">
    </ProjectBox>
    <ProjectBox title="AUDREY" subtitle="Thinkpad X220T" imgSrc="/homelab-thumbnails/audrey.png">
    </ProjectBox>
  </div>
  </div>
  )
}
