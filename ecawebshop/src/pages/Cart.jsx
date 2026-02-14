import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const navLinks = [
    { to: '/products', label: 'Products' },
    { to: '/cart', label: 'Cart' },
    { to: '/payment', label: '->Payment' }
  ];

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);

    const totalPrice = storedCart.reduce((sum, item) => sum + (item?.price || 0), 0);
    setTotal(totalPrice);
  }, []);

  return (
    <>
      <Header />
      <Navigation links={navLinks} />
      
      <div className="page-content">
        <main>
          <div className="title">
            <h2>Your Shopping Cart</h2>
          </div>

          <div id="cartItems">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <p key={index}>
                  {item.name} - ₱{item.price.toLocaleString()}
                </p>
              ))
            )}
          </div>

          <h3 id="totalPrice">Total: ₱{total.toLocaleString()}</h3>

          {cart.length > 0 && (
            <Link to="/payment" className="btn">
              Proceed to Payment
            </Link>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
