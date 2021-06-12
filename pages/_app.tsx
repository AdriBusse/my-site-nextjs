import Header from '../components/Header'
import { ThemeProvider } from '../context/headerContext'
import { useTheme } from '../hooks/useTheme';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen font-Staatliches">
        <div className="absolute z-50 w-full">
          <Header />
        </div>
        <div className="flex-1 overflow-x-hidden ">
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
