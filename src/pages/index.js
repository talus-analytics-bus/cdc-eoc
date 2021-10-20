import React from 'react'
import { graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import SEO from '../components/Seo/Seo'
import Layout from '../components/Layout/Layout'
import Category from '../components/Category/Category'

import displayNames from '../metadata/displayNames'

import styles from '../styles/home.module.scss'

const maxNameLength = 140
const trimString = (string, fullRow) => {
  if (fullRow.length > maxNameLength) {
    return string.slice(0, maxNameLength / 2) + '...'
  } else {
    return string
  }
}

const IndexPage = ({ data }) => {
  // console.log(
  //   data.allFile.nodes
  //     .filter(document => !document.name.match(/^[0-9] - /g))
  //     .map(
  //       document =>
  //         `${document.name + document.ext}, ${
  //           displayNames[document.name + document.ext]
  //         }`
  //     )
  // )
  const directories = [
    ...new Set(data.allFile.nodes.map(node => node.relativeDirectory)),
  ].filter(dir => !['', 'zip', 'guides', 'spanish'].includes(dir))

  const spanishFiles = data.allFile.nodes.filter(
    file => file.relativeDirectory === 'spanish'
  )

  const zipfiles = data.allFile.nodes.filter(
    node => node.relativeDirectory === 'zip'
  )
  //
  //   const guides = data.allFile.nodes.filter(
  //     node => node.relativeDirectory === 'guides'
  //   )

  directories.sort((a, b) => a.localeCompare(b))

  const createDocElements = documents => {
    documents.forEach(doc =>
      console.log(
        `Filename: ${doc.name + doc.ext}, Display name: ${
          displayNames[doc.name + doc.ext]
        }`
      )
    )
    const alpha = documents.sort((a, b) =>
      displayNames[a.name + a.ext].localeCompare(displayNames[b.name + b.ext])
    )
    const moduleDescription = alpha.find(document =>
      /^Module [1-9]/.test(displayNames[document.name + document.ext])
    )

    const moduleDescriptionES = alpha.find(document =>
      /^Módulo [1-9]/.test(displayNames[document.name + document.ext])
    )

    const otherDocuments = alpha.filter(
      document =>
        !/^Module|Módulo [1-9]/.test(displayNames[document.name + document.ext])
    )
    const sorted = [moduleDescription, moduleDescriptionES, ...otherDocuments]
    return sorted.map(document => (
      <OutboundLink
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
          {trimString(
            displayNames[document.name + document.ext],
            displayNames[document.name + document.ext] +
              document.name +
              document.ext
          )}
          {/* console.log(document.name) */}
          {/* {document.name */}
          {/*   .replace(/(_|doc|ppt|[0-9]|tool)/g, ' ') */}
          {/*   .replace(/eoc/g, 'EOC') */}
          {/*   .replace(/ics/g, 'ICS') */}
          {/*   .replace(/cdc/g, 'CDC')} */}
        </p>
        <p className={styles.fileName}>
          {trimString(
            document.name,
            displayNames[document.name + document.ext] +
              document.name +
              document.ext
          )}
          {document.ext}
        </p>
        <p className={styles.size}>{document.prettySize}</p>
      </OutboundLink>
    ))
  }

  const categoryElements = directories.map(directory => {
    const documents = data.allFile.nodes.filter(
      node => node.relativeDirectory === directory
    )
    const sectionName = directory.split('/').pop()
    const zip = zipfiles.find(zip => zip.name === sectionName)

    return (
      <Category key={directory.split('/').pop()}>
        <header className={styles.expandBoxHeader}>
          <h1>{sectionName.replace(/[1-9] - /g, '')}?</h1>
          <p>
            ({documents.length} files, {zip.prettySize})
          </p>
          <OutboundLink
            href={zip.publicURL}
            aria-label="Download Zip File"
            onClick={e => {
              e.stopPropagation()
            }}
          ></OutboundLink>
        </header>
        <section className={styles.documents}>
          {createDocElements(documents)}
        </section>
      </Category>
    )
  })

  const libraryZip = data.allFile.nodes.find(
    node =>
      (node.relativeDirectory === 'zip') &
      (node.name === 'EOC Development Tool')
  )

  const guidanceZip = data.allFile.nodes.find(
    node =>
      (node.relativeDirectory === 'zip') &
      (node.name === 'EOC Development Tool Guidance')
  )

  const spanishZip = data.allFile.nodes.find(
    node =>
      (node.relativeDirectory === 'zip') &
      (node.name === 'EOC Development Tool Spanish')
  )

  return (
    <Layout>
      <SEO title="EOC Resource Portal" />
      <header className={styles.header}>
        <div className={styles.text}>
          <h1>
            Virtual Training Program in Public Health Emergency Management
          </h1>
          <p>
            Welcome to the Georgetown University Virtual Training Program in
            Public Health Emergency Management! This program is tailored
            specifically for national and sub-national Emergency Operations
            Center personnel involved in epidemic response efforts.
          </p>
          <p>
            The training is structured around four modules. Within each of these
            modules, there will be approximately 1.5-2 hours of self-directed
            “asynchronous” videos and recommended readings, to be completed by
            each participant individually. Each module will conclude with a 1.5
            hour live “synchronous” discussion session with experts, to
            consolidate key concepts and address any questions, as well as a
            short knowledge check. The modules are each designed to take two
            weeks to complete, but can be extended or fast-tracked as needed.{' '}
          </p>
          <p>
            Before starting the training, please complete the pre-training
            survey available below and email it to Dr. Claire Standley at{' '}
            <a href="mailto:Claire.standley@georgetown.edu">
              Claire.standley@georgetown.edu
            </a>
            . You will also be asked to complete the post-training survey at the
            end of the final module.
          </p>
          <p>Pre-training survey:</p>
          <p>Post-training survey:</p>
          <p>
            Biographies for all the experts and guest lecturers are available
            here: [ADD LINK]
          </p>
          <h2>Detailed Module Structure</h2>
          <h3>1. Strengthening application of IMS</h3>
          <p>
            This module will cover the basic structure of an incident management
            system, with particular reference to its application during complex
            public health emergencies such as the COVID-19 pandemic. The goal of
            the module is to increase understanding of the utility and
            application of IMS for public health emergency management, covering
            both theoretical and practical aspects.{' '}
          </p>
          <h4>Learning objectives</h4>
          <ul>
            <li>
              Summarize roles, responsibilities and minimum requirements of key
              positions and personnel within IMS
            </li>
            <li>
              Demonstrate ability to update handbooks and SOPs to define
              activation levels and scales of response
            </li>
            <li>
              Apply knowledge to update current structures and protocols (i.e.
              from COVID-19) to future all-hazard preparedness and response{' '}
            </li>
          </ul>
          <h4>Pre-module test: [ADD LINK]</h4>
          <h4>Recommended reading:</h4>
          <ul>
            <li>
              Ma J, Huang Y, Zheng Z-J, 2020, Leveraging the Public Health
              Emergency Operations Center (PHEOC) for pandemic response:
              opportunities and challenges, Global Health Journal, 4(4):112-120{' '}
              <a href="https://www.sciencedirect.com/science/article/pii/S2414644720300579">
                https://www.sciencedirect.com/science/article/pii/S2414644720300579
              </a>
            </li>
          </ul>
        </div>
        {/* <div className={styles.image}> */}
        {/*   <iframe */}
        {/*     title="Introduction Video" */}
        {/*     src="https://player.vimeo.com/video/433738538?texttrack=en" */}
        {/*     frameBorder="0" */}
        {/*     allow="autoplay; fullscreen" */}
        {/*     allowFullScreen */}
        {/*   ></iframe> */}
        {/* </div> */}
      </header>
      <article className={styles.main}>
        <header>
          <h1>EOC GUIDANCE LIBRARY</h1>
          <div className={styles.quickDownload}>
            <p>Quick downloads</p>
            <OutboundLink href={libraryZip.publicURL}>
              Complete Library ({data.allFile.totalCount} files,{' '}
              {libraryZip.prettySize} .zip)
            </OutboundLink>
            <OutboundLink href={guidanceZip.publicURL}>
              Powerpoint Guides (7 files, {guidanceZip.prettySize} .zip)
            </OutboundLink>
            <OutboundLink href={spanishZip.publicURL}>
              Descarga todos en Español ({spanishFiles.length} files,{' '}
              {spanishZip.prettySize} .zip)
            </OutboundLink>
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
