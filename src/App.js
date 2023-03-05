import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import CartContextProvider from './Global/cartContext';
import ProductContextProvider from './Global/ProductContext';
import Product from './component/Product';
import Cart from './component/Cart';



const App = () => {


  return (
    <div>
       <ProductContextProvider>
        <CartContextProvider>
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Product/>}/> 
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </Router>
        </CartContextProvider>
    </ProductContextProvider>
  
    </div>
  );
}

export default App
