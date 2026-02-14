import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Account created successfully (placeholder)');
    navigate('/login');
  };

  return (
    <>
      <Header />
      
      <main className="auth-container">
        <div className="auth-text">
          <h2>Welcome Here, Driver!</h2>
          <p>Let's drive with <b>CArce</b></p>
        </div>

        <div className="auth-left">
          <img src="/image/signup.png" alt="Signup Background" />
        </div>

        <div className="auth-card">
          <h2>User Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <input type="text" placeholder="Mobile Number" required />
            <textarea rows="3" placeholder="Home Address" required></textarea>

            <button type="submit">Create Account</button>
          </form>

          <p>
            Already have an account?{' '}
            <Link to="/login">Back to Login</Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Signup;
