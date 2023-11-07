import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

import { unified } from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

import Layout from '../components/Layout/Layout'

import * as styles from '../styles/blog-post.module.scss'

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { airtable: post } = data // data.markdownRemark holds your post data

  const blogPostImage = filename => {
    const noBackslashes = filename.replace(/\\/g, '')
    const imageData = post.data.Additional_Images.localFiles.find(
      img => img.name.replace('.', '') + img.ext === noBackslashes
    ).childImageSharp.gatsbyImageData

    return ReactDOMServer.renderToString(
      <img
        src={imageData.images.fallback.src}
        alt={`${filename}`}
        style={{ width: '100%' }}
      />
    )
  }

  let blogTextWithImages = ''

  if (post.data.Additional_Images.localFiles[0].childImageSharp) {
    const textSections = post.data.Blog_Text.split(/\[IMAGE: ".*"\]/g)
    const imageFileNames = [
      ...post.data.Blog_Text.matchAll(/\[IMAGE: "(.*)"\]/g),
    ]

    textSections.forEach((text, index) => {
      if (post.data.Additional_Images.localFiles[index]) {
        blogTextWithImages =
          blogTextWithImages + text + blogPostImage(imageFileNames[index][1])
      } else {
        blogTextWithImages += text
      }
    })
  } else {
    blogTextWithImages = post.data.Blog_Text
  }

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
              .use(html, { sanitize: false })
              .processSync(blogTextWithImages),
            // .use(remarkParse)
            // .use(remarkRehype, { allowDangerousHtml: true })
            // .use(rehypeStringify, { allowDangerousHtml: true })
            // .processSync(blogTextWithImages),
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
          localFiles {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        Additional_Images {
          localFiles {
            name
            ext
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        URL
        Title
        Author
      }
    }
  }
`
