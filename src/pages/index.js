import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/Seo/Seo'
import Layout from '../components/Layout/Layout'
import ExpandBox from '../components/ExpandBox/ExpandBox'

import displayNames from '../metadata/displayNames'

import styles from '../styles/home.module.scss'

const IndexPage = ({ data }) => {
  console.log(
    data.allFile.nodes
      .filter(document => !document.name.match(/^[0-9] - /g))
      .map(
        document =>
          `${document.name + document.ext}, ${
            displayNames[document.name + document.ext]
          }`
      )
  )
  const directories = [
    ...new Set(data.allFile.nodes.map(node => node.relativeDirectory)),
  ].filter(dir => dir !== 'zip')

  const zipfiles = data.allFile.nodes.filter(
    node => node.relativeDirectory === 'zip'
  )

  directories.sort((a, b) => a.localeCompare(b))

  const createDocElements = documents =>
    documents
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(document => (
        <a
          href={document.publicURL}
          aria-label="Download"
          key={document.name}
          className={styles.document}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* {console.log(document.name)} */}
          <span className={styles[document.ext.replace('.', '')]}></span>
          <p className={styles.displayName}>
            {displayNames[document.name + document.ext]}
            {/* console.log(document.name) */}
            {/* {document.name */}
            {/*   .replace(/(_|doc|ppt|[0-9]|tool)/g, ' ') */}
            {/*   .replace(/eoc/g, 'EOC') */}
            {/*   .replace(/ics/g, 'ICS') */}
            {/*   .replace(/cdc/g, 'CDC')} */}
          </p>
          <p className={styles.fileName}>
            {document.name}
            {document.ext}
          </p>
          <p className={styles.size}>{document.prettySize}</p>
        </a>
      ))

  const categoryElements = directories.map(directory => {
    const documents = data.allFile.nodes.filter(
      node => node.relativeDirectory === directory
    )
    const sectionName = directory.split('/').pop()
    const zip = zipfiles.find(zip => zip.name === sectionName)
    return (
      <ExpandBox key={directory.split('/').pop()}>
        <header className={styles.expandBoxHeader}>
          <h1>{sectionName.replace(/[1-9] - /g, '')}</h1>
          <p>
            ({documents.length} files, {zip.prettySize})
          </p>
          <a
            href={zip.publicURL}
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

  const libraryZip = data.allFile.nodes.find(
    node =>
      (node.relativeDirectory === 'zip') &
      (node.name === 'EOC Development Tool')
  )

  return (
    <Layout>
      <SEO title="EOC Resource Portal" />
      <header className={styles.header}>
        <div className={styles.text}>
          <h1>OVERVIEW</h1>
          {/* <h2>Who it&apos;s for and how to use this</h2> */}
          <p>
            Effectively responding to and managing the COVID-19 pandemic
            requires close operational coordination across sectors. These
            response efforts rely on the key principles of emergency management,
            including coordination of efforts as typically managed by Emergency
            Operations Centers (EOCs). This site, developed by Georgetown
            University and the US Centers for Disease Control and Prevention,
            provides rapid access to training materials, checklists, and other
            resources for development and strengthening of public health
            emergency management capacities, with an emphasis on EOCs.
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
            <a href={libraryZip.publicURL}>
              Complete Library ({data.allFile.totalCount} files,{' '}
              {libraryZip.prettySize} .zip)
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
