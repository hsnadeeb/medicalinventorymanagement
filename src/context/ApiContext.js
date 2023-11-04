// ApiContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const ApiContext = createContext();

const initialState = {
  inventory: [],
  cart: [],
};

const apiReducer = (state, action) => {
  switch (action.type) {
    case 'SET_INVENTORY':
      return { ...state, inventory: action.payload };
    case 'SET_CART':
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  // Load initial data from the API
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch('https://crudcrud.com/api/2e89e766587046daa16ff07083cbe7cb/inventory'); // Replace with your API endpoint
        const data = await response.json();
        dispatch({ type: 'SET_INVENTORY', payload: data });
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

    // Call the fetchInventory function to load initial data
    fetchInventory();
  }, []);

  // Load the cart data from the API (simulated)
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch('https://crudcrud.com/api/2e89e766587046daa16ff07083cbe7cb/cartItems'); // Replace with your API endpoint
        const data = await response.json();
        dispatch({ type: 'SET_CART', payload: data });
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    // Call the fetchCart function to load cart data (simulated)
    fetchCart();
  }, []);

  return (
    <ApiContext.Provider value={{ state, dispatch }}>
      {children}
    </ApiContext.Provider>
  );
};

const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApiContext must be used within an ApiProvider');
  }
  return context;
};

export { ApiProvider, useApiContext };
