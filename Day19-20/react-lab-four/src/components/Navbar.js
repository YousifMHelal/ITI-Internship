import React, { useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";

const Navar = () => {
  const [user, setUser] = useState('You')
  
  if (!user) {
    return <Navigate to="/" replace={true} />
  }
  return (
    <div className="container">
      <nav>
        <Link className="logo">shop now</Link>
        <div>
          <NavLink to='/' className="link">home</NavLink>
          <Link to='/products' className="link">products</Link>
          <NavLink to='/help' className="link">Help Center</NavLink>
          <NavLink to='/qoutes' className="link">Qoutes</NavLink>
          <NavLink to='/newproduct' className="link">New Product</NavLink>
          <button className="link btn" onClick={() => setUser(null)}>logout</button>
        </div>
      </nav>
    </div>
  );
};

export default Navar;
