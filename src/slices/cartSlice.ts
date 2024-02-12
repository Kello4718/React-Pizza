import { createSlice } from "@reduxjs/toolkit";

export type TCartItem = {
    id: number;
    name: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
};

export type Order = {
    id: string;
    cart: TCartItem[];
    customer: string;
    name: string;
    phone: string;
    address: string;
    priority?: boolean;
    estimatedDelivery: string;
    orderPrice: number;
    priorityPrice?: number;
};

type InitialState = {
    cart: TCartItem[];
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
                (item: TCartItem) => item.id !== action.payload,
            );
        },
        increaseItemQuantity(state, action) {
            const item = state.cart.find(
                (item: TCartItem) => item.id === action.payload,
            );
            if (item) {
                item.quantity += 1;
                item.totalPrice = item.quantity * item.unitPrice;
            }
        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(
                (item: TCartItem) => item.id === action.payload,
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
