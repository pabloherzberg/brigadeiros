import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//funções externas
import useSendWhatsappMessage from "../../services/whatsapp";

//estilos
import { Main } from "./style";
import shoppingBag from "../../assets/svgs/shopping-bag.svg";
import brigadeiroPng from "../../assets/pngs/brigadeiro.png";
import browniePng from "../../assets/pngs/brownie.png";
import presentesPng from "../../assets/pngs/presentes.png";
import { colors } from "../../styles/colors";

export default function Cardapio() {
  const { state } = useLocation();
  const [list, setList] = useState([]);
  const [inputsCandys, setInputsCandys] = useState([]);
  const [budget, setBudget] = useState(0);

  const candys = [
    {
      name: "brigadeiro",
      img: brigadeiroPng,
      id: 0,
      price: 0.1,
    },
    {
      name: "brigadeiro",
      img: brigadeiroPng,
      id: 1,
      price: 0.11,
    },
    {
      name: "brigadeiro",
      img: brigadeiroPng,
      id: 2,
      price: 0.12,
    },
    {
      name: "brigadeiro",
      img: brigadeiroPng,
      id: 3,
      price: 0.13,
    },
  ];

  const candys2 = [
    {
      name: "brownie",
      img: browniePng,
      id: 0,
      price: 0.1,
    },
    {
      name: "brownie",
      img: browniePng,
      id: 1,
      price: 0.11,
    },
    {
      name: "brownie",
      img: browniePng,
      id: 2,
      price: 0.12,
    },
    {
      name: "brownie",
      img: browniePng,
      id: 3,
      price: 0.13,
    },
  ];

  const candys3 = [
    {
      name: "presentes",
      img: presentesPng,
      id: 0,
      price: 0.1,
    },
    {
      name: "presentes",
      img: presentesPng,
      id: 1,
      price: 0.11,
    },
    {
      name: "presentes",
      img: presentesPng,
      id: 2,
      price: 0.12,
    },
    {
      name: "presentes",
      img: presentesPng,
      id: 3,
      price: 0.13,
    },
  ];

  const sendWhatsappMessage = useSendWhatsappMessage();

  useEffect(() => {
    if (state.type === "brigadeiro") setList(candys);
    if (state.type === "brownie") setList(candys2);
    if (state.type === "presentes") setList(candys3);
  }, []);

  useEffect(() => {
    console.log(inputsCandys);
    if (Object.keys(inputsCandys).length > 0) {
      let listPrices = [];
      Object.values(inputsCandys).map((candy) => {
        listPrices.push(candy.total);
      });
      const orcamento = listPrices.reduce((total, price) => {
        return total + price;
      });
      setBudget(orcamento);
    }
  }, [inputsCandys]);

  function sendWhatsapp() {
    if (budget > 30) {
      const msg = `
    Olá! 
    Gostaria de fazer uma encomenda no valor de R$${budget}.
    com as seguintes quantidades:
    ${Object.values(inputsCandys).map((candy) => {
      return candy.name + ": " + candy.value + " ";
    })}. Aguardo retorno :)`;

      const number = 557191159027;
      sendWhatsappMessage({ msg, number });
    } else {
      alert("Valor mínimo precisa ser R$30,00");
    }
  }

  function handleChange(event) {
    const newState = { ...inputsCandys };

    newState[event.target.id] = {
      value: Number(event.target.value),
      name: event.target.name,
      price: Number(event.target.getAttribute("price")),
      total:
        Number(event.target.getAttribute("price")) * Number(event.target.value),
    };

    setInputsCandys(newState);
  }

  return (
    <Main>
      <header>
        <div>
          <p>E aí, qual o tamanho da sua vontade? =)</p>
          <div>
            <span>*Valor mínimo de R$30,00</span>
            <span>Total: R${budget}</span>
          </div>
        </div>
      </header>
      <main>
        <nav>
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <div>
                  <img alt="selfie do doce =)" src={item.img} />
                </div>
                <input
                  name={item.name}
                  value={Number(inputsCandys[item.id]?.value) || 0}
                  type="number"
                  id={item.id}
                  price={Number(item.price)}
                  onChange={handleChange}
                />
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <footer>
        <div
          style={{
            background: budget > 30 ? colors.darkPink : colors.lightPink,
          }}
          onClick={sendWhatsapp}
        >
          <img src={shoppingBag} />
          <span>ENVIAR PEDIDO</span>
        </div>
      </footer>
    </Main>
  );
}
