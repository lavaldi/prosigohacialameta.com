/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export const ArticleList = ({ posts, prefix = '', as: Title = 'h2' }) => {
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
          <Title>
            <Link
              to={`${prefix}${post.slug}`}
              sx={{
                variant: 'styles.navlink',
              }}>
              {post.frontmatter.title}
            </Link>
          </Title>
          <div sx={{ variant: 'text.small', fontWeight: 'bold', }}>
            {new Date(post.frontmatter.date).toLocaleDateString('es-PE', {
              timeZone: 'UTC',
            })}
          </div>
        </li>
      ))}
    </ul>
  )
}
