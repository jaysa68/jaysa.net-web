import Header from './_components/header'
import styles from './styles/global.css'

export const metadata = {
  title: 'jaysa.net',
  keywords: ['Jaysa', 'Jaysa Garcia', 'jaysa.net'],
  description: 'Jaysa\'s personal website. Check out links to other things I\'ve worked on, the websites of my friends inside The Buddy Box, and other extra details about me :)'
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
	<div className="outerContainer">
        <div className="container">
          <Header />
          {children}
        </div>
	</div>
      </body>
    </html>
  )
}
