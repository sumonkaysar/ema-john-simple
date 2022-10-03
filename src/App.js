import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  const [hiddenCart, setHiddenCart] = useState("cart-hidden");
  const toggleCart = (isHidden) => {
    if (isHidden === 'cart-hidden') {
      setHiddenCart("");
    }else{
      setHiddenCart("cart-hidden");
    }
  }

  return (
    <div>
      <Header hiddenCart={hiddenCart} toggleCart={toggleCart}></Header>
      <Shop hiddenCart={hiddenCart} toggleCart={toggleCart}></Shop>
    </div>
  );
}

export default App;
