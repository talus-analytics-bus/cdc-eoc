import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

import Layout from '../components/Layout/Layout'

import styles from '../styles/blog-post.module.scss'

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { airtable: post } = data // data.markdownRemark holds your post data

  console.log(post)

  const blogPostImage = filename => {
    const noBackslashes = filename.replace(/\\/g, '')
    const url = post.data.Additional_Images.find(
      img => img.filename === noBackslashes
    ).url

    return ReactDOMServer.renderToString(
      <img src={url} alt={`${filename}`} style={{ width: '100%' }} />
    )
  }

  let blogTextWithImages = ''

  if (post.data.Additional_Images[0].url !== '') {
    const textSections = post.data.Blog_Text.split(/\[IMAGE: ".*"\]/g)
    const imageFileNames = [
      ...post.data.Blog_Text.matchAll(/\[IMAGE: "(.*)"\]/g),
    ]

    console.log(imageFileNames)

    textSections.forEach((text, index) => {
      if (post.data.Additional_Images[index]) {
        blogTextWithImages =
          blogTextWithImages + text + blogPostImage(imageFileNames[index][1])
      } else {
        blogTextWithImages += text
      }
    })
  } else {
    blogTextWithImages = post.data.Blog_Text
  }

  console.log(post.data.Blog_Text)
  console.log(blogTextWithImages)
  console.log(
    unified().use(markdown).use(html).processSync(blogTextWithImages).contents
  )

  return (
    <Layout>
      <article className={styles.main}>
        <Helmet
          title={`Epidemic EM Case Study: ${post.data.title}`}
          meta={[
            {
              name: 'description',
              content: `Epidemic EM Case Study: ${post.data.title}`,
            },
          ]}
        />
        <Link to="/case-studies/">&lt; back to all case studies</Link>
        <header>
          <h1>{post.data.Title}</h1>
          <h2>
            {new Date(post.data.Date).toLocaleString('default', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              timeZone: 'UTC',
            })}
          </h2>
        </header>
        <h3
          dangerouslySetInnerHTML={{
            __html: post.data.Author,
          }}
        />

        {/* <div className={styles.imageContainer}> */}
        {/*   <img src={post.data.Cover_Image[0].url} alt={post.data.Title} /> */}
        {/* </div> */}

        <section
          dangerouslySetInnerHTML={{
            __html: unified()
              .use(markdown)
              .use(html)
              .processSync(blogTextWithImages),
          }}
        />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    airtable(data: { URL: { eq: $path } }) {
      id
      data {
        Blog_Text
        Date
        Cover_Image {
          url
        }
        Additional_Images {
          filename
          url
        }
        URL
        Title
        Author
      }
    }
  }
`
