import "../styles/globals.css"
import Navigation from "../components/Navigation"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next Manager</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
