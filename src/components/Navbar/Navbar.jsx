import React, {useState} from "react";
import "./navbar.scss";
import CancelIcon from '@mui/icons-material/Cancel';
import GridOnIcon from '@mui/icons-material/GridOn';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const Navbar = () => {

    const [active , setActive] = useState("navBar")
    //funcion para desplegar el navegador
    const showNav = ()=>{
        setActive("navBar activeNavbar")
    }
    //funcion para desactivar el nav
    const removeNav = ()=>{
        setActive("navBar")
    }
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <TravelExploreIcon className="icon" />
              WAPPI
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Informacion
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Nosotros
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Boletos
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Calificanos
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contactanos
              </a>
            </li>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            < CancelIcon className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
            <GridOnIcon className="icon"/>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
