import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [activateModal, setModalActive] = useState(false);
  const toggleModal = () => {
    setModalActive(!activateModal);
  }
  return (
    <Fragment>
      {activateModal && <Cart onCancel={toggleModal}/>}
      <Header onTriggerCart={toggleModal} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
