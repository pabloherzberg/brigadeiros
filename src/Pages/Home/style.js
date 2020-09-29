import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  header {
    height: 20%;
    background: linear-gradient(
      to right,
      ${colors.mediumGreen},
      ${colors.lightGreen}
    );
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      margin-left: auto;
      margin-right: auto;

      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      /* grid-template-rows: 1fr 1fr 1fr; */
      place-items: center;
      img {
        grid-column: 2/3;
        /* grid-row: 2/3; */
        max-width: 100%;
        max-height: 100%;
        object-fit: scale-down;
        &:last-child {
          grid-column: 3/4;
          /*   grid-row: 2/3; */
          margin-left: 10%;
          max-width: 30%;
        }
      }
    }
  }
  main {
    height: 80%;
    background: linear-gradient(
      135deg,
      ${colors.mediumPink},
      ${colors.lightPink}
    );
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
          color: ${colors.darkPink};
          background: linear-gradient(
            to right,
            ${colors.darkGreen},
            ${colors.lightGreen}
          );
          box-shadow: 2px 2px 10px black;
          span {
            font-size: 0.9em;
            font-family: "Nova Flat", cursive;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 3;
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
