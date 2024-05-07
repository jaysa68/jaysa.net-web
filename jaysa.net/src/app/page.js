import styles from './styles/global.css'

import Image from'next/image'

export default function Home() {
  return (
    <div className="imageWrapper">
    <Image
      src='/room.jpg'
      alt='my room'
      placeholder='empty'
      quality={50}
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
