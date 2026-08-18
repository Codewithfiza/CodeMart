import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart:(state,action)=>{
            const newItem = action.payload;
            const existing = state.items.find((item)=>item.id === newItem.id)

            if(existing){
                existing.quantity += newItem.quantity;
            }else{
                state.items.push(newItem);
            }

        },
        removeFromCart:(state, action)=>{
            state.items = state.items.filter((item)=> item.id !== action.payload);

        },
        updateQuantity:(state,action)=>{
            const {id, quantity} = action.payload;
            const item = state.items.find((item)=>item.id === id)
            if(item){
                item.quantity = Math.max(1,quantity);
            }

        },
        clearCart: (state)=>{
            state.items = [];

        },
        setCart:(state,action)=>{
            state.items = action.payload;

        }
    }

});

export const {addToCart, removeFromCart, updateQuantity, clearCart,setCart} = cartSlice.actions;


export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state)=> state.cart.items.reduce((total,item)=> total + item.quantity, 0);
export const selectCartTotal = (state)=> state.cart.items.reduce((total,item)=> total + item.price * item.quantity,0);


export default cartSlice.reducer;