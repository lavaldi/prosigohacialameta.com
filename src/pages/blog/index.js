/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
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
          date
          draft
        }
      }
    }
  }
`

const Blog = props => {
  const posts = props.data.pages.nodes

  return <ArticleList posts={posts} />
}

export default Blog;
