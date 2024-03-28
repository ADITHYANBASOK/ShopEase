import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  items: [],
};

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
            console.log("item is already existed");
          return state;
        } else {
       
          return {
            ...state,
            items: [...state.items, action.payload],
          };
        }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};