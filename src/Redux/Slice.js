import { createSlice } from '@reduxjs/toolkit'
import React from 'react';

const initialState = {title:'Active Feeds',reload:false}

const changeSlice = createSlice({
  name: 'change',
  initialState,
  reducers: {
    changeTitle(state,action){
      state.title = action.payload.title;

    },
    changeReload(state,action){
      state.reload = action.payload.reload;
      console.log('reload ran and return value:',state.reload);
    },
  }

})

export const { changeReload,changeTitle } = changeSlice.actions;

export default changeSlice.reducer;