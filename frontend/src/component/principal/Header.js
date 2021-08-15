import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
        <header>
          <ul className="nav-left">
            <li>
              <Link to="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li>
              <Link to="/">
                <a>Shop</a>
              </Link>
            </li>
            <li>
              <Link to="/">
                <a>Coleción</a>
              </Link>
            </li>
            <li>
              <Link to="/">
                <a>contactos</a>
              </Link>
            </li>
          </ul>
          <div className="logo"><h3>Better</h3></div>
          <ul className="nav-right">
            <li>
              <Link to="/">
                <a>Users</a>
              </Link>
            </li>
            <li>
              <Link to="/">
                <a>Carrito</a>
              </Link>
            </li>
            <li>
              <Link to="/">
                <a>Buscar</a>
              </Link>
            </li>
          </ul>
        </header>
        <section className='section1'></section>
    </div>
  );
}
