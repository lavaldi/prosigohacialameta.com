import * as React from "react";
import { Link as TLink } from "theme-ui";
import { Link } from "gatsby";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import replaceSlashes from "../utils/replace-slashes";

const ItemTags = ({ tags }) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();

  return (
    <>
      {tags.map((tag, i) => (
        <React.Fragment key={tag.slug}>
          {!!i && `, `}
          <TLink
            as={Link}
            to={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}
          >
            {tag.name}
          </TLink>
        </React.Fragment>
      ))}
    </>
  );
};

export default ItemTags;
