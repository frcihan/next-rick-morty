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
      <h1>Welcome to Rick and Morty Website!</h1>

      <style jsx>{`
        h1 {
          text-align: center;
          background: pink;
        }
        
      `}</style>
      <style global jsx>{`
        body {
          background: url("https://i.pinimg.com/originals/d4/0c/ea/d40cea0d3893378e7a96e441452dfcaf.jpg") no-repeat;
          background-size: cover;
        }
        
      `}</style>

    </Layout>
  )
}

export default HomePage
