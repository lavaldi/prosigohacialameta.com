/** @jsx jsx */
import { jsx, Heading, Link as TLink, Flex } from "theme-ui";
import { Link } from "gatsby";
import Layout from "./layout";
import Listing from "./listing";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import replaceSlashes from "../utils/replace-slashes";
import Seo from "./seo";

const Blog = ({ posts }) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();

  return (
    <Layout>
      <Seo title="Blog" />
      <Flex
        sx={{
          alignItems: `center`,
          justifyContent: `space-between`,
          flexFlow: `wrap`,
        }}
      >
        <Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
          Blog
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
  );
};

export default Blog;
