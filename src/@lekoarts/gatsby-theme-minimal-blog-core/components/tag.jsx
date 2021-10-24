import * as React from "react"
import Tag from "../../../components/tag"

export default function MinimalBlogCoreTag({ ...props }) {
  const {
    data: { allPost },
  } = props

  return <Tag posts={allPost.nodes} {...props} />
}