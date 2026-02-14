import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Products() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/profile', label: 'Profile' },
    { to: '/products', label: 'Products' },
    { to: '/cart', label: '->Cart' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/login', label: 'Log In' }
  ];

  const products = [
    { name: 'Bugatti Centodieci', price: 5472800, image: '/image/bugatti.png', class: 'car1' },
    { name: 'Koenigsegg One1', price: 4088000, image: '/image/koenigsegg.png', class: 'car2' },
    { name: 'Lamborghini Huracan', price: 4749530, image: '/image/lamborghini.png', class: 'car3' },
    { name: 'Porsche 911 Turbo', price: 3909483, image: '/image/porsche.png' },
    { name: 'Front End Silhouette', price: 3450000, image: '/image/silhouette.png' },
    { name: 'Mclaren 570s', price: 2262180, image: '/image/mclaren.png' },
    { name: 'Gold Lamborghini', price: 9603250, image: '/image/gold.png' },
    { name: 'Maruti Suzuki', price: 3245902, image: '/image/maruti.png' },
    { name: 'Lexus NX 300h', price: 2811914, image: '/image/lexus.png' },
    { name: 'Range Rover Vogue', price: 3950000, image: '/image/rover.png' },
    { name: 'Luxury Van', price: 3850000, image: '/image/van.png' },
    { name: 'Chevrolet Silverado', price: 4223000, image: '/image/garvee.png' }
  ];

  const addToCart = (name, price) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
  };

  return (
    <>
      <Header />
      <Navigation links={navLinks} />
      
      <div className="page-content">
        <main>
          <div className="title">
            <h2>Product Catalog</h2>
          </div>

          <div className="products">
            {products.map((product, index) => (
              <div key={index} className="card">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} className={product.class} />
                <p>₱{product.price.toLocaleString()}</p>
                <button onClick={() => addToCart(product.name, product.price)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Products;
