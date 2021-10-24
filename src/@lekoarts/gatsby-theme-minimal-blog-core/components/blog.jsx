import * as React from "react"
import Blog from "../../../components/blog"

export default function MinimalBlogCoreBlog({ ...props }) {
  const {
    data: { allPost },
  } = props

  return <Blog posts={allPost.nodes} {...props} />
}