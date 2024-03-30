import styles from './styles/global.css'
import Image from'next/image'

export default function Home() {
  return (
    <div className="imageWrapper">
    <Image
      src='/room.png'
      alt='my room'
      quality={100}
      priority={true}
      width='1000'
      height='1000'
        style={{
          width: 'auto',
          height: '100%',
        }}
      object-fit='contain'
    />
    </div>
  )
}
