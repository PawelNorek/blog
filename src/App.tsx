import React from "react"
import "./App.css"
import BlogsList from "./features/blogs/BlogsList"

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Blog Form</h2>
        </div>
        <div className="col-md-6">
          <BlogsList />
        </div>
      </div>
    </div>
  )
}

export default App
