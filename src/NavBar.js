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
      <div className="title">Notikumi Liepājā</div>
      <div className="buttons" class="underline-on-click">
        <button>
          <Link to="/Main" className="normal-link">
            Aktuālais
          </Link>
        </button>
        <button>
          <Link to="/Events" className="normal-link">
            Saraksts
          </Link>
        </button>
        <button>
          <Link to="/AboutUS" className="normal-link">
            Par mums
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
