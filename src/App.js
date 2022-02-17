import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [activateModal, setModalActive] = useState(false);
  const toggleModal = () => {
    setModalActive(!activateModal);
  }
  return (
    <CartProvider>
      {activateModal && <Cart onCancel={toggleModal}/>}
      <Header onTriggerCart={toggleModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
