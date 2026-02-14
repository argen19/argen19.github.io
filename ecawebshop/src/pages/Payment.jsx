import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Payment() {
  const navigate = useNavigate();

  const navLinks = [
    { to: '/cart', label: 'Cart' },
    { to: '/payment', label: 'Payment' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <>
      <Header />
      <Navigation links={navLinks} />
      
      <div className="page-content">
        <main>
          <div className="title">
            <h2>Payment & Delivery</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <select required>
              <option value="">Select Payment Method</option>
              <option>Credit Card</option>
              <option>GCash</option>
              <option>Cash on Delivery</option>
            </select>

            <select required>
              <option value="">Delivery Option</option>
              <option>Pickup</option>
              <option>Home Delivery</option>
            </select>

            <button type="submit">Confirm Payment</button>
          </form>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Payment;
