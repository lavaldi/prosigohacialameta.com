/** @jsx jsx */
import { jsx, Input } from 'theme-ui'
import React, { useState } from 'react'
import { graphql, navigate } from 'gatsby'
import Fuse from 'fuse.js'
import * as queryString from 'query-string'
import { ArticleList } from '../../components/article-list'

export const query = graphql`
  query BlogPages {
    pages: allMdx(
      sort: {
        fields: frontmatter___date,
        order: DESC
      },
      filter: {
        frontmatter: {
          draft: {
            ne: true
          }
        }
      }
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
          tags
          excerpt
          date
          draft
        }
      }
    }
  }
`

const Blog = props => {
  const { location, data } = props;

  const posts = data.pages.nodes.map(n => ({...n, ...n.frontmatter}))

  const { search: searchParam = '' } = queryString.parse(location.search)
  
  const fuseOptions = {
    keys: [
      { name: 'title', weight: 0.8 },
      { name: 'excerpt', weight: 0.5 },
      { name: 'tags', weight: 0.2 },
    ],
    useExtendedSearch: true,
  }
  const fuse = new Fuse(posts, fuseOptions)

  const [query, setQuery] = useState(searchParam);
  
  const result = fuse.search(searchParam)
  const resultPosts = result.map(res => res.item)

  return (
    <>
      <h1>Artículos</h1>
      <Input
        autoComplete="off"
        aria-labelledby="search"
        type="search"
        id="search"
        value={query}
        onChange={(event) => {
          event.preventDefault()
          navigate(event.target.value ? `/blog/?search=${event.target.value}` : '/blog')
          setQuery(event.target.value)
        }}
        placeholder="Search posts"
      />
      <ArticleList posts={searchParam.length > 0 ? resultPosts : posts} />
    </>
  )
}

export default Blog;
