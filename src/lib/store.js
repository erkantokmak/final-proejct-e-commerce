import { configureStore } from '@reduxjs/toolkit';
import  productReducer  from './features/product/productSlice'
import  themeReducer  from './features/theme/themeSlice'
import cartReducer from './features/cart/cartSlice'

export const makeStore = () => {
  return configureStore({
   reducer: {
        cart: cartReducer,
        product: productReducer,
        theme: themeReducer,
        
    }
  })
}