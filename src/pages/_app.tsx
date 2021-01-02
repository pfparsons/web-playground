import '../styles/globals.css'
import { AppProps } from 'next/app'
import { useEffect } from 'react'


function App({ Component, pageProps }: AppProps) : JSX.Element {
    useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);



  return <Component {...pageProps} />
}
 
export default App
