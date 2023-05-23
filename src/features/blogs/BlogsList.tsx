import React from "react"
import { useAppSelector } from "../../app/hooks"
import BlogUser from "./BlogUser"
import ResponseButtons from "./ResponseButtons"

const BlogsList = () => {
  const blogs = useAppSelector((state) => state.blogs)
  const renderedBlogs = blogs.map((blog) => (
    <div key={blog.id} className="card">
      <div className="card-body">
        <h3>{blog.title}</h3>
        <p>{blog.body.substring(0, 100)}</p>
        <p className="lead">{/* <BlogUser userId={blog.userId} /> */}</p>
        <ResponseButtons />
      </div>
    </div>
  ))

  return (
    <section>
      <h2>Blogs</h2>
      {renderedBlogs}
    </section>
  )
}

export default BlogsList
