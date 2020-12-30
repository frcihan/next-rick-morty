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
      <h1>Welcome to Home Page!</h1>

      <ul>
      {characters.results.map(character => (
        <li key={character.id}>
          <Link href="/character/[slug]" as={`/character/${slug(character.name)}-${character.id}`}>
            <a>{character.name}</a>
          </Link>
        </li> 
      ))}
      </ul>

      <style jsx>{`
        h1 {
          
        }
        body {
          
        }
      `}</style>
      <style global jsx>{`
        
      `}</style>

    </Layout>
  )
}

export async function getStaticProps() {

  const data = await fetch ("https://rickandmortyapi.com/api/character")
  const characters = await data.json()

  return {
    props: {
      characters
    }
  }
}

export default HomePage
