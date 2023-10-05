import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "@/app/_ts/interfaces/Product.interfaces";

export interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },
  },
});

export const cartCount = (state: RootState) => state.cart.cart.length;

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
