import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  };
  const onSlideChange = (e) => {
    console.log("Item`s position during a change: ", e.item);
    console.log("Slide`s position during a change: ", e.slide);
  };

  const onSlideChanged = (e) => {
    console.log("Item`s position after changes: ", e.item);
    console.log("Slide`s position after changes: ", e.slide);
  };

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

      <main>
        <AliceCarousel
          duration={100}
          autoPlay={true}
          startIndex={1}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          playButtonEnabled={true}
          autoPlayInterval={100000}
          infinite={true}
          autoPlayActionDisabled={true}
          onSlideChange={onSlideChange}
          onSlideChanged={onSlideChanged}
        >
          <div className="yours-custom-class">
            <div className="context">
              <div className="description">
                <h1>New Collection </h1>
              </div>
            </div>

            <div className="image">
              <img src="./img/coleccion.png" />
            </div>
          </div>
          <div className="yours-custom-class">
            <h2>2</h2>
          </div>
          <div className="yours-custom-class">
            <h2>3</h2>
          </div>
          <div className="yours-custom-class">
            <h2>4</h2>
          </div>
          <div className="yours-custom-class">
            <h2>5</h2>
          </div>
        </AliceCarousel>
      </main>
    </div>
  );
}
