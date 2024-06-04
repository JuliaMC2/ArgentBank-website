import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    value: ''},
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
    reset: (state) => {
      state.value = ''
    },
  },
})

export const { set, reset } = tokenSlice.actions

export default tokenSlice.reducer