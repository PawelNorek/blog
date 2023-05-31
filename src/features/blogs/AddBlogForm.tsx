import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBlog } from "./blogsSlice"
import { selectAllUsers } from "../users/usersSlice"

const initialState = {
  title: "",
  body: "",
  userId: "",
}

const AddBlogForm = () => {
  const users = useSelector(selectAllUsers)
  const [form, setForm] = useState(initialState)

  const dispatch = useDispatch()

  const { title, body, userId } = form

  const usersOption = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleUser = (e: { target: { value: string } }) => {
    const { value } = e.target
    setForm({ ...form, userId: value })
  }

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (title && body) {
      dispatch(addBlog(title, body, userId))
      setForm({ title: "", body: "", userId: "" })
    }
  }

  const isFill = Boolean(title) && Boolean(body) && Boolean(userId)

  return (
    <section>
      <h2>Add Blog</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="userId">User:</label>
        <select id="userId" value={userId} onChange={handleUser}>
          <option value=""></option>
          {usersOption}
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
        <button type="submit" className="btn btn-primary" disabled={!isFill}>
          Submit
        </button>
      </form>
    </section>
  )
}

export default AddBlogForm
