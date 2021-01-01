import Link from 'next/link'
import slug from 'slug'

function card({ character }) {
  return (
    <div>
      <Link
        href="/character/[slug]"
        as={`/character/${slug(character.name)}-${character.id}`}
      >
        <img src={character.image} />
      </Link>

      <Link
        href="/character/[slug]"
        as={`/character/${slug(character.name)}-${character.id}`}
      >
        <a>{character.name}</a>
      </Link>

      <style jsx>{`
        div {
          padding: 1%;
          display: flex;
          flex-direction: column;
          border: 1px solid gray;
          border-radius: 10px;
          margin: 1%;
          background-color: rgba(0, 0, 0, 0.1);
        }
        a {
          text-align: center;
          text-decoration: none;
          color: black;
          font-family: sans-serif;
          font-weight: bold;
          font-size: 1.5rem;
        }
        img {
          border-radius: 10px;
        }
        img:hover {
            cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default card
