import React from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'

import Layout from '../components/Layout/Layout'

import styles from '../styles/contact.module.scss'

const Contact = () => {
  const [successMessage, setSuccessMessage] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')
  const [submitButtonText, setSubmitButtonText] = React.useState('Submit')
  const [type, setType] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))

    const emptyfields = Object.values(data).some(field => field === '')

    if (emptyfields) {
      setErrorMessage(
        <h2 className={styles.error}>
          Some required fields below are not filled in, please complete before
          submitting.
        </h2>
      )
    } else {
      setErrorMessage('')
      setSubmitButtonText('Submitting...')

      data['site'] = 'EOC Resource Portal'
      data['subject'] = 'New message from EOC Resource Portal'

      axios
        .post(
          'https://p0hkpngww3.execute-api.us-east-1.amazonaws.com/submit',
          JSON.stringify(data),
          {
            headers: { 'Content-Type': 'application/json' },
          }
        )
        .then(() => {
          setSuccessMessage(
            <h2 className={styles.success}>Feedback Submitted</h2>
          )
          setSubmitButtonText('Submit')
        })
        .catch(error =>
          setErrorMessage(
            'There was an error submitting your request, please check your network connection and try again.'
          )
        )
    }

    //
  }

  return (
    <Layout>
      <Helmet
        title={`Contact the EOC Resource Portal team`}
        meta={[
          {
            name: 'description',
            content: `Contact the EOC Resource Portal team`,
          },
        ]}
      />
      <header className={styles.header}>
        <h1>Contact us</h1>
      </header>

      <form className={styles.main} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <p>
            We welcome questions and feedback about the site, its contents, or
            how to use the materials to support epidemic emergency management in
            your country or community, as well as requests for technical
            assistance. Please use the form below to contact us.
          </p>
          <p>
            Your personal and contact information will only be used to respond
            to your input. Do not submit any proprietary or protected
            information via this form.
          </p>
        </div>
        <div className={styles.formRow}>{errorMessage}</div>
        <div className={styles.formRow}>
          <label className={styles.firstName} htmlFor="firstName">
            First Name*
            <input type="text" id="firstName" name="First_Name" />
          </label>
          <label className={styles.lastName} htmlFor="lastName">
            Last Name*
            <input type="text" id="lastName" name="Last_Name" />
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.email} htmlFor="email">
            Email*
            <input type="text" id="email" name="Email" />
          </label>
          <label className={styles.org} htmlFor="org">
            Organization*
            <input type="text" id="org" name="Organization" />
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.body} htmlFor="body">
            Comment or question*
            <textarea type="text" id="body" name="body" maxLength="1200" />
            <p>200 Words</p>
          </label>
        </div>
        <div className={styles.formRow}>
          <button className={styles.submit}>{submitButtonText}</button>
        </div>
        <div className={styles.formRow}>{successMessage}</div>
        <div className={styles.formRow}>
          <div className={styles.accessibility}>
            <p>
              If you have any accessibility issues using this site, please
              contact us directly at{' '}
              <a href="mailto:epidemicmanagement@georgetown.edu">
                epidemicmanagement@georgetown.edu
              </a>
              .
            </p>
          </div>
        </div>
      </form>
    </Layout>
  )
}

export default Contact
