import React from "react";
import { useHistory } from "react-router-dom";

import Snow from '../../components/Snow'

import { Main } from "./style";
import instagram from "../../assets/svgs/instagram.svg";
import gift from "../../assets/svgs/love.svg";
import brownie from "../../assets/svgs/brownie.svg";
import brigadeiro from "../../assets/svgs/brigadeiro.svg";
import logo from "../../assets/pngs/natal.png";
import lights from "../../assets/svgs/christmas-lights.svg";
import firebase from "../../services/firebase";

export default function Home() {
  const history = useHistory();
  const messaging = firebase.messaging();

  messaging
    .requestPermission()
    .then(() => messaging.getToken())
    .then((token) => {
      console.log(token);
    })
    .catch((error) => console.error(error));

  messaging.onMessage((payload) => {
    console.log(payload);
  });

  return (
    <Main>
      <Snow/>
      <header>
        <div>
          <img src={logo} alt="logo brigadeiro pelo mundo" />
          <img
            onClick={() =>
              (window.location.href =
                "https://instagram.com/brigadeiropelomundo?igshid=ytkg9scnd49o")
            }
            src={instagram}
          />
        </div>
      </header>
      <main>
        <img className='lights' src={lights} />
        <img className='lights' src={lights} />
        <img className='lights' src={lights} />
        <img className='lights' src={lights} />
        <img className='lights' src={lights} />
        <img className='lights' src={lights} />
        <img className='lights' src={lights} />
        <img className='lights' src={lights} />
        <img className='lights' src={lights} />
        <img className='lights' src={lights} />
 
        <nav>
          <ul>
            <li
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
              <span>Panetones Trufados</span>
            </li>
            <li
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
              <span>Kit Festa Brigadeiros</span>
            </li>

            <li
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
