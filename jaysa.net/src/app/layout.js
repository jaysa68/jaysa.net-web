import Header from './_components/header'
import styles from './styles/global.css'

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
