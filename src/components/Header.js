import React from "react";

// import { Container } from './styles';
import "../assets/css/app.css";
import Facebook from "../assets/img/facebook.png";

export default function Header() {
  return (
    <div className="header">
      <div className="facebook-logo">
        <img src={Facebook} />
      </div>

      <span className = 'profile'>Meu perfil</span>
    </div>
  );
}
