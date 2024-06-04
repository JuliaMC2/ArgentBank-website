import { configureStore } from '@reduxjs/toolkit'
import infoCardsReducer from './infoCardsSlice'
import tokenReducer from './tokenSlice'
import accountsReducer from './accountsSlice'

export default configureStore({
  reducer: {
    infoCards: infoCardsReducer,
    token: tokenReducer,
    accounts: accountsReducer,
  },
})