import React, { useEffect } from 'react';
import { useApiContext } from '../context/ApiContext';
import Button from 'react-bootstrap/Button';

const ItemList = () => {
  const { state, dispatch } = useApiContext();

  const handleAddToCart = async (item) => {
    try {
      // Make an API POST request to add an item to the cart
      const response = await fetch('https://crudcrud.com/api/2e89e766587046daa16ff07083cbe7cb/cartItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (response.ok) {
        // If the request was successful, you can update the state or perform any necessary actions
        console.log('Added item to cart:', item);
      } else {
        console.error('Failed to add item to cart.');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      // Make an API DELETE request to delete an item from the inventory
      const response = await fetch(`https://crudcrud.com/api/2e89e766587046daa16ff07083cbe7cb/cartItems/${itemId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // If the request was successful, you can update the state or perform any necessary actions
        console.log('Deleted item with ID:', itemId);
      } else {
        console.error('Failed to delete item with ID:', itemId);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h2>Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>${(Math.random() * 100).toFixed(2)}</td>
              <td>1</td>
              <td>
                <Button variant="primary" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
