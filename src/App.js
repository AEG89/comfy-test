import React from 'react';
import './App.css';
// eslint-disable-next-line
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Footer,Navbar,Sidebar } from './components';




import {Home, Products, SingleProduct, 
  About, Cart, Error, Checkout, PrivateRoute, AuthWrapper} from './Pages'


function App() {
  return (
    <AuthWrapper>
    <div>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        <Route
            path='checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
      </Routes>
      <Footer/>
    </div>
    </AuthWrapper>
   
    
  );
  
}

export default App;
