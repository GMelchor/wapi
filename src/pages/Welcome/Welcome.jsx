import React from "react";
import "./welcome.scss";

import logo from "../../assets/logo.png";

const Welcome = () => {
  return (
    <div className="welcome">
      <h1 className="main">WAPI</h1>
      <img src={logo} alt="" className="logo" />
      <div className="wrapper">
        <h1 className="title">Comenzar</h1>
        <div className="botones">
          <button className="btnLogin">Inicia sesion</button>
          <button className="btnSign">Registrarse</button>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Welcome;
