import React from 'react';
import { useApiContext } from '../context/ApiContext';
import Button from 'react-bootstrap/Button';

const Cart = ({ show }) => {
  const { state, dispatch } = useApiContext();

  const handleRemoveFromCart = async (item) => {
    try {
      // Make an API DELETE request to remove an item from the cart
      const response = await fetch(`https://crudcrud.com/api/2e89e766587046daa16ff07083cbe7cb/cartItems/${item.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // If the request was successful, you can update the state or perform any necessary actions
        console.log('Removed item from cart:', item);
      } else {
        console.error('Failed to remove item from cart.');
      }
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      {show && state.cart.map((item) => (
        <div key={item.id} className="mb-3">
          <h4>{item.title}</h4>
          <p>Price: ${(Math.random() * 100).toFixed(2)}</p>
          <Button
            variant="danger"
            onClick={() => handleRemoveFromCart(item)}
          >
            Remove from Cart
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
