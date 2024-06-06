import { createSlice, current } from '@reduxjs/toolkit'

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState: {
    value: [{
        "title":"Argent Bank Checking (x8349)",
        "amount":2082.79,
        "description":"Available Balance",
        "isCollapseOpen":false,
        "transactions":
          [{
            "id":"0",
            "date":"27/02/2020",
            "description":"Golden Sun Bakery",
            "amount":"8.00",
            "balance":"298.00",
            "type":"Electronic",
            "category":"Food",
            "note":"Lorem Ipsum",
            "isCollapseOpen":false
          },{
            "id":"1",
            "date":"27/02/2020",
            "description":"Golden Sun Bakery",
            "amount":"8.00",
            "balance":"298.00",
            "type":"Electronic",
            "category":"Food",
            "note":"Lorem Ipsum",
            "isCollapseOpen":false
          },{
            "id":"2",
            "date":"27/02/2020",
            "description":"Golden Sun Bakery",
            "amount":"8.00",
            "balance":"298.00",
            "type":"Electronic",
            "category":"Food",
            "note":"Lorem Ipsum",
            "isCollapseOpen":false
          },{
            "id":"3",
            "date":"27/02/2020",
            "description":"Golden Sun Bakery",
            "amount":"8.00",
            "balance":"298.00",
            "type":"Electronic",
            "category":"Food",
            "note":"Lorem Ipsum",
            "isCollapseOpen":false
          }]
      },{
        "title":"Argent Bank Savings (x6712)",
        "amount":"10,928.42",
        "description":"Available Balance",
        "isCollapseOpen":false,
        "transactions":
          [{
            "id":"0",
            "date":"27/02/2020",
            "description":"Golden Sun Bakery",
            "amount":"8.00",
            "balance":"298.00",
            "type":"Electronic",
            "category":"Food",
            "note":"Lorem Ipsum",
            "isCollapseOpen":false
          },{
            "id":"1",
            "date":"27/02/2020",
            "description":"Golden Sun Bakery",
            "amount":"8.00",
            "balance":"298.00",
            "type":"Electronic",
            "category":"Food",
            "note":"Lorem Ipsum",
            "isCollapseOpen":false
          },{
            "id":"2",
            "date":"27/02/2020",
            "description":"Golden Sun Bakery",
            "amount":"8.00",
            "balance":"298.00",
            "type":"Electronic",
            "category":"Food",
            "note":"Lorem Ipsum",
            "isCollapseOpen":false
          },{
            "id":"3",
            "date":"27/02/2020",
            "description":"Golden Sun Bakery",
            "amount":"8.00",
            "balance":"298.00",
            "type":"Electronic",
            "category":"Food",
            "note":"Lorem Ipsum",
            "isCollapseOpen":false
          }]
      },{
        "title":"Argent Bank Credit Card (x8349)",
        "amount":"184.30",
        "description":"Current Balance",
        "isCollapseOpen":false,
        "transactions":
          [{
            "id":"0",
            "date":"27/02/2020",
            "description":"Golden Sun Bakery",
            "amount":"8.00",
            "balance":"298.00",
            "type":"Electronic",
            "category":"Food",
            "note":"Lorem Ipsum",
            "isCollapseOpen":false
          },{
            "id":"1",
            "date":"27/02/2020",
            "description":"Golden Sun Bakery",
            "amount":"8.00",
            "balance":"298.00",
            "type":"Electronic",
            "category":"Food",
            "note":"Lorem Ipsum",
            "isCollapseOpen":false
          },{
            "id":"2",
            "date":"27/02/2020",
            "description":"Golden Sun Bakery",
            "amount":"8.00",
            "balance":"298.00",
            "type":"Electronic",
            "category":"Food",
            "note":"Lorem Ipsum",
            "isCollapseOpen":false
          },{
            "id":"3",
            "date":"27/02/2020",
            "description":"Golden Sun Bakery",
            "amount":"8.00",
            "balance":"298.00",
            "type":"Electronic",
            "category":"Food",
            "note":"Lorem Ipsum",
            "isCollapseOpen":false
          }]
  }],
  },
  reducers: {
    toggleTransactionsCollapse: (state, action) => {
      state.value[action.payload].isCollapseOpen = !current(state.value)[action.payload].isCollapseOpen
    },
    toggleTransactionCollapse: (state, action) => {
      const accountId=action.payload.substring(0, action.payload.indexOf('_'))
      const transactionId=action.payload.substring(action.payload.indexOf('_')+1)
      state.value[accountId].transactions[transactionId].isCollapseOpen = !current(state.value)[accountId].transactions[transactionId].isCollapseOpen
    },
  }
  })

export const { toggleTransactionsCollapse, toggleTransactionCollapse } = accountsSlice.actions

export default accountsSlice.reducer