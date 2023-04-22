import React from "react";
import "./styles.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-nosaukums">Notikumi Liepājā</div>
      <div className="nav-saites">
        <ul>
          <li>Aktuālais</li>
          <li>Saraksts</li>
          <li>Par Mums</li>
        </ul>
      </div>
    </nav>
  );
}
