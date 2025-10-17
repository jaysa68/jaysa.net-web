import styles from '../styles/Home.module.css'
import Link from 'next/link'

export function FriendBadge({ name, image, url }) {
  return (
    <Link href={url}>
      <img
        className={styles.friendBadge}
        src={image}
        alt={name}
      />
    </Link>
  )
}

export default function FriendsList() {
  return (
    <>
    <FriendBadge 
      name="ocf"
      image="/88x31/ocf.png"
      url="https://www.ocf.berkeley.edu/"
    />
    <FriendBadge 
      name="ocf decal"
      image="/88x31/ocfdecal.png"
      url="https://ocf.io/decal"
    />
    <FriendBadge 
      name="bencuan"
      image="/88x31/bencuan.gif"
      url="https://bencuan.me/"
    />
    <FriendBadge 
      name="rjz"
      image="/88x31/rjz.png"
      url="https://rjz.lol/"
    />
    <FriendBadge 
      name="kinn"
      image="/88x31/kinn.gif"
      url="https://classic.kinn.dev"
    />
    <FriendBadge 
      name="oliverni"
      image="/88x31/oliver.png"
      url="https://oliver.ni/"
    />
    <FriendBadge 
      name="trinityc"
      image="/88x31/yolkgirl.gif"
      url="https://trinityjchung.com"
    />
    <div style={{width: "102px", height: "45px", display: "flex", 'align-items': "center", 'justify-content': "center"}}>
	  <p>The Buddy Box</p>
    </div>
    <FriendBadge 
      name="adym"
      image="/88x31/adym.png"
      url="https://anna.dymchenko.com/"
    />
    <FriendBadge 
      name="lemurseven"
      image="/88x31/michael.gif"
      url="https://michaellisano.com"
    />
    <FriendBadge 
      name="tiffsun"
      image="/88x31/tiffsun.png"
      url="https://vimeo.com/943936691"
    />
    <FriendBadge 
      name="njha"
      image="/88x31/njha.png"
      url="https://njha.dev"
    />
    <FriendBadge 
      name="kati"
      image="/88x31/kati.gif"
      url="https://solilokii.neocities.org"
    />
    <FriendBadge 
      name="storce"
      image="/88x31/storce.png"
      url="https://joewang.me"
    />
    <FriendBadge 
      name="leo"
      image="/88x31/leo.gif"
      url="https://6c656f.io"
    />
    <FriendBadge 
      name="cli"
      image="/88x31/cli.png"
      url="https://chenghao.li"
    />
    <FriendBadge 
      name="sawansri"
      image="/88x31/sawansri.png"
      url="https://sawansri.com"
    />
    <FriendBadge 
      name="aly"
      image="/88x31/albert.png"
      url="https://albie.cat"
    />
    <FriendBadge 
      name="nixos"
      image="/88x31/nixos.png"
      url="https://nixos.org"
    />
    <FriendBadge 
      name="lavanya"
      image="/88x31/lavanya.png"
      url="https://lavanya.dev"
    />
    <FriendBadge 
      name="gianna caudillo"
      image="/88x31/gianna.png"
      url="https://giannacaudillo.myportfolio.com"
    />
    </>
  )
}
