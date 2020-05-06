import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/Seo/Seo'
import Layout from '../components/Layout/Layout'
import ExpandBox from '../components/ExpandBox/ExpandBox'

import styles from '../styles/about.module.scss'

const aboutPage = () => {
  return (
    <Layout>
      <SEO
        title="About The CDC EOC Resource Portal"
        description="Description, background, and acknowledgements for the CDC EOC website"
        lang="en"
      />
      <header className={styles.header}>
        <h1>About</h1>
      </header>
      <article className={styles.main}>
        <p>
          The first cases of what would later become known as COVID-19 were
          first reported in December 2019 by the Chinese government, as a
          cluster of unusual pneumonia cases in Hubei province, centered around
          the city of Wuhan. The rapid spread and severity of the COVID-19
          pandemic has prompted most countries to pursue strategies to try to
          ensure their healthcare systems are not overwhelmed. The fundamental
          approach for responding to the COVID-19 pandemic remains the tried and
          tested tools of public health response: identify affected individuals,
          monitor them (and isolate or quarantine as necessary, depending on the
          context), and trace and monitor their contacts. However, the scale of
          the pandemic has required most countries to adopt substantial
          additional measures to prevent community transmission, including
          stay-at-home orders, closing public spaces and recreation areas,
          reducing or closing public transport, and suspending schools and
          universities. The intent of these public health measures is to reduce
          the rate of new infections, and limit the number of severely ill
          people requiring hospitalization, to ensure the healthcare system has
          sufficient beds, ventilators, and other critical resources – both for
          COVID-19 patients as well as all others requiring urgent medical care.
          Once the number of new cases drops, governments and local authorities
          can begin to decide whether certain economic or social activities can
          resume – though such relaxing of measures should be done carefully,
          deliberately, and only in parallel with sufficient testing capacity to
          assess any new surges in case numbers.
        </p>
        <p>
          These efforts require close operational coordination across multiple
          sectors, and operational response efforts also need to be coordinated
          with broader policy decision-making processes, managed by national and
          sub-national political leaders. In all these ways, COVID-19 response
          efforts can benefit from application of the principles of emergency
          management, including coordination through structures like emergency
          operations centers. Georgetown University has collaborated with the
          CDC to create this website containing training materials, checklists,
          and other resources for development and strengthening of public health
          emergency management capacities, with an emphasis on EOCs.
        </p>
      </article>
      <article className={styles.main}>
        <h1>Acknowledgements</h1>
        <p>
          This effort was completed by Georgetown University Center for Global
          Health Science and Security in collaboration with Talus Analytics, and
          funded by the CDC Foundation.
        </p>
      </article>
    </Layout>
  )
}

export default aboutPage
