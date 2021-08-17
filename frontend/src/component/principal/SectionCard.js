import React from "react";
import StackGrid from "react-stack-grid";

export default function () {
  return (
    <div>
      <section>
        <StackGrid columnWidth={300} duration={100}>
          <div className="card">
            <div className="image">
              <img src="./img/collection.jpg"></img>
            </div>
            <div className="content">
              <ul className="tallas">
                <li>
                  <button>S</button>
                </li>
                <li>
                  <button>M</button>
                </li>
                <li>
                  <button>L</button>
                </li>
              </ul>
              <p>Camisa title</p>
              <span>$40,000</span>
              <span className="descuento">$38,000</span>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src="./img/collection2.jpg"></img>
            </div>
            <div className="content">
              <ul className="tallas">
                <li>
                  <button>S</button>
                </li>
                <li>
                  <button>M</button>
                </li>
                <li>
                  <button>L</button>
                </li>
              </ul>
              <p>Camisa title</p>
              <span>$40,000</span>
              <span className="descuento">$38,000</span>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src="./img/collection2.jpg"></img>
            </div>
            <div className="content">
              <ul className="tallas">
                <li>
                  <button>S</button>
                </li>
                <li>
                  <button>M</button>
                </li>
                <li>
                  <button>L</button>
                </li>
              </ul>
              <p>Camisa title</p>
              <span>$40,000</span>
              <span className="descuento">$38,000</span>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src="./img/collection2.jpg"></img>
            </div>
            <div className="content">
              <ul className="tallas">
                <li>
                  <button>S</button>
                </li>
                <li>
                  <button>M</button>
                </li>
                <li>
                  <button>L</button>
                </li>
              </ul>
              <p>Camisa title</p>
              <span>$40,000</span>
              <span className="descuento">$38,000</span>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img src="./img/collection2.jpg"></img>
            </div>
            <div className="content">
              <ul className="tallas">
                <li>
                  <button>S</button>
                </li>
                <li>
                  <button>M</button>
                </li>
                <li>
                  <button>L</button>
                </li>
              </ul>
              <p>Camisa title</p>
              <span>$40,000</span>
              <span className="descuento">$38,000</span>
            </div>
          </div>
        </StackGrid>
      </section>
    </div>
  );
}
