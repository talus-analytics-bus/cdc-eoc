import React from 'react'
import { renderToString } from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Fuse from 'fuse.js'
import unified from 'unified'
import markdown from 'remark-parse'
import html from 'remark-html'

import Layout from '../components/Layout/Layout'

import styles from '../styles/case-studies.module.scss'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query blogQuery {
      allAirtable(
        filter: {
          data: { Publishing_Status: { eq: "Publish" } }
          table: { eq: "Case Studies" }
        }
        sort: { order: DESC, fields: data___Date }
      ) {
        edges {
          node {
            id
            data {
              Blog_Text
              Excerpt
              Cover_Image {
                url
              }
              Author
              Category
              Date
              Title
              URL
            }
          }
        }
      }
    }
  `)
  const { edges: posts } = data.allAirtable

  // console.log(posts)
  // console.log(posts.map(post => console.log(post)))

  const [searchString, setSearchString] = React.useState('')
  const [filter, setFilter] = React.useState('ALL')

  // console.log(filter)

  const createBlogPostElements = posts =>
    posts
      .filter(post => post.node.data.Title.length > 0)
      .map(({ node: post }) => (
        <div className={styles.post} key={post.id}>
          <h1>
            <Link to={post.data.URL}>{post.data.Title}</Link>
          </h1>
          {post.data.Date && (
            <h2>
              {new Date(post.data.Date).toLocaleString('default', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                timeZone: 'UTC',
              })}
            </h2>
          )}
          <h3
            dangerouslySetInnerHTML={{
              __html: post.data.Author,
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html:
                renderToString(
                  post.data.URL !== '#' && (
                    <Link to={post.data.URL}>
                      <img
                        src={post.data.Cover_Image[0].url}
                        alt={post.data.Title}
                      />
                    </Link>
                  )
                ) +
                unified()
                  .use(markdown)
                  .use(html)
                  .processSync(post.data.Excerpt)
                  // Need to get just the text from the first paragraph
                  .contents.split(/<\/p>/g)[0]
                  .replace('<p>', '')
                  .split(' ')
                  .slice(0, 150)
                  .join(' ') +
                ' ' +
                renderToString(
                  post.data.URL !== '#' && (
                    <Link to={post.data.URL}>read more</Link>
                  )
                ),
            }}
          ></p>
        </div>
      ))

  const createRecentPostsElements = posts =>
    posts
      .filter(({ node: post }) => post.data.Title.length > 0)
      .map(({ node: post }) => (
        <div className={styles.post} key={post.id}>
          <Link to={post.data.URL}>{post.data.Title}</Link>
          <p>{post.data.Date}</p>
        </div>
      ))

  // const onClickFilter = e => {
  //   e.preventDefault()
  //   if (filter !== e.target.innerHTML) {
  //     setFilter(e.target.innerHTML)
  //   } else {
  //     setFilter('ALL')
  //   }
  // }

  // console.log('run component')
  // console.log(posts)
  // posts.map((index, post) => {
  // console.log(post)
  // console.log('index ', index)
  // })

  let filteredPosts = posts
  if (filter !== '') {
    filteredPosts = posts.filter(post =>
      (post.node.data.Category.toUpperCase() + ' ALL').includes(filter)
    )
  }

  const searchOptions = {
    isCaseSensitive: false,
    distance: 100,
    shouldSort: true,
    keys: ['node.data.Blog_Text', 'node.data.Title', 'node.data.Author'],
  }

  const fuse = new Fuse(posts, searchOptions)

  let searchedPosts = filteredPosts
  if (searchString !== '') {
    searchedPosts = fuse.search(searchString).map(result => result.item)

    if (searchedPosts.length === 0) {
      console.log('add dummy post')
      searchedPosts = [
        {
          node: {
            id: '0',
            data: {
              Blog_Text: '',
              Excerpt: 'Please try a different search.',
              Cover_Image: [
                {
                  url: undefined,
                },
              ],
              Author: '',
              Category: 'Case Study',
              Date: undefined,
              Title: 'No results found for that search.',
              URL: '#',
            },
          },
        },
      ]
    }
  }

  console.log(filteredPosts)

  return (
    <Layout>
      <Helmet
        title={`COVAT Blog`}
        meta={[
          {
            name: 'description',
            content: `COVID Local blog: keeping local leaders up to date during the COVID-19 pandemic.`,
          },
        ]}
      />

      <header className={styles.header}>
        <h1>Case Studies</h1>
        <Link to="/contact/">Contact us</Link>
      </header>

      <section className={styles.intro}>
        <p>
          The application of emergency management principles to epidemic
          responses, and the use of an Emergency Operations Center to do so, can
          take many forms. Context is important, and so there is never a “one
          size fits all” solution to strengthening or operationalizing public
          health emergency management capabilities.
        </p>
        <p>
          To help support epidemic emergency management in the context of the
          COVID-19 response, we are developing a series of case studies in
          collaboration with partners across the world, to demonstrate how
          different countries have developed and operationalized their EOCs to
          support the pandemic response at the national and sub-national levels.
          We hope that these examples will help illustrate the different ways in
          which public health emergency management capabilities can be build and
          sustained, and utilized for epidemic response.
        </p>
      </section>

      <section className={styles.main}>
        <section className={styles.blogPosts}>
          <div className={styles.filters}>
            <button
              onClick={e => e.preventDefault()}
              aria-pressed={filter === 'ALL'}
            >
              CASE STUDIES
            </button>
            {/* <button */}
            {/*   onClick={onClickFilter} */}
            {/*   aria-pressed={filter === 'NOTES FROM THE FIELD'} */}
            {/* > */}
            {/*   PRESS RELEASES */}
            {/* </button> */}
            {/* <button */}
            {/*   onClick={onClickFilter} */}
            {/*   aria-pressed={filter === 'REPORTS FROM EXPERTS'} */}
            {/* > */}
            {/*   REPORTS */}
            {/* </button> */}
          </div>

          {createBlogPostElements(searchedPosts)}
        </section>

        <section className={styles.recentPosts}>
          <form>
            <label htmlFor="search">Search</label>
            <input
              id="search"
              type="text"
              name="search"
              value={searchString}
              onChange={e => setSearchString(e.target.value)}
              placeholder="search case studies"
            />
          </form>
          <h1>Recent Case Studies</h1>
          {createRecentPostsElements(posts)}
        </section>
      </section>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query IndexQuery {
//     allAirtable(
//       filter: { data: { publishing_status: { eq: "Publish" } } }
//       sort: { order: DESC, fields: data___Date }
//     ) {
//       edges {
//         node {
//           id
//           data {
//             Blog_Text
//             Images {
//               url
//             }
//             author
//             Category
//             Date
//             title
//             slug
//           }
//         }
//       }
//     }
//   }
// `

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
//       edges {
//         node {
//           excerpt(pruneLength: 500)
//           id
//           frontmatter {
//             title
//             date(formatString: "dddd, MMMM DD, YYYY")
//             path
//             category
//             author
//           }
//         }
//       }
//     }
//   }
// `

export default Blog
