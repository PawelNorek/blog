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
    title: "Basic Redux-Toolkit",
    body: "The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux",
    response: {
      like: 0,
      unlike: 0,
    },
  },
  {
    id: "2",
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
      prepare(title: string, body: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
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
  },
})

export const selectAllBlogs = (state: RootState) => state.blogs

export const { addBlog } = blogsSlice.actions

export default blogsSlice.reducer
