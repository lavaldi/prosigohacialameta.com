/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export const SeeArticles = () => (
  <small sx={{ variant: 'small' }}>
    <Link to="/blog" sx={{ variant: 'styles.navlink', fontStyle: 'italic' }}>(Ver todos)</Link>
  </small>
)