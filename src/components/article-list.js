/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'
import { Link } from 'gatsby'

export const ArticleList = ({posts, prefix = ''}) => {
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
              to={`${prefix}${post.slug}`}
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
