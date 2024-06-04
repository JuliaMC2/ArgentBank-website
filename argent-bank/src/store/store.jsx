import { configureStore } from '@reduxjs/toolkit'
import infoCardsReducer from './infoCardsSlice'
import tokenReducer from './tokenSlice'

export default configureStore({
  reducer: {
    infoCards: infoCardsReducer,
    token: tokenReducer,
  },
})