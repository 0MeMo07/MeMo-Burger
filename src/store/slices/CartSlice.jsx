import { createSlice } from "@reduxjs/toolkit";

const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const storedQuantity = localStorage.getItem('quantity') || 0;

const initialState = {
  cartItems: storedCartItems,
  quantity: parseInt(storedQuantity) 
};

const CartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addCart: (state, action) => {
      const { id, Image, name, price } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        existingItem.itemAmount++; 
      } else {
        const newItem = { id, Image, name, price, itemAmount: 1 }; 
        state.cartItems.push(newItem); 
      }

      state.quantity++;

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem('quantity', state.quantity.toString());
    },
    removeItem: (state, action) => {
      const itemToRemoveIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemToRemoveIndex !== -1) {
        const itemToRemove = state.cartItems[itemToRemoveIndex];
        if (itemToRemove.itemAmount > 1) {
          itemToRemove.itemAmount--; 
        } else {
          state.cartItems.splice(itemToRemoveIndex, 1); 
        }
        state.quantity--;
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      localStorage.setItem('quantity', state.quantity.toString());
    },
    removeAllItemsById: (state, action) => {
      const itemIdToRemove = action.payload.id;
      const updatedCartItems = state.cartItems.filter(item => item.id !== itemIdToRemove);
      const updatedQuantity = updatedCartItems.reduce((total, item) => total + item.itemAmount, 0); 
    
      state.cartItems = updatedCartItems;
      state.quantity = updatedQuantity;
    
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      localStorage.setItem('quantity', updatedQuantity.toString());
    }
  }
});

export const { addCart, removeItem, removeAllItemsById } = CartSlice.actions;
export const cartReducer = CartSlice.reducer;
