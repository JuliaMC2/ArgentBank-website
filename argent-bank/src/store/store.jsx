import { configureStore } from '@reduxjs/toolkit'
import infoCardsReducer from './infoCardsSlice'

export default configureStore({
  reducer: {
    infoCards: infoCardsReducer,
  },
})