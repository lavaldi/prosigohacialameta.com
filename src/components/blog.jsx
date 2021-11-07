/** @jsx jsx */
import { jsx, Heading, Flex } from "theme-ui";
import Layout from "./layout";
import Listing from "./listing";
import Seo from "./seo";

const Blog = ({ posts }) => {
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
      </Flex>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  );
};

export default Blog;
