import React, { useState } from "react";
import { Container } from "./styles";

import brigadeiroSVG from "../../assets/svgs/brigadeiro.svg";
import brownieSVG from "../../assets/svgs/brownie.svg";
import giftSVG from "../../assets/svgs/gift.svg";

function Loading() {
  const [text, setText] = useState([
    "Chamando as delícias",
    "hoje elas estão vaidosas",
    "Parece que já estão prontas pra se apresentar pra você ;)",
  ]);
  const [count, setCount] = useState(0);

  setInterval(() => {
    if (count < text.length) {
      setCount(count + 1);
    }
  }, 2500);

  return (
    <Container>
      <div id="card">
        <div id="card_container">
          <div id="front">
            <img src={brigadeiroSVG} />
          </div>
          <div id="middle">
            <img src={giftSVG} />
          </div>
          <div id="back">
            <img src={brownieSVG} />
          </div>
        </div>
      </div>
      <p>{text[count]}</p>
    </Container>
  );
}

export default Loading;
