import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Modal } from './components/Modal';

// SERVICES
import productService from './services/productService';

function App() {
  const [products, setproducts] = useState(null);
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    if(!products) {
      getProducts();
    }
  })

  const getProducts = async () => {
    let res = await productService.getAll();
    console.log(res);
    setproducts(res);
  }

 return (
  <div className="App">
    <BrowserRouter>
    <Navbar />
      <div className="pages">
        <Routes>
          <Route 
            path="/"
            element={<Home />}
            />
        </Routes>
      </div>
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}/>}
    </BrowserRouter>
    
  </div>
 );
}

export default App;