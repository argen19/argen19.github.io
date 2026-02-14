import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Confirmation() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);

    const totalPrice = storedCart.reduce((sum, item) => sum + (item?.price || 0), 0);
    setTotal(totalPrice);

    // Clear cart after displaying receipt
    localStorage.clear();
  }, []);

  return (
    <>
      <Header />
      
      <div className="page-content">
        <main>
          <div className="title">
            <h2>Transaction Successful</h2>
          </div>

          <p>Thank you for choosing CArce.</p>

          <div id="receipt">
            <h3>E-Receipt</h3>
            {cart.map((item, index) => (
              <p key={index}>
                {item.name} - ₱{item.price.toLocaleString()}
              </p>
            ))}
          </div>

          <h3 id="totalPrice">Total: ₱{total.toLocaleString()}</h3>

          <Link to="/" className="btn">
            Back to Home
          </Link>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Confirmation;
