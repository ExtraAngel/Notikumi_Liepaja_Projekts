//import React from "react";
//import "./styles.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

/*function Navbar() {
  return (
    <nav>
      <div className="nav-nosaukums">Notikumi Liepājā</div>
      <div className="nav-saites">
        <ul>
          <li>
            <Link to="/Main">Aktuālais</Link>
          </li>
          <li>
            <Link to="/Events">Saraksts</Link>
          </li>
          <li>
            <Link to="/AboutUS">Par mums</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;*/

import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navigation-bar">
      <div className="title">
        <Link to="/Main" className="normal-link">
          Notikumi Liepājā
        </Link>
      </div>
      <div className="buttons" class="underline-on-click">
        <Link to="/Main" className="normal-link">
          <button>
            <h2>Aktuālais</h2>  
          </button>
        </Link>
        <Link to="/Events" className="normal-link">
          <button>
            <h2>Saraksts</h2>
          </button>
        </Link>
        <Link to="/AboutUS" className="normal-link">
          <button>
            <h2>Par mums</h2>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
