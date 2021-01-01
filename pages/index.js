import Head from 'next/head'
import Layout from '../components/layout'
import Card from "../components/card"

function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>

      <h1>Rick and Morty</h1>

      <div>
      {characters.results.map(character => <Card key={character.id} character={character} />)}
      </div>

      <style jsx>{`
        h1 {
          text-align: center;
          font-size: 5rem;
          font-family: sans-serif;
          margin-top: 2%
        }
        div {
          padding: 2%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }
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
