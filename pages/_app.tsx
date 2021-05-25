import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<div className="flex flex-col h-screen">
    <div className="absolute z-50 w-full">
      <Header />
    </div>
    <div className="flex-1 overflow-x-hidden ">
      <Component {...pageProps} />
    </div>
  </div>)
}

export default MyApp
