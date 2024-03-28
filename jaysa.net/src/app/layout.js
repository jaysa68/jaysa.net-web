import Header from './_components/header'
import Container from './_components/container'
import styles from './styles/global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
