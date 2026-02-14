import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/profile', label: 'Profile' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/login', label: 'Log In' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || message === '') {
      setResponse('Please complete all required fields before submitting.');
    } else {
      setResponse(`Thank you for your inquiry, ${name}. Our sales team will contact you shortly.`);
      setName('');
      setMessage('');
    }
  };

  return (
    <>
      <Header />
      <Navigation links={navLinks} />
      
      <div className="page-content">
        <main>
          <form onSubmit={handleSubmit}>
            <h2>Contact Our Sales Team</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              placeholder="Your Inquiry"
            ></textarea>
            <button type="submit">Submit Inquiry</button>
          </form>

          <p
            id="response"
            style={{
              color: response.includes('Thank you') ? 'green' : 'red',
              marginTop: '15px',
              fontSize: '15px'
            }}
          >
            {response}
          </p>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
