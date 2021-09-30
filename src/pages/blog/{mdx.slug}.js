/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Draft = () => (
  <div
    sx={{
      p: 3,
      my: 4,
      fontWeight: 'bold',
      color: 'background',
      bg: 'accent',
    }}>
    ⚠️ You are viewing an draft post, and this may not be ready for primetime.
  </div>
)

const BlogPost = ({ data }) => {
  const title = data.mdx.frontmatter.title
  let date = data.mdx.frontmatter.date
  if (date) date = new Date(date).toLocaleDateString('es-PE', {
    timeZone: 'UTC',
  })
  const draft = data.mdx.frontmatter.draft
  const body = data.mdx.body
  return (
    <div
      sx={{
        maxWidth: !!title ? 'container' : null,
      }}>
      {draft && <Draft />}
      <h1>{title}</h1>
      {date && (
        <div
          sx={{
            variant: 'text.small',
            fontWeight: 'bold',
          }}>
          {date}
        </div>
      )}
      <MDXRenderer>
      {body}
      </MDXRenderer>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      slug
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        draft
        banner
        excerpt
      }
      body
    }
  }
`

export default BlogPost
