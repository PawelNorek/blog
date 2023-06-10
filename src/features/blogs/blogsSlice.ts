import { createSlice, nanoid } from "@reduxjs/toolkit"

import { RootState } from "../../app/store"

export interface BlogsState {
  userId: string
  id: string
  title: string
  body: string
  response: {
    like: number
    unlike: number
  }
}

const initialState: Array<BlogsState> = [
  {
    id: "1",
    userId: "2",
    title: "Basic Redux-Toolkit",
    body: "The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux",
    response: {
      like: 0,
      unlike: 0,
    },
  },
  {
    id: "2",
    userId: "1",
    title: "React Redux",
    body: "React Redux is maintained by the Redux team, and kept up-to-date with the latest APIs from Redux and React.",
    response: {
      like: 0,
      unlike: 0,
    },
  },
]

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    _addBlog: {
      reducer(state: BlogsState[], action: { payload: any }) {
        state.push(action.payload)
      },
      prepare(title: string, body: string, userId: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
            userId,
            response: {
              like: 0,
              unlike: 0,
            },
          },
        }
      },
    },
    get addBlog() {
      return this._addBlog
    },
    set addBlog(value) {
      this._addBlog = value
    },
    responseAdded(state, action) {
      const { blogId, response } = action.payload
      const existingBlog = state.find((blog) => blog.id === blogId)
      if (existingBlog) {
        existingBlog.response[response]++
      }
    },
  },
})

export const selectAllBlogs = (state: RootState) => state.blogs

export const { addBlog, responseAdded } = blogsSlice.actions

export default blogsSlice.reducer
