import React from 'react'

import * as styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <a target="_blank" rel="noopener noreferrer" href="https://georgetown.edu/">
      <img
        src="/img/georgetown-logo.png"
        alt="Georgetown University Logo"
        className={styles.georgetown}
      />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://talusanalytics.com//"
    >
      <p>Built By</p>
      <img src="/img/talus-logo.png" alt="Talus Analytics Logo" />
    </a>
  </footer>
)

export default Footer
