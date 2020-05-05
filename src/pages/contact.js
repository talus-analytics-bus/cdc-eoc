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
      axios
        .post('https://nope', JSON.stringify(data), {
          headers: { 'Content-Type': 'application/json' },
        })
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
        title={`Contact the COVID Local team`}
        meta={[
          {
            name: 'description',
            content: `Contact the COVID Local team`,
          },
        ]}
      />
      <header className={styles.header}>
        <h1>Contact us</h1>
      </header>

      <form className={styles.main} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <p>
            We welcome questions about the Frontline Guide, feedback on its
            contents, input on how COVID-Local efforts can support your
            community, or other questions or comments, using the form below.
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
            <input type="text" id="firstName" name="firstName" />
          </label>
          <label className={styles.lastName} htmlFor="lastName">
            Last Name*
            <input type="text" id="lastName" name="lastName" />
          </label>
        </div>

        <div className={styles.formRow}>
          <label className={styles.email} htmlFor="email">
            Email*
            <input type="text" id="email" name="email" />
          </label>
          <label className={styles.org} htmlFor="org">
            Organization*
            <input type="text" id="org" name="org" />
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
      </form>
    </Layout>
  )
}

export default Contact
