/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'

import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

import './Layout.css'
import './Fonts.css'

const Layout = props => {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
