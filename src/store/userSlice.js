import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: "roi tai",
  user: "tinnawat",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state) => {
      state.value = "tinnawat login"
      state.user = "Tinnawat user"
    },
    logOut: (state) => {
      state.value = "tinnawat logOut"
      state.user = "Tinnawat user"
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut, incrementByAmount } = userSlice.actions

export default userSlice.reducer
