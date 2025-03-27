import { configureStore } from '@reduxjs/toolkit'
import productReduce from "../features/ShopCart/productSlice"

export const store = configureStore({
  reducer: {
    product:productReduce
  },
})
