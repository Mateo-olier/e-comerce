import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {


  const [active, setActive] = useState(true);

  return (
    <div>
      <header>
        <div className={active ? "menuBar" : "menuBar active"}>
          <a onClick={() => setActive(!active)}>a</a>
        </div>
        <ul className={active ? "nav-left" : "nav-left active"}>
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
              <a>Colección</a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a>contactos</a>
            </Link>
          </li>
        </ul>
        <div className="logo">
          <h3>Better</h3>
        </div>
        <ul className={active ? "nav-right" : "nav-right active"}>
          <li>
            <Link to="/">
              <a>
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-black"
                  size="1x"
                />
              </a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a>
                {" "}
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="text-black"
                  size="1x"
                />
              </a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a>
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-black"
                  size="1x"
                />
              </a>
            </Link>
          </li>
        </ul>
      </header>

      
    </div>
  );
}
