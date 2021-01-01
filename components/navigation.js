import Link from 'next/link'

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Home Page</a>
      </Link>
      <Link href="/characters">
        <a>Characters Page</a>
      </Link>
      <Link href="/about">
        <a>About Page</a>
      </Link>

      <style jsx>{`
        nav {
          margin: 0;
          padding: 10px;
          background: black;
        }
        a {
          color: red;
          margin-left: 20px;
        }
      `}</style>
      <style global jsx>{`
        
      `}</style>

    </nav>
  )
}

export default Navigation
