import { configureStore } from '@reduxjs/toolkit';
import  productReducer  from './features/product/productSlice'
import  themeReducer  from './features/theme/themeSlice'

export const makeStore = () => {
  return configureStore({
   reducer: {
        product: productReducer,
        theme: themeReducer
    }
  })
}