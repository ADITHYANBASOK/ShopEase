import React, { createContext, useContext, useReducer } from 'react';
// Define an initial state for the cart
const initialState = {
  items: [],
};

// Create a context for the shopping cart
const CartContext = createContext();

// Define a reducer function to update the cart state based on actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    // Add more cases for other actions like remove item, clear cart, etc.
    default:
      return state;
  }
};

// Create a custom hook to use the cart context and provide access to cart state and dispatch function
export const useCart = () => useContext(CartContext);

// Create a CartProvider component to wrap your application with the cart context
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};