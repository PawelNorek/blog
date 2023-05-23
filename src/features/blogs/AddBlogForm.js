import { useState } from "react"

const initialState = {
  title: "",
  body: "",
  userId: "",
}

const AddBlogForm = () => {
  const [form, setForm] = useState(initialState)

  const { title, body, userId } = form
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleUser = (e) => {
    const { value } = e.target
    setForm({ ...form, userId: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section>
      <h2>Add Blog</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="userId">User:</label>
        <select id="userId" value={userId} onChange={handleUser}>
          <option value=""></option>
        </select>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <label htmlFor="body">Body:</label>
        <textarea id="body" name="body" value={body} onChange={handleChange} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  )
}

export default AddBlogForm
