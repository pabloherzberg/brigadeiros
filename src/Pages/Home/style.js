import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  header {
    flex: 1;
    background: ${colors.lightGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 40%;
      object-fit: scale-down;
    }
  }
  main {
    flex: 3;
    background: ${colors.lightPink};
    nav {
      height: 100%;
      ul {
        height: 100%;
        list-style: none;
        justify-content: space-evenly;
        align-items: center;
        display: flex;
        flex-direction: column;
        li {
          background: white;
          width: 80%;
          height: 15%;
          display: flex;
          justify-content: flex-start;
          border-radius: 4px;
          cursor: pointer;
          box-shadow: 10px 10px 2px ${colors.darkGray};
          span {
            font-size: 1em;
            font-family: "Nova Flat", cursive;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 3;
            color: white;
          }
          div {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: shake 0.5s ease-in-out infinite alternate;
            img {
              object-fit: contain;
              max-height: 90%;
              max-width: 90%;
            }
            @keyframes shake {
              0% {
                transform: rotate(15deg);
              }
              100% {
                transform: rotate(-15deg);
              }
            }
          }
        }
      }
    }
  }
`;
