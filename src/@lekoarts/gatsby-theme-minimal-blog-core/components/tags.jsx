import * as React from "react";
import Tags from "../../../components/tags";

export default function MinimalBlogCoreTags({ ...props }) {
  const {
    data: { allPost },
  } = props;

  return <Tags list={allPost.group} {...props} />;
}
