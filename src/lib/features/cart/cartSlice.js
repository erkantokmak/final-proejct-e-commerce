import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: []
}

const cartSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItem.push(action.payload)
        }
    }
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;