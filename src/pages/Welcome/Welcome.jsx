import React from "react";
import "./welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="wrapper">
        <h1 className="title">Viaje facil y sencillo con flecha amarilla</h1>
        <div className="botones">
          <button className="btnLogin">Inicia sesion</button>
          <button className="btnLogin">Inicia sesion</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
