import { createSlice } from '@reduxjs/toolkit'

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState: {
    value: [{
        "title":"Argent Bank Checking (x8349)",
        "amount":"2,082.79",
        "description":"Available Balance",
        "transactions":""
      },{
        "title":"Argent Bank Savings (x6712)",
        "amount":"10,928.42",
        "description":"Available Balance",
        "transactions":""
      },{
        "title":"Argent Bank Credit Card (x8349)",
        "amount":"184.30",
        "description":"Current Balance",
        "transactions":""
  }],
  },
})

export const { } = accountsSlice.actions

export default accountsSlice.reducer