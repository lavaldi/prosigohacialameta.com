/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'
import { graphql, Link } from 'gatsby'

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

  return (
    <ul
      sx={{
        maxWidth: 'container',
        listStyle: 'none',
        padding: 0,
        margin: 0,
      }}>
      {posts.map(post => (
        <li key={post.id}>
          <Themed.h2 as='h2'>
            <Link
              to={post.slug}
              sx={{
                variant: 'styles.navlink',
              }}>
              {post.frontmatter.title}
            </Link>
          </Themed.h2>
          <div sx={{ variant: 'text.small', fontWeight: 'bold', }}>
            {new Date(post.frontmatter.date).toLocaleDateString()}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Blog;
