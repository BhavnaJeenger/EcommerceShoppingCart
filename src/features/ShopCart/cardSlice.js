import { createSlice } from '@reduxjs/toolkit';
import {toast} from 'react-toastify';
const initialState={
    item:[],//final card item
    tempItems:[],//temparary item for updates
    totalPrice:0

}

const cartSlice = createSlice({
name:'cart',
initialState,
reducers:{
    addToCart(state,action){
        const exitingItem= state.item.find(item=>item.id ===action.payload.id);
        if(exitingItem){
            exitingItem.quantity += 1
            toast.info("incresed product Quantity",{
                autoClose: 1000, // 1seconds
            });
        }else{
            state.item.push({...action.payload,quantity : 1});
            // toast.success("Added new product to Cart");
                toast.success("Added new product to Cart", {
                  autoClose: 1000, // 1seconds
                });
        }
        state.tempItems = [...state.item];
        state.totalPrice= state.item.reduce((sum,item)=> sum+item.price * item.quantity,0)
    },
    updateTempQuantity(state,action){
        const tempItem = state.tempItems.find(item=>item.id==action.payload.id);
        if(tempItem){
            tempItem.quantity=action.payload.quantity
        }
    },
    applyTempUpdate(state,action){
        const tempItem = state.tempItems.find((item)=>item.id === action.payload);
        const cartItem = state.item.find((item)=>item.id===action.payload);
        if(cartItem && tempItem){
            cartItem.quantity = tempItem.quantity;
        }
        state.totalPrice= state.item.reduce((sum,item)=> sum+item.price * item.quantity,0)
        toast.success("Update product Quantity", {
            autoClose: 1000, // 1seconds
        });
    },
    removeFormCart(state,action){
        state.item = state.item.filter(item=>item.id!==action.payload);
        state.tempItems = [...state.item];
        state.totalPrice= state.item.reduce((sum,item)=> sum+item.price * item.quantity,0)
        toast.error("Delete product in Cart", {
            autoClose: 1000, // 1seconds
        });
    }
}

})
export const {addToCart,removeFormCart,updateTempQuantity,applyTempUpdate}= cartSlice.actions;

export default cartSlice.reducer;