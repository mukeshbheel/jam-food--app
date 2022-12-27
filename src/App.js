import { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cartProvider';



function App() {

  const [cartIsvisible, cartIsvisibleHandler] = useState(false);

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
      </div>
    </CartProvider>
  );
}

export default App;
