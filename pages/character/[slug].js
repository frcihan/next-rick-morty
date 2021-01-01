import Head from 'next/head'
import Layout from '../../components/layout'
import slug from "slug"

function CharacterDetail({ character }) {
  return (
    <Layout>
      <Head>
        <title>Character Page</title>
      </Head>

      <div className="wrapper">
        <figure>
            <img src={character.image}/>
        </figure>
        <div className="info">
          <h1>{character.name}</h1>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Location: {character.location?.name}</p>
          <p>Number of Episodes: {character.episode.length}</p>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          margin-top: 5%;
          display: flex;
          justify-content: space-around;
        }
        img {
          border-radius: 10px;
        }
        .info {
          font-family: sans-serif;
          width: 60%;
          margin-left: 10%;
        }
        h1 {
          font-size: 4rem;
        }
        p {
          font-size: 2rem;
          margin: 4%;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await fetch('https://rickandmortyapi.com/api/character')
  const characters = await data.json()
  
  const paths = characters.results.map((character) => {
      return { params: { slug: `${slug(character.name)}-${character.id}` } }
    })

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params }) {
  const id = params.slug.split("-").slice(-1)[0]

  const data = await fetch('https://rickandmortyapi.com/api/character/' + id )
  const character = await data.json()

  return {
    props: {
      character
    }
  }
}

export default CharacterDetail
