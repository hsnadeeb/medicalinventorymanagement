import React, { useState } from 'react';
import { useApiContext } from '../context/ApiContext'; // Corrected import
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormC = () => {
  const { state, dispatch } = useApiContext();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    quantity: 0,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      ...formData,
    };
    dispatch({ type: 'ADD_TO_INVENTORY', payload: newItem });
    setFormData({
      name: '',
      description: '',
      price: 0,
      quantity: 0,
    });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Medicine Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter medicine name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter price"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group controlId="quantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter quantity"
          value={formData.quantity}
          onChange={(e) =>
            setFormData({ ...formData, quantity: e.target.value })
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Item
      </Button>
    </Form>
  );
};

export default FormC;
