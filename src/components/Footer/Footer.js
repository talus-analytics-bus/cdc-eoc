import React from 'react'

import * as styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <a target="_blank" rel="noopener noreferrer" href="https://georgetown.edu/">
      <img
        src="/img/GHSS logo.png"
        alt="Georgetown University Logo"
        className={styles.georgetown}
      />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://talusanalytics.com//"
    >
      <img src="/img/IDEA_Logo.png" alt="Talus Analytics Logo" />
    </a>
  </footer>
)

export default Footer
