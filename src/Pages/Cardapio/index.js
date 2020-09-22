import React, { useState, useEffect } from "react";
import useSendWhatsappMessage from "../../services/whatsapp";
import { useLocation } from "react-router-dom";
import { Main } from "./style";
import shoppingBag from "../../assets/svgs/shopping-bag.svg";
import brigadeiroPng from "../../assets/pngs/brigadeiro.png";
import browniePng from "../../assets/pngs/brownie.png";
import presentesPng from "../../assets/pngs/presentes.png";

export default function Cardapio() {
  const { state } = useLocation();
  const [image, setImage] = useState("");
  const [candys, setCandys] = useState([
    {
      name: "brigadeiro",
      img: brigadeiroPng,
      id: 0,
      value: 0,
    },
    {
      name: "brigadeiro",
      img: brigadeiroPng,
      id: 1,
      value: 1,
    },
    {
      name: "brigadeiro",
      img: brigadeiroPng,
      id: 2,
      value: 2,
    },
    {
      name: "brigadeiro",
      img: brigadeiroPng,
      id: 3,
      value: 3,
    },
  ]);

  const sendWhatsappMessage = useSendWhatsappMessage();

  useEffect(() => {
    if (state.type === "brigadeiro") setImage(brigadeiroPng);
    if (state.type === "brownie") setImage(browniePng);
    if (state.type === "presentes") setImage(presentesPng);
  }, []);

  function sendWhatsapp() {
    const msg = `
   Quero um doce
    `;

    const number = 557193096528;

    sendWhatsappMessage({ msg, number });
  }

  return (
    <Main>
      <header></header>
      <main>
        <nav>
          <ul>
            {candys.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <div>
                  <img alt="selfie do doce =)" src={item.img} />
                </div>
                <input name={item.name} value={0} type="number" />
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <footer>
        <div onClick={sendWhatsapp}>
          <img src={shoppingBag} />
          <span>ENVIAR PEDIDO</span>
        </div>
      </footer>
    </Main>
  );
}
