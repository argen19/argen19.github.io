import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login successful (placeholder)');
    navigate('/profile');
  };

  return (
    <>
      <Header />
      
      <main className="auth-container">
        <div className="auth-text">
          <h2>Welcome Back, Driver!</h2>
          <p>Let's drive with <b>CArce</b></p>
        </div>

        <div className="auth-left">
          <img src="/image/login.png" alt="Login Background" />
        </div>

        <div className="auth-card">
          <h2>User Login</h2>

          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>

          <p>
            Don't have an account?{' '}
            <Link to="/signup">Sign up here</Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Login;
