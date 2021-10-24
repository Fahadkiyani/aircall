import { createSlice } from '@reduxjs/toolkit'
import React from 'react';

const initialState = [
  // { id: '1', title: 'First Post!', content: 'Hello!' },
  // { id: '2', title: 'Second Post', content: 'More text' },
  // { id: '2', title: 'Second Post', content: 'More text' }

]

let arr = [];
const cartSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addItemToCart(state,action){
      state.push(action.payload.item);
      // console.log(action.payload.item);
    },
    removeItemToCart(state,action){
      return state.filter((cartItem)=> cartItem.id !== action.payload.item.id)
    }
  }

})

export const { addItemToCart,removeItemToCart } = cartSlice.actions

export default cartSlice.reducer