import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/Seo/Seo'
import Layout from '../components/Layout/Layout'
import ExpandBox from '../components/ExpandBox/ExpandBox'

import styles from '../styles/home.module.scss'

const IndexPage = ({ data }) => {
  // console.log(data.allFile.nodes.map(document => document.name + document.ext))
  const directories = [
    ...new Set(data.allFile.nodes.map(node => node.relativeDirectory)),
  ].filter(dir => dir !== 'zip')

  directories.sort((a, b) => a.localeCompare(b))

  const createDocElements = documents =>
    documents.map(document => (
      <a
        href={document.publicURL}
        aria-label="Download"
        key={document.name}
        className={styles.document}
      >
        <span className={styles[document.ext.replace('.', '')]}></span>
        <p className={styles.displayName}>
          {document.name
            .replace(/(_|doc|ppt|[0-9]|tool)/g, ' ')
            .replace(/eoc/g, 'EOC')
            .replace(/ics/g, 'ICS')
            .replace(/cdc/g, 'CDC')}
        </p>
        <p className={styles.fileName}>
          {document.name}
          {document.ext}
        </p>
        <p className={styles.size}>{document.prettySize}</p>
        {/* <a href={document.publicURL}>download</a> */}

        {/* <p>{document.ext}</p> */}
      </a>
    ))

  const categoryElements = directories.map(directory => {
    const documents = data.allFile.nodes.filter(
      node => node.relativeDirectory === directory
    )

    return (
      <ExpandBox key={directory.split('/').pop()}>
        <header className={styles.expandBoxHeader}>
          <h1>{directory.split('/').pop()}</h1>
          <p>({documents.length} files)</p>
          <a
            href="#"
            aria-label="Download Zip File"
            onClick={e => {
              e.stopPropagation()
            }}
          ></a>
        </header>
        <section className={styles.documents}>
          {createDocElements(documents)}
        </section>
      </ExpandBox>
    )
  })

  const zip = data.allFile.nodes.filter(
    node => node.relativeDirectory === 'zip'
  )[0]

  return (
    <Layout>
      <SEO title="CDC EOC Resource Portal" />
      <header className={styles.header}>
        <div className={styles.text}>
          <h1>OVERVIEW</h1>
          <h2>Who it&apos;s for and how to use this</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at.
          </p>
        </div>
        <div className={styles.image}>
          <img
            src="/img/cover-image.png"
            alt="Cover Image for An introduction to Public Health Emergency Management and Emergency Operations Centers"
          />
        </div>
      </header>
      <article className={styles.main}>
        <header>
          <h1>EOC GUIDANCE LIBRARY</h1>
          <div className={styles.quickDownload}>
            <p>Quick download</p>
            <a href={zip.publicURL}>
              Complete Library ({data.allFile.totalCount} files,{' '}
              {zip.prettySize} .zip)
            </a>
          </div>
        </header>
        <section>{categoryElements}</section>
      </article>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "documents" } }) {
      nodes {
        prettySize
        relativeDirectory
        ext
        name
        publicURL
      }
      totalCount
    }
  }
`
