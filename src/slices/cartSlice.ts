import { createSlice } from "@reduxjs/toolkit";
import { Good } from "../components/types/types";

type InitialState = {
    cart: Good[];
};

const initialState: InitialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload,
            );
        },
        increaseItemQuantity(state, action) {
            const item = state.cart.find(
                (item) => item.id === action.payload,
            );
            if (item) {
                item.quantity += 1;
                item.totalPrice = item.quantity * item.unitPrice;
            }
        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(
                (item) => item.id === action.payload,
            );
            if (item) {
                item.quantity -= 1;
                item.totalPrice = item.quantity * item.unitPrice;
            }
        },
        clearCart(state) {
            state.cart = [];
        },
    },
});

export const getCart = ({ cart }: { cart: InitialState }) => cart.cart;
export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
