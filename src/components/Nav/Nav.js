import React from 'react'
import { Link } from 'gatsby'

import styles from './Nav.module.scss'

const Nav = () => {
  const navbarRightContent = React.useRef()

  //   const [dropHiderStyle, setDropHiderStyle] = React.useState({
  //     height: 0,
  //     padding: '0 15px',
  //   })
  //
  //   const toggleNav = () => {
  //     if (dropHiderStyle.height === 0) {
  //       setDropHiderStyle({
  //         height: navbarRightContent.current.offsetHeight + 30,
  //         padding: 15,
  //       })
  //     } else {
  //       setDropHiderStyle({ height: 0, padding: '0 15px' })
  //     }
  //   }

  const dropHiderStyle = {}

  return (
    <nav className={styles.mainNav}>
      <Link to="/" aria-label="home" className={styles.navbarLogo}></Link>
      <Link to="/" className={styles.navbarLeftText}>
        <h1>&nbsp;</h1>
        <h2>PUBLIC HEALTH</h2>
        <h3>EOC Guidance</h3>
      </Link>

      <div className={styles.navbarRightHider} style={dropHiderStyle}>
        <div className={styles.navbarRight} ref={navbarRightContent}>
          <ul>
            <li>
              <Link activeClassName={styles.active} to="/">
                Home
              </Link>
              <Link activeClassName={styles.active} to="/about/">
                About
              </Link>
              <Link
                activeClassName={styles.active}
                to="/contact/"
                className={styles.button}
              >
                Contact&nbsp;Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* <button */}
      {/*   className={styles.menuButton} */}
      {/*   onClick={toggleNav} */}
      {/*   aria-label="Menu" */}
      {/* ></button> */}
    </nav>
  )
}

export default Nav
