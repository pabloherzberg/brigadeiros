import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//funções externas
import useSendWhatsappMessage from "../../services/whatsapp";
import firebase from "../../services/firebase";

//estilos
import { Main } from "./style";
import shoppingBag from "../../assets/svgs/shopping-bag.svg";
import { colors } from "../../styles/colors";

export default function Cardapio() {
  const { state } = useLocation();
  const [inputsCandys, setInputsCandys] = useState([]);
  const [budget, setBudget] = useState(0);
  const [candys, setCandys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase
      .database()
      .ref(state.type)
      .once("value")
      .then(async (snapshot) => {
        let newCandys = [];
        const arrayOfCandys = snapshot.val();
        for await (const [key, value] of Object.entries(arrayOfCandys)) {
          const image = await firebase
            .storage()
            .ref(state.type)
            .child(`/${key}`)
            .getDownloadURL()
            .then((url) => url)
            .catch(() => "");

          newCandys.push({
            name: value.name,
            price: value.value,
            id: key,
            img: image,
          });
        }

        setCandys(newCandys);
        setLoading(false);
      });
  }, []);

  const sendWhatsappMessage = useSendWhatsappMessage();

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
            <span>Total: R$ {budget.toFixed(2)}</span>
          </div>
        </div>
      </header>
      <main>
        {loading ? (
          <div>carregando...</div>
        ) : (
          <nav>
            <ul>
              {candys.map((item, index) => (
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
        )}
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
