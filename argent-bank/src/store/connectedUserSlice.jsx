import { createSlice, current } from '@reduxjs/toolkit'

export const connectedUserSlice = createSlice({
  name: 'infoCards',
  initialState: {
    value: {
        "userName":"Tony Jarvis",
        "firstName":"Tony",
        "lastName":"Stark",
        "isCollapseOpen":false
    },
  },
  reducers: {
    toggleUserCollapse: (state, action) => {
      state.value.isCollapseOpen = !current(state.value).isCollapseOpen
    },
    setUserName: (state, action) => {
      state.value.userName=action.payload
    },

  },
})

export const {toggleUserCollapse, setUserName } = connectedUserSlice.actions

export default connectedUserSlice.reducer