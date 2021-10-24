/** @jsx jsx */
import { jsx, Link as TLink, Box } from "theme-ui"
import { Link } from "gatsby"
import ItemTags from "./item-tags"

const BlogListItem = ({ post, showTags = true }) => (
  <Box mb={4}>
    <TLink as={Link} to={post.slug} sx={{ fontSize: [1, 2, 3], color: `text` }}>
      {post.title}
    </TLink>
    <p
      sx={{
        color: `secondary`,
        mt: 1,
        a: { color: `secondary` },
        fontSize: [1, 1, 2],
      }}
    >
      <time>{post.date}</time>
      {post.tags && showTags && (
        <>
          {` — `}
          <ItemTags tags={post.tags} />
        </>
      )}
    </p>
  </Box>
)

export default BlogListItem
