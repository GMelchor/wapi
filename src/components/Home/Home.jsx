import React from "react";
import "./home.scss";
import video from "../../assets/video_carretera.mp4";
import PlaceIcon from '@mui/icons-material/Place';

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Flecha Amarilla</span>

          <h2 className="homeTittle">
            Consulta horarios y compra de boletos
          </h2>
        </div>

        <div className="cardDiv grid">
          <div className="detinationInput">
            <label htmlFor="Origen">Origen</label>
            <div className="input flex">
                <input type="text" placeholder="Buscar Origen"/>
                <PlaceIcon className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="Origen">Origen</label>
            <div className="input flex">
                <input type="date" placeholder="Selecciona fecha de ida "/>
            </div>
          </div>

          <div className="detinationInput">
            <label htmlFor="Origen">Destino</label>
            <div className="input flex">
                <input type="text" placeholder="Buscar Destino"/>
                <PlaceIcon className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="Origen">Origen</label>
            <div className="input flex">
                <input type="date" placeholder="Selecciona fecha de vuelta "/>
            </div>
          </div>

          <div className="searchOptions flex">
            <button className="btn find">Buscar</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
