import Link from 'next/link'

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Home Page</a>
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
          color: white;
          margin-left: 20px;
          font-size: 1.5rem;
          font-family: sans-serif;
          text-decoration: none;
        }
      `}</style>
    </nav>
  )
}

export default Navigation
