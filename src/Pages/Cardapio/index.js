import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Main } from "./style";
import shoppingBag from "../../assets/svgs/shopping-bag.svg";
import brigadeiroPng from "../../assets/pngs/brigadeiro.png";
import browniePng from "../../assets/pngs/brownie.png";
import presentesPng from "../../assets/pngs/presentes.png";

export default function Cardapio() {
  const { state } = useLocation();
  const [image, setImage] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (state.type === "brigadeiro") setImage(brigadeiroPng);
    if (state.type === "brownie") setImage(browniePng);
    if (state.type === "presentes") setImage(presentesPng);
  });

  return (
    <Main>
      <header></header>
      <main>
        <nav>
          <ul>
            <li>
              <span>Brigradreiro Tradricrionral</span>
              <div>
                <img src={image} />
              </div>
              <input
                value={count}
                onChange={(e) => setCount(e.target.value)}
                type="number"
              />
            </li>
            <li>
              <span>Brigradreiro Tradricrionral</span>
              <div>
                <img src={image} />
              </div>
              <input
                value={count}
                onChange={(e) => setCount(e.target.value)}
                type="number"
              />
            </li>
            <li>
              <span>Brigradreiro Tradricrionral</span>
              <div>
                <img src={image} />
              </div>
              <input
                value={count}
                onChange={(e) => setCount(e.target.value)}
                type="number"
              />
            </li>
            <li>
              <span>Brigradreiro Tradricrionral</span>
              <div>
                <img src={image} />
              </div>
              <input
                value={count}
                onChange={(e) => setCount(e.target.value)}
                type="number"
              />
            </li>
            <li>
              <span>Brigradreiro Tradricrionral</span>
              <div>
                <img src={image} />
              </div>
              <input
                value={count}
                onChange={(e) => setCount(e.target.value)}
                type="number"
              />
            </li>
            <li>
              <span>Brigradreiro Tradricrionral</span>
              <div>
                <img src={image} />
              </div>
              <input
                value={count}
                onChange={(e) => setCount(e.target.value)}
                type="number"
              />
            </li>
            <li>
              <span>Brigradreiro Tradricrionral</span>
              <div>
                <img src={image} />
              </div>
              <input
                value={count}
                onChange={(e) => setCount(e.target.value)}
                type="number"
              />
            </li>
            <li>
              <span>Brigradreiro Tradricrionral</span>
              <div>
                <img src={image} />
              </div>
              <input
                value={count}
                onChange={(e) => setCount(e.target.value)}
                type="number"
              />
            </li>
          </ul>
        </nav>
      </main>
      <footer>
        <div>
          <img src={shoppingBag} />
          <span>ENVIAR PEDIDO</span>
        </div>
      </footer>
    </Main>
  );
}
