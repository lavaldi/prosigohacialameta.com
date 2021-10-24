/** @jsx jsx */
import { jsx, Heading, Link as TLink, Flex } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import Listing from "./listing"
import replaceSlashes from "../utils/replace-slashes"
import Seo from "./seo"

const Tag = ({ posts, pageContext }) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      <Seo title={`Tag: ${pageContext.name}`} />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
          {pageContext.name}
        </Heading>
        <TLink
          as={Link}
          sx={{ variant: `links.secondary`, marginY: 2 }}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          Ver todos los tags
        </TLink>
      </Flex>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default Tag