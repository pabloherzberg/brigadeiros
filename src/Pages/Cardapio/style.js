import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  header {
    flex: 1;
    background: ${colors.lightGreen};
  }
  main {
    flex: 6;
    background: ${colors.lightPink};
    overflow-y: scroll;
    nav {
      height: 100%;

      ul {
        height: 100%;
        list-style: none;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 2em;
        li {
          background: white;
          width: 40%;
          height: 50%;
          display: flex;
          flex-direction: column;
          border-radius: 4px;
          cursor: pointer;
          box-shadow: 10px 10px 2px ${colors.darkGray};
          span {
            text-align: center;
          }
          div {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
              width: 80%;
              object-fit: contain;
            }
          }
          input {
            width: 100%;
            height: 20%;
          }
        }
      }
    }
  }
  footer {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      height: 90%;
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.darkPink};
      border-radius: 4px;
      img {
        object-fit: contain;
        height: 90%;
        width: 30%;
      }
      span {
        color: white;
        font-size: 1em;
        font-weight: bold;
      }
    }
  }
`;
