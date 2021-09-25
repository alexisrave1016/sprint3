import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
   return (
      <nav className="navbar">
         <img
            className="navbar_logo"
            src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632529769/sprint3/logo-amazon_3_xje0mj.png"
            alt="No disponible"
            srcset=""
         />
         <div className="navber_ubicacion">
         <span className="title_ubicacion">Hola </span>
         <span className="title_ubicacion1"><img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632541755/sprint3/gps_avkzvt.png" alt="no disponible"/>Elige tu direccion</span>
         </div>
         <div className="navbar_location">
            <div className="location">
               
            </div>
            <div className="navbar_search">
            <input type="text" className="navbar_departamentos" value="Todos los departamentos"/> 
            <input type="text" className="navbar_searchInput" />
               <SearchIcon className="logo_busqueda" />
            </div>
            <span className="location"></span>
         </div>
         <div className="opciones_total">
         <Link to="/login" className="navbar_link">
         <div className="navbar_opciones">
            <span className="navbar_opcion1">Hola, identificate</span>
            <span className="navbar_opcion2">Cuenta y Listas</span>
         </div>
         </Link>
         <Link to="" className="navbar_link">
         <div className="navbar_pedidos">
            <span className="navbar_pedidos1">Devoluciones </span>
            <span className="navbar_pedidos2">Y pedidos</span>
         </div>
         </Link>
         <Link to="/" className="navbar_link">
         <div className="navbar_carrito">
            <img src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632540832/sprint3/shopping-cart_r13zsu.png" className="logo_carrito" alt="no disponible"/>
            <div className="detalle_carrito">
               <span className="numero_productos">2</span>
            <span className="title_carrito">Carrito</span>
            </div>
         </div>
         </Link>
         </div>
      </nav>
   );
};

export default Navbar;
