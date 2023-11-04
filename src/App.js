import React, { useState } from 'react';
import { ApiProvider  } from './context/ApiContext';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Form from './components/Form';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import Button from 'react-bootstrap/Button';

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <ApiProvider>
      <div className="container">
        <div className="d-flex justify-content-between mt-4 mb-4">
          <h1>Inventory Management App</h1>
          <Button onClick={() => setCartVisible(!cartVisible)}>
            {cartVisible ? 'Close Cart' : 'Open Cart'}
          </Button>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form />
          </div>
          <div className="col-md-6">
            <Cart show={cartVisible} />
          </div>
          <div className="col-md-12">
            <ItemList />
          </div>
        </div>
      </div>
    </ApiProvider>
  );
}

export default App;
