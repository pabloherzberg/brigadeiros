import React from "react";
import { useHistory } from "react-router-dom";
import { colors } from "../../styles/colors";
import { Main } from "./style";
import gift from "../../assets/svgs/gift.svg";
import brownie from "../../assets/svgs/brownie.svg";
import brigadeiro from "../../assets/svgs/brigadeiro.svg";

export default function Home() {
  const history = useHistory();

  return (
    <Main>
      <header></header>
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
                <img src={gift} />
              </div>
              <span> Presentes</span>
            </li>
            <li
              style={{
                background: colors.darkGreen,
              }}
              onClick={() =>
                history.push({
                  pathname: "/cardapio",
                  state: { type: "brigadeiro" },
                })
              }
            >
              <div>
                <img src={brigadeiro} />
              </div>
              <span
                style={{
                  textShadow: "1px 1px gray",
                }}
              >
                {" "}
                Brigadeiros
              </span>
            </li>

            <li
              style={{
                background: colors.darkPink,
              }}
              onClick={() =>
                history.push({
                  pathname: "/cardapio",
                  state: { type: "brownie" },
                })
              }
            >
              <div>
                <img src={brownie} />
              </div>
              <span> Brownies</span>
            </li>
          </ul>
        </nav>
      </main>
    </Main>
  );
}
