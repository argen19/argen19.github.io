import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Profile() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/profile', label: 'Profile' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/login', label: 'Sign Out' }
  ];

  return (
    <>
      <Header />
      <Navigation links={navLinks} />
      
      <div className="page-content profile-page">
        <section className="profile-card">
          <div className="profile-banner">
            <img src="/image/cover.png" alt="Cover" />
          </div>

          <div className="profile-avatar">
            <img src="/image/profile.png" alt="User" />
          </div>

          <h2>Tzuyu</h2>
          <span className="profile-role">Premium Driver</span>

          <p><strong>First Name:</strong> Tzu-yu</p>
          <p><strong>Last Name:</strong> Chou</p>
          <p><strong>Email:</strong> tzuyu@gmail.com</p>
          <p><strong>Mobile Number:</strong> 09216799439</p>
          <p><strong>Home Address:</strong> Sampaloc Street, Manila City</p>

          <div className="profile-stats">
            <div>
              <h4>Favorite</h4>
              <p>Luxury Sedan</p>
            </div>
            <div>
              <h4>Member Since</h4>
              <p>2022</p>
            </div>
            <div>
              <h4>Orders</h4>
              <p>2</p>
            </div>
          </div>

          <Link to="/products" className="btn profile-btn">
            Order again
          </Link>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
