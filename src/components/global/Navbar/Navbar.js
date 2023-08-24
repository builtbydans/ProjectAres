import React from 'react'
import styles from './Navbar.module.css';
import AresLogo from '../../../assets/images/ares-logo.png'

const Navbar = () => {
  return (
    <header>
      <div className={styles.navLeft}>
        <a href='/'
          target='_blank'
          rel='noreferrer'
          >
          <img
            className={styles.aresLogo}
            src={AresLogo}
            alt=""
            srcset=""
          />
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
