import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navigation.css";

function Navigation() {
  return (
    <div className="Navigation">
      <img id="logo" src="/logo.png" alt="25 Store Logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
            <ul>
              <li>
                <Link to="/products/framed-prints">Framed Prints</Link>
              </li>
              <li>Poster Prints</li>
              <li>Bundle Prints</li>
              <li>Pictures</li>
              <li>
                <Link to="/products/digital-prints">Digital Prints</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/basket">Basket</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
