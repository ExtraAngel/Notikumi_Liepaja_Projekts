import React from "react";
import "./styles.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-nosaukums">
        <Link to="/Main">Notikumi Liepājā</Link>
      </div>
      <div className="nav-saites">
        <ul>
          <li>Aktuālais</li>
          <li>Saraksts</li>
          <li>
            <Link to="/AboutUS">Par mums</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
