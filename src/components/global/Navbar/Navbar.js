import React from 'react'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header>
      <div className={styles.navLeft}>
        <a href='/'
          target='_blank'
          rel='noreferrer'
          className={styles.aresLogo}
          >
          ARES
        </a>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href='/'>New Arrivals</a></li>
          <li><a href='/'>Brands</a></li>
          <li><a href='/'>Launches</a></li>
          <li><a href='/'>Preloved</a></li>
          <li><a className={styles.saleItem} href='/'>Sale</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
