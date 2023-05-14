import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
  <>
  <div className="App">
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"Novedades del sitio!"} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>ERROR 404 - SITIO NO ENCONTRADO</h1>} /> 
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </div>
  </>
  );
}

export default App;
