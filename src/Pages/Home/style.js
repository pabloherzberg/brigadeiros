import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  header {
    height: 30%;
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
      grid-template-columns: 1fr 3fr 1fr;
      /* grid-template-rows: 1fr 1fr 1fr; */
      place-items: center;
      img {
        grid-column: 2/3;
        /* grid-row: 2/3; */
        max-width: 100%;
        max-height: 100%;
        object-fit: scale-down;
        &:first-child{
          width:100%;
          height:100%;
        }
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
    position: relative;
    height: 80%;
    background: linear-gradient(
      135deg,
      ${colors.mediumPink},
      ${colors.lightPink}
    );
    .lights{
      position: absolute;
      object-fit:contain;
      height:40px;
      top:-20px;
      &:nth-child(2){
        left:40px;
        transform:scaleX(-1);
      }
      &:nth-child(3){
        left:80px;
      }
      &:nth-child(4){
        left:120px;
        transform:scaleX(-1);
      }
      &:nth-child(5){
        left:160px;
      }
      &:nth-child(6){
        left:200px;
        transform:scaleX(-1);
      }
      &:nth-child(7){
        left:240px;
      }
      &:nth-child(8){
        left:280px;
        transform:scaleX(-1);
      }
      &:nth-child(9){
        left:320px;
      }
      &:nth-child(10){
        left:360px;
        transform:scaleX(-1);
      }
    
    }
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
          z-index:10000;
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
