import Head from 'next/head'
import Layout from '../components/layout'
import Link from "next/link"
import slug from "slug"

function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>

      <style jsx>{`
        
      `}</style>
      <style global jsx>{`
        body {
          background: black url("https://wallpapercave.com/wp/wp1822727.jpg") no-repeat;
          background-position: center 0%;
          {/* background-size: cover; */}
        }
        
      `}</style>

    </Layout>
  )
}

export default HomePage
