import { createSlice } from "@reduxjs/toolkit";

const getItemLocalStorage = () => {
    if (typeof window !== "undefined") {
        const user = window.localStorage.getItem("cartItem");
        return user ? JSON.parse(user) : false;
    }
    return false;
};

const initialState = {
    cartItem: getItemLocalStorage()
}

const cartSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cartItem = action.payload;
            if (typeof window !== "undefined") {
                window.localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
            }
        }
    }
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;