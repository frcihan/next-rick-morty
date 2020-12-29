import Link from 'next/link'

import styles from "./nav.module.css"

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a style={{color: 'pink'}}>Home Page</a>
      </Link>
      <Link href="/about">
        <a className={styles.link}>About Page</a>
      </Link>
    </nav>
  )
}

export default Navigation
