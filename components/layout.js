import Navigation from './navigation'
import Head from 'next/head'


function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Rick and Morty</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>
      {/* <footer>design by frcihan</footer> */}


      <style jsx>{`
        body {
        
        }
      `}</style>
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        body {
          width: 80%;
          margin: auto;
        }
        
      `}</style>




    </div>
  )
}

export default Layout
