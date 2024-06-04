import { createSlice } from '@reduxjs/toolkit'

export const infoCardsSlice = createSlice({
  name: 'infoCards',
  initialState: {
    value: [{
        "src":"/assets/img/icon-chat.png",
        "alt":"Chat icon",
        "title":"You are our #1 priority",
        "text":"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },{
        "src":"/assets/img/icon-money.png",
        "alt":"Money icon",
        "title":"More savings means higher rates",
        "text":"The more you save with us, the higher your interest rate will be!"
    },{
        "src":"/assets/img/icon-security.png",
        "alt":"Security icon",
        "title":"Security you can trust",
        "text":"We use top of the line encryption to make sure your data and money is always safe."
  }],
  },
  reducers: {
  },
})

export const { } = infoCardsSlice.actions

export default infoCardsSlice.reducer