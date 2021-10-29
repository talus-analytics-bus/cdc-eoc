import React from 'react'
// import { graphql } from 'gatsby'
// import { OutboundLink } from 'gatsby-plugin-google-analytics'

import SEO from '../components/Seo/Seo'
import Layout from '../components/Layout/Layout'
// import Category from '../components/Category/Category'

// import displayNames from '../metadata/displayNames'

import styles from '../styles/home.module.scss'

// const maxNameLength = 140
// const trimString = (string, fullRow) => {
//   if (fullRow.length > maxNameLength) {
//     return string.slice(0, maxNameLength / 2) + '...'
//   } else {
//     return string
//   }
// }

// const IndexPage = ({ data }) => {
const IndexPage = () => {
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

  //   const directories = [
  //     ...new Set(data.allFile.nodes.map(node => node.relativeDirectory)),
  //   ].filter(dir => !['', 'zip', 'guides', 'spanish'].includes(dir))
  //
  //   const spanishFiles = data.allFile.nodes.filter(
  //     file => file.relativeDirectory === 'spanish'
  //   )
  //
  //   const zipfiles = data.allFile.nodes.filter(
  //     node => node.relativeDirectory === 'zip'
  //   )
  //   //
  //   //   const guides = data.allFile.nodes.filter(
  //   //     node => node.relativeDirectory === 'guides'
  //   //   )
  //
  //   directories.sort((a, b) => a.localeCompare(b))

  //   const createDocElements = documents => {
  //     documents.forEach(doc =>
  //       console.log(
  //         `Filename: ${doc.name + doc.ext}, Display name: ${
  //           displayNames[doc.name + doc.ext]
  //         }`
  //       )
  //     )
  //     const alpha = documents.sort((a, b) =>
  //       displayNames[a.name + a.ext].localeCompare(displayNames[b.name + b.ext])
  //     )
  //     const moduleDescription = alpha.find(document =>
  //       /^Module [1-9]/.test(displayNames[document.name + document.ext])
  //     )
  //
  //     const moduleDescriptionES = alpha.find(document =>
  //       /^Módulo [1-9]/.test(displayNames[document.name + document.ext])
  //     )
  //
  //     const otherDocuments = alpha.filter(
  //       document =>
  //         !/^Module|Módulo [1-9]/.test(displayNames[document.name + document.ext])
  //     )
  //     const sorted = [moduleDescription, moduleDescriptionES, ...otherDocuments]
  //     return sorted.map(document => (
  //       <OutboundLink
  //         href={document.publicURL}
  //         aria-label="Download"
  //         key={document.name}
  //         className={styles.document}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         {/* {console.log(document.name)} */}
  //         <span className={styles[document.ext.replace('.', '')]}></span>
  //         <p className={styles.displayName}>
  //           {trimString(
  //             displayNames[document.name + document.ext],
  //             displayNames[document.name + document.ext] +
  //               document.name +
  //               document.ext
  //           )}
  //           {/* console.log(document.name) */}
  //           {/* {document.name */}
  //           {/*   .replace(/(_|doc|ppt|[0-9]|tool)/g, ' ') */}
  //           {/*   .replace(/eoc/g, 'EOC') */}
  //           {/*   .replace(/ics/g, 'ICS') */}
  //           {/*   .replace(/cdc/g, 'CDC')} */}
  //         </p>
  //         <p className={styles.fileName}>
  //           {trimString(
  //             document.name,
  //             displayNames[document.name + document.ext] +
  //               document.name +
  //               document.ext
  //           )}
  //           {document.ext}
  //         </p>
  //         <p className={styles.size}>{document.prettySize}</p>
  //       </OutboundLink>
  //     ))
  //   }

  //   const categoryElements = directories.map(directory => {
  //     const documents = data.allFile.nodes.filter(
  //       node => node.relativeDirectory === directory
  //     )
  //     const sectionName = directory.split('/').pop()
  //     const zip = zipfiles.find(zip => zip.name === sectionName)
  //
  //     return (
  //       <Category key={directory.split('/').pop()}>
  //         <header className={styles.expandBoxHeader}>
  //           <h1>{sectionName.replace(/[1-9] - /g, '')}?</h1>
  //           <p>
  //             ({documents.length} files, {zip.prettySize})
  //           </p>
  //           <OutboundLink
  //             href={zip.publicURL}
  //             aria-label="Download Zip File"
  //             onClick={e => {
  //               e.stopPropagation()
  //             }}
  //           ></OutboundLink>
  //         </header>
  //         <section className={styles.documents}>
  //           {createDocElements(documents)}
  //         </section>
  //       </Category>
  //     )
  //   })

  //   const libraryZip = data.allFile.nodes.find(
  //     node =>
  //       (node.relativeDirectory === 'zip') &
  //       (node.name === 'EOC Development Tool')
  //   )
  //
  //   const guidanceZip = data.allFile.nodes.find(
  //     node =>
  //       (node.relativeDirectory === 'zip') &
  //       (node.name === 'EOC Development Tool Guidance')
  //   )
  //
  //   const spanishZip = data.allFile.nodes.find(
  //     node =>
  //       (node.relativeDirectory === 'zip') &
  //       (node.name === 'EOC Development Tool Spanish')
  //   )

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
          <h5>Pre-training survey:</h5>
          <p>
            <a href="/static-documents/assessments/Pre-training survey - Using EOCs for Epidemic Response.pdf">
              PDF: Pre-training survey - Using EOCs for Epidemic Response
            </a>
            <br />
            <a href="/static-documents/assessments/Pre-training survey - Using EOCs for Epidemic Response.docx">
              DOC: Pre-training survey - Using EOCs for Epidemic Response
            </a>
          </p>
          <h5>Post-training survey:</h5>
          <p>
            <a href="/static-documents/assessments/Post-training survey - Using EOCs for Epidemic Response.pdf">
              PDF: Post-training survey - Using EOCs for Epidemic Response
            </a>
            <br />
            <a href="/static-documents/assessments/Post-training survey - Using EOCs for Epidemic Response.docx">
              DOC: Post-training survey - Using EOCs for Epidemic Response
            </a>
          </p>
          <p>
            Biographies for all the experts and guest lecturers{' '}
            <a href="/trainer-bios/">are available here</a>
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
          <h4>Pre-module test:</h4>
          <p>
            <a href="/static-documents/assessments/Module 1 - pre test.pdf">
              PDF: Module 1 - pre test
            </a>
            <br />
            <a href="/static-documents/assessments/Module 1 - pre test.docx">
              DOC: Module 1 - pre test
            </a>
          </p>
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
          <h4>Asynchronous lectures:</h4>
          <h5>1.1: Overview of IMS: Dr. Claire Standley, Germany/USA</h5>
          <div className={styles.image}>
            <iframe
              src="https://player.vimeo.com/video/637171136?h=72b9fda6b2"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h5>1.2: Planning section: Dr. Claire Standley, Germany/USA</h5>
          <div className={styles.image}>
            <iframe
              src="https://player.vimeo.com/video/637174360?h=d07abfed37"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h5>1.3: Operations section: Jim Banaski, USA</h5>
          <div className={styles.image}>
            <iframe
              src="https://player.vimeo.com/video/637175178?h=f27947cf45"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h5>1.4: Logistics, admin and finance sections: Jim Banaski, USA</h5>
          <div className={styles.image}>
            <iframe
              src="https://player.vimeo.com/video/637177941?h=8f2ef30ed5"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h5>
            1.5: IMS at the sub-national level: Interview with Dr. Amadou
            Traoré, Guinea/Sierra Leone
          </h5>
          <div className={styles.image}>
            <iframe
              src="https://player.vimeo.com/video/637178422?h=73a4325c42"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h4>Synchronous section: IMS for partners and surge personnel</h4>
          <h4>Post-module test</h4>
          <p>
            <a href="/static-documents/assessments/Module 1 - post test.pdf">
              PDF: Module 1 - post test
            </a>
            <br />
            <a href="/static-documents/assessments/Module 1 - post test.docx">
              DOC: Module 1 - post test
            </a>
          </p>
          <h4>Additional resources</h4>
          <ul>
            <li>
              Open WHO “Ready for Response” course:{' '}
              <a href="https://openwho.org/channels/response">
                https://openwho.org/channels/response
              </a>
            </li>
            <li>WHO Emergency Response Framework, 2017</li>
          </ul>
          <h3>2. Data and resource management</h3>
          <p>
            This module will cover how to approach data and resource management
            within the context of preparedness, response, and recovery, with an
            emphasis on how these management functions relate to
            decision-making. The goal is to ensure that participants understand
            ways to obtain, utilize, and manage different types of critical
            resources in an operational environment.
          </p>
          <h4>Learning objectives</h4>
          <ul>
            <li>
              Identify best practices for data management and decision-making
            </li>
            <li>
              Define resource requirements for different response levels/phases
            </li>
            <li>Describe procedures for acquiring and utilizing resources</li>
          </ul>
          <h4>Pre-module test</h4>
          <p>
            <a href="/static-documents/assessments/Module 2 - pre test.pdf">
              PDF: Module 2 - pre test
            </a>
            <br />
            <a href="/static-documents/assessments/Module 2 - pre test.docx">
              DOC: Module 2 - pre test
            </a>
          </p>
          <h4>Recommended reading:</h4>
          <ul>
            <li>
              Building a data-driven culture in emergency management, 2020,{' '}
              <a href="https://www.domesticpreparedness.com/preparedness/building-a-data-driven-culture-in-emergency-management/">
                https://www.domesticpreparedness.com/preparedness/building-a-data-driven-culture-in-emergency-management/
              </a>
            </li>
          </ul>
          <h4>Asynchronous lectures:</h4>
          <h5>
            2.1: Data for decision-making: Interview with Peter Babigumira,
            Uganda
          </h5>
          <div className={styles.image}>
            <iframe
              src="https://player.vimeo.com/video/637185427?h=1cfadb8dc6"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h5>
            2.2: Data and information management: Dr. Claire Standley,
            Germany/USA
          </h5>
          <div className={styles.image}>
            <iframe
              src="https://player.vimeo.com/video/637187323?h=7c621ad01d"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h5>
            2.3: Resource requirements and managing resources: Jim Banaski, USA
          </h5>
          <div className={styles.image}>
            <iframe
              src="https://player.vimeo.com/video/637189831?h=a894b5e82c"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h5>
            2.4: Managing resources: Interview with Nevashan Govender, South
            Africa
          </h5>
          <div className={styles.image}>
            <iframe
              src="https://player.vimeo.com/video/640472640?h=4f0e349293"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <h4>Synchronous session: Using data and resources effectively</h4>
          <h4>Post-module test</h4>
          <p>
            <a href="/static-documents/assessments/Module 2 - post test.pdf">
              PDF: Module 2 - post test
            </a>
            <br />
            <a href="/static-documents/assessments/Module 2 - post test.docx">
              DOC: Module 2 - post test
            </a>
          </p>
          <h4>Additional resources:</h4>
          <ul>
            <li>
              Turner, A., Reeder, B., & Wallace, J. (2013). A Resource
              Management Tool for Public Health Continuity of Operations During
              Disasters. Disaster Medicine and Public Health Preparedness, 7(2),
              146-152. doi:10.1017/dmp.2013.24
            </li>
          </ul>
          <h3>3. Coordination and communication</h3>
          <p>
            This module will cover approaches for engaging with multisectoral
            partners, including protocols for both internal and external
            (including public) communication, and testing coordination
            structures via exercises. The goal is to equip participants with the
            knowledge and skills to design and implement different strategies
            for coordination and communication, including in the context of
            large-scale and complex operations.
          </p>
          <h4>Learning objectives</h4>
          <ul>
            <li>
              Develop approaches for engaging multisectoral partners in planning
              and preparedness
            </li>
            <li>
              Outline principles for internal and external communication
              protocols
            </li>
            <li>Appraise components of large-scale operations</li>
          </ul>
          <h4 style={{ textAlign: 'center' }}>
            <em>Content coming soon</em>
          </h4>
          <h3>4. Leadership and advocacy</h3>
          <p>
            This module will focus on factors underpinning successful
            implementation and sustainment of public health emergency
            management. The goal is to encourage participants to think beyond
            technical skills to the broader leadership, advocacy, and continuous
            education required to ensure long-term function of an emergency
            management program.
          </p>
          <h4>Learning objectives</h4>
          <ul>
            <li>
              Understand the role and importance of legal frameworks for
              emergency response operations
            </li>
            <li>Apply effective leadership and decision-making strategies</li>
            <li>Synthesize approaches for training and cascading</li>
          </ul>
          <h4 style={{ textAlign: 'center' }}>
            <em>Content coming soon</em>
          </h4>
        </div>
        {/* <div className={styles.image}> */}
        {/*   <div className={styles.image}>
        <iframe */}
        {/*     title="Introduction Video" */}
        {/*     src="https://player.vimeo.com/video/433738538?texttrack=en" */}
        {/*     frameBorder="0" */}
        {/*     allow="autoplay; fullscreen" */}
        {/*     allowFullScreen */}
        {/*   ></iframe> */}
        {/* </div> */}
      </header>
      {/* <article className={styles.main}> */}
      {/*   <header> */}
      {/*     <h1>EOC GUIDANCE LIBRARY</h1> */}
      {/*     <div className={styles.quickDownload}> */}
      {/*       <p>Quick downloads</p> */}
      {/*       <OutboundLink href={libraryZip.publicURL}> */}
      {/*         Complete Library ({data.allFile.totalCount} files,{' '} */}
      {/*         {libraryZip.prettySize} .zip) */}
      {/*       </OutboundLink> */}
      {/*       <OutboundLink href={guidanceZip.publicURL}> */}
      {/*         Powerpoint Guides (7 files, {guidanceZip.prettySize} .zip) */}
      {/*       </OutboundLink> */}
      {/*       <OutboundLink href={spanishZip.publicURL}> */}
      {/*         Descarga todos en Español ({spanishFiles.length} files,{' '} */}
      {/*         {spanishZip.prettySize} .zip) */}
      {/*       </OutboundLink> */}
      {/*     </div> */}
      {/*   </header> */}
      {/*   <section>{categoryElements}</section> */}
      {/* </article> */}
    </Layout>
  )
}

export default IndexPage
//
// export const query = graphql`
//   {
//     allFile(filter: { sourceInstanceName: { eq: "documents" } }) {
//       nodes {
//         prettySize
//         relativeDirectory
//         ext
//         name
//         publicURL
//       }
//       totalCount
//     }
//   }
// `
