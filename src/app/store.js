import { configureStore } from '@reduxjs/toolkit'
import productReduce from "../features/ShopCart/productSlice"
import cartReducer from "../features/ShopCart/cartSlice"

export const store = configureStore({
  reducer: {
    product:productReduce,
    cart:cartReducer
  },
})
