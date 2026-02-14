import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Home() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/profile', label: 'Profile' },
    { to: '/products', label: 'Products' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/login', label: 'Log In' }
  ];

  return (
    <>
      <Header />
      <Navigation links={navLinks} />
      
      <div className="page-content">
        <section className="hero">
          <div className="hero-content">
            <h2 style={{ textAlign: 'left' }}>
              Welcome, <span style={{ color: 'rgb(160, 20, 20)' }}>Driver!</span>
            </h2>
            <h1 style={{ fontSize: '66px' }}>Buy A</h1>
            <h1 className="car-title">
              C<span className="car-a"><img src="/image/car-a.png" alt="A" /></span>R
            </h1>
          </div>
        </section>
        
        <main>
          <h2>Featured Vehicles</h2>

          <div className="products">
            <div className="card">
              <h3>Koenigsegg</h3>
              <Link to="/products">
                <img src="/image/koenigsegg.png" alt="Koenigsegg" className="car1" />
              </Link>
              <p><i>Faster acceleration, better handling and drifting.</i></p>
            </div>

            <div className="card">
              <h3>Bugatti</h3>
              <Link to="/products">
                <img src="/image/bugatti.png" alt="Bugatti" className="car2" />
              </Link>
              <p><i>Complete high-performance tour-de-force.</i></p>
            </div>

            <div className="card">
              <h3>Lamborghini</h3>
              <Link to="/products">
                <img src="/image/lamborghini.png" alt="Lamborghini" className="car3" />
              </Link>
              <p><i>High-power and specific torque of a new-generation turbo engine.</i></p>
            </div>
          </div>
        </main>

        <section className="intro-tagline">
          <div className="tagline-content">
            <h1>Premium Cars. Trusted Quality.</h1>
            <p>Choose from a wide range of reliable cars for every trip. Easy buying, great rates, and smooth rides — wherever you're going, we've got your wheels ready.</p>
          </div>
        </section>

        <section className="promo">
          <h1>DON'T MISS OUT.</h1>
          <img src="/image/ride.jpg" alt="Car driving" />
          <div className="promo-text">
            <h4>CArce Exclusive</h4>
            <p>Experience affordable comfort and style. Buy your dream car now with CArce.</p>
            <h4>Buy it. Ride it. Love it.</h4>
            <Link to="/login" className="btn">LOG IN NOW</Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;
