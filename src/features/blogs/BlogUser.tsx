import { useSelector } from "react-redux"
import { selectAllUsers } from "../users/usersSlice"
import { FC } from "react"

export interface User {
  userId: string
}

const BlogUser: FC<User> = ({ userId }) => {
  const users = useSelector(selectAllUsers)
  const user = users.find((user) => user.id === userId)
  return (
    <span>
      by{" "}
      <mark style={{ fontSize: "16px", fontWeight: "bold" }}>
        {user ? user.name : "Unknown User"}
      </mark>
    </span>
  )
}
export default BlogUser
