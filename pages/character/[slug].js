import Head from 'next/head'
import Layout from '../../components/layout'
import Link from 'next/link'
import slug from "slug"

function CharacterDetail({ character }) {
  return (
    <Layout>
      <Head>
        <title>Character Page</title>
      </Head>
      <h1>Hello {character.name}</h1>

      <figure>
          <img src={character.image}/>
      </figure>

      <style jsx>{`
        h1 {
          color: white;
          background-color: blue;
        }
        body {
          background: black;
        }
      `}</style>
      <style global jsx>{``}</style>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await fetch('https://rickandmortyapi.com/api/character')
  const characters = await data.json()
//   console.log(characters)

  
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

  const data = await fetch(
    'https://rickandmortyapi.com/api/character/' + id
  )
  const character = await data.json()
  console.log(character)

  return {
    props: {
      character
    }
  }
}

export default CharacterDetail
