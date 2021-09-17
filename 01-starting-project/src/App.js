import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

import CartProvider from "./store/CartProvider";

import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  const onToggleModal = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <CartProvider>
      <Cart show={show} onToggle={onToggleModal}/>
      <Header onToggleModal={onToggleModal}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
