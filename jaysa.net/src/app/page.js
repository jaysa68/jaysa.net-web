import Image from'next/image'

export default function Home() {
  return (
    <Image
      src='/room.png'
      width={500}
      height={500}
      alt='my room'
    />
  )
}
