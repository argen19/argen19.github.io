import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function About() {
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
        <main>
          <section className="about-hero">
            <div className="about-text">
              <h2>About Our Company</h2>
              <p>
                CArce is a professional car sales company focused on delivering
                high-quality vehicles that meet modern standards of performance,
                safety, and reliability. Every vehicle is carefully selected and
                inspected to ensure customer satisfaction.
              </p>

              <h2 style={{ marginTop: '40px' }}>Owner & Founder</h2>
              <p>
                CArce was founded by Edzel Kim C. Arce, an Information Technology student with a passion.
                This website is part of her learning journey in web development and entrepreneurship.
              </p>
            </div>
          </section>

          <section className="belief-section">
            <div className="belief-box">
              <h2>What We Believe</h2>
              <p>
                Great service isn't just about handing over keys, it's about creating piece of mind. <br /><br />
                We value transparency, responsibility, and respect for your time.
                We believe you deserve clean, reliable vehicles and a support team that's ready when you are.
                <br /><br />
                Whether you're planning a business trip, a weekend getaway, or just need a backup vehicle,
                our goal is to keep things smooth, simple, and stress-free — every single time
              </p>

              <p className="about-closing">
                Your road trip starts with trust. <strong>Let's drive.</strong>
              </p>
            </div>
          </section>

          <section className="why-choose-us">
            <h2>Why Choose Us</h2>
            <div className="why-grid">
              <div className="why-box">
                <h3>Reliable Vehicles</h3>
                <p>Well-maintained, clean, and performance-ready — always.</p>
              </div>
              <div className="why-box">
                <h3>24/7 Support</h3>
                <p>We're here whenever you need help — day or night.</p>
              </div>
              <div className="why-box">
                <h3>Easy Buying</h3>
                <p>Fast, smooth, and stress-free from start to finish</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default About;
