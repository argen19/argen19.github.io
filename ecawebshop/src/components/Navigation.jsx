import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation({ links }) {
  const location = useLocation();

  return (
    <nav className="side-nav">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className={location.pathname === link.to ? 'active' : ''}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
