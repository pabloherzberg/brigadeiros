import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { colors } from "../../styles/colors";
import { Main } from "./style";
import gift from "../../assets/svgs/gift.svg";
import brownie from "../../assets/svgs/brownie.svg";
import brigadeiro from "../../assets/svgs/brigadeiro.svg";
import logo from "../../assets/pngs/logo.png";
import firebase from "../../services/firebase";

export default function Home() {
  const history = useHistory();
  const messaging = firebase.messaging();

  messaging
    .requestPermission()
    .then(() => messaging.getToken())
    .then((token) => console.log(token))
    .catch((error) => console.error(error));

  messaging.onMessage((payload) => {
    console.log(payload);
  });

  return (
    <Main>
      <header>
        <img src={logo} alt="logo brigadeiro pelo mundo" />
      </header>
      <main>
        <nav>
          <ul>
            <li
              style={{
                background: colors.darkPink,
              }}
              onClick={() =>
                history.push({
                  pathname: "/cardapio",
                  state: { type: "presentes" },
                })
              }
            >
              <div>
                <img alt="icone" src={gift} />
              </div>
              <span>Presentes</span>
            </li>
            <li
              style={{
                background: colors.darkGreen,
              }}
              onClick={() =>
                history.push({
                  pathname: "/cardapio",
                  state: { type: "brigadeiros" },
                })
              }
            >
              <div>
                <img alt="icone" src={brigadeiro} />
              </div>
              <span
                style={{
                  color: colors.mediumPink,
                }}
              >
                Kit Festa Brigadeiros
              </span>
            </li>

            <li
              style={{
                background: colors.darkPink,
              }}
              onClick={() =>
                history.push({
                  pathname: "/cardapio",
                  state: { type: "brownies" },
                })
              }
            >
              <div>
                <img alt="icone" src={brownie} />
              </div>
              <span>Kit Festa Brownies</span>
            </li>
          </ul>
        </nav>
      </main>
    </Main>
  );
}
