import { configureStore } from '@reduxjs/toolkit';
import {cartItemSlice} from './features/cartItem/cartItemSlice';


 const store = configureStore({
  reducer: {
    cartItems: cartItemSlice.reducer,
  },
})

export default store;