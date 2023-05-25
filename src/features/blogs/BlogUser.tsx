export interface User {
  userId: string
}

const BlogUser = (params: User) => {
  return (
    <span>
      by{" "}
      <mark style={{ fontSize: "16px", fontWeight: "bold" }}>
        {params.userId}
      </mark>
    </span>
  )
}
export default BlogUser
