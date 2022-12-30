import { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cartProvider';
import AddProduct from './components/Forms/AddProduct';



function App() {

  const [cartIsvisible, cartIsvisibleHandler] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);


  const toggleAddProduct = () => {
    setShowAddProduct(prev => !prev);
  }

  const showCart = () => {
    cartIsvisibleHandler(true);
  };

  const hideCart = () => {
    cartIsvisibleHandler(false);
  }
  return (
    <CartProvider>
      <div className="App">
        {cartIsvisible && <Cart onClose={hideCart} />}
        <Header onShowCart={showCart} />
        <main>


          <Meals />
        </main>
        <button className="zIndex" onClick={toggleAddProduct}>{showAddProduct ? 'Hide Add Product' : 'Show Add Product'}</button>
        {showAddProduct && <AddProduct className="zIndex" />}
      </div>
    </CartProvider>
  );
}

export default App;
