import * as React from "react";
import Homepage from "../../../components/homepage";

export default function MinimalBlogCoreHomepage({ ...props }) {
  const {
    data: { allPost },
  } = props;

  return <Homepage posts={allPost.nodes} {...props} />;
}
