import { createSlice } from '@reduxjs/toolkit'
import React from 'react';

const initialState ={ActiveFeeds:[],ArchivedFeeds:[]};

const API_Data = createSlice({
  name: 'APIData',
  initialState,
  reducers: {
    SetActiveFeeds(state,action){
      state.ActiveFeeds =action.payload.activefeeds;
    },
    SetArchivedFeeds(state,action){
      state.ArchivedFeeds = action.payload.archivedfeeds;
    },
  }

})

export const { SetActiveFeeds,SetArchivedFeeds} = API_Data.actions;

export default API_Data.reducer;