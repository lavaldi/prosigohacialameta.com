/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import Layout from "./layout";
import Title from "./title";
import Listing from "./listing";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import useSiteMetadata from "../hooks/use-site-metadata";
import replaceSlashes from "../utils/replace-slashes";

const Homepage = ({ posts }) => {
  const { basePath, blogPath } = useMinimalBlogConfig();
  const { siteTitle } = useSiteMetadata();

  return (
    <Layout>
      <h1
        sx={{
          // include `px` so we can use it with `sx`
          border: 0,
          clip: `rect(0, 0, 0, 0)`,
          height: `1px`,
          margin: `-1px`,
          overflow: `hidden`,
          padding: 0,
          position: `absolute`,
          whiteSpace: `nowrap`,
          width: `1px`,
        }}
      >
        {siteTitle}
      </h1>
      <Title text="Últimos artículos">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          Todos los artículos
        </Link>
      </Title>
      <Listing posts={posts} showTags={false} />
    </Layout>
  );
};

export default Homepage;
