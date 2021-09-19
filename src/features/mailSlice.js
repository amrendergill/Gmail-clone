import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    selectedMail: null,
    sendMessageIsopen: false,
  },
  
  reducers: {
    selectMail:(state,action) => {
      state.selectedMail=action.payload;
    },
    openSendMessage: (state) => {
     state.sendMessageIsopen=true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsopen=false; 
    },
   
    
  },
});
  
  

export const {selectMail, openSendMessage , closeSendMessage } = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsopen;


export default mailSlice.reducer;
