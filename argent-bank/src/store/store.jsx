import { configureStore } from '@reduxjs/toolkit'
import infoCardsReducer from './infoCardsSlice'
import tokenReducer from './tokenSlice'
import accountsReducer from './accountsSlice'
import connectedUserReducer from './connectedUserSlice'

export default configureStore({
  reducer: {
    infoCards: infoCardsReducer,
    token: tokenReducer,
    accounts: accountsReducer,
    connectedUser: connectedUserReducer,
  },
})