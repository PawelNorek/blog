import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

const initialState = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Alice Spring" },
  { id: "3", name: "James Bond" },
]

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
})

export const selectAllUsers = (state: RootState) => state.users

export default usersSlice.reducer
