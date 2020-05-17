import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <ul className="nav nav-tabs justify-content-end">
     <li className="nav-item">
      <Link className="nav-link active" to="/">Home </Link>
     </li>
     <li className="nav-item">
      <Link className="nav-link" to="/dashboard">Dashboard </Link>
     </li>
  </ul>
);

export default Navbar;

