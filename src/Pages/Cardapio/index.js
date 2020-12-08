import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//components
import Loading from "../../components/Loading";

//funções externas
import {} from "../../services/whatsapp";
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
  let minValue;
  if (state.type === "presentes") {
    minValue = 0;
  } else {
    minValue = 0;
  }

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
    if (budget > minValue) {
      const msg = `Olá!%0aGostaria de fazer uma encomenda no valor de R$${budget.toFixed(2)}. Com as seguintes quantidades:%0a`
      let list = []
      Object.values(inputsCandys).map((candy) => {
        return  list.push(candy.value + " " + candy.name);
      })
      list = list.splice(',').join('%0a')

      let formatedMsg = msg + list

    console.log(formatedMsg)

      const number = 557191159027;
      const isMobile =
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i);
  
    
      
  
      const targetUrl = isMobile
        ? `whatsapp://send?text=${encodeURIComponent(formatedMsg)}`
        : `https://wa.me/${number}?text=${formatedMsg}`;
  
      window.open(targetUrl);
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
            <span
              style={{
                opacity: state.type === "presentes" ? "0" : "1",
              }}
            >
             {(state.type === "brigadeiros" || state.type === "brownies") && "*Quantidade mínima por sabor: 10 unidades"}
            </span>
            <span>Total: R$ {budget.toFixed(2)}</span>
          </div>
        </div>
      </header>
      <main>
        {loading ? (
          <Loading />
        ) : (
          <nav>
            <ul>
              {candys.map((item, index) => (
                <li key={index}>
                  <div id="color" />
                  <span>
                    {item.name} R$ {parseFloat(item.price).toFixed(2)}
                  </span>
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
            background: budget > minValue ? colors.darkPink : colors.lightPink,
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
