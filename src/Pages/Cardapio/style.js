import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  header {
    flex: 1;
    background: ${colors.darkPink};
    div {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;

      align-items: center;
      color: ${colors.white};
      p {
        font-size: 0.7em;
      }
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        span:first-child {
          font-size: 0.6em;
          margin-left: 2em;
        }
        span:last-child {
          margin-right: 2em;
          font-weight: bold;
          font-size: 0.65em;
        }
      }
    }
  }
  main {
    flex: 8;
    background: linear-gradient(
      to bottom right,
      ${colors.lightPink},
      ${colors.white}
    );
    overflow-y: scroll;
    nav {
      height: 100%;
      margin: 0;

      margin-top: 0.8em;
      ul {
        height: 100%;
        list-style: none;
        display: flex;
        justify-content: center;
        margin-top: 0em;
        flex-wrap: wrap;
        gap: 1em;
        li {
          background: ${colors.white};
          width: 90%;
          height: 50%;
          display: flex;
          flex-direction: column;
          border-radius: 4px;
          position: relative;
          cursor: pointer;
          box-shadow: 2px 2px 10px ${colors.darkGray};
          overflow: hidden;
          span {
            text-align: center;
            color: ${colors.darkGray};
            z-index: 1;
            height: 10%;
          }
          div {
            width: 100%;
            height: 70%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 1;

            img {
              max-width: 80%;
              max-height: 80%;
              object-fit: scale-down;
              border-radius: 8px;
            }
          }
          input {
            width: 100%;
            height: 20%;
            border: none;
            text-align: center;
            background: transparent;
            z-index: 1;
          }
          #color {
            position: absolute;
            background: ${colors.lightBlue};
            display: block;
            content: "";
            width: 100%;
            height: 100%;
            z-index: 0;
            transform: rotate(-45deg) translate(-50%, -50%);
            top: 25%;
            left: 110%;
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
    height: 100%;
    div {
      height: 90%;
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${colors.darkPink};
      border-radius: 4px;
      gap: 1em;
      img {
        object-fit: contain;
        max-height: 90%;
        max-width: 20%;
      }
      span {
        color: white;
        font-size: 1em;
        font-weight: bold;
      }
    }
  }
`;
