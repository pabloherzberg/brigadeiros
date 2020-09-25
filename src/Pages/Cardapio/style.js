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
      justify-content: center;
      align-items: flex-end;
      color: ${colors.white};
      p {
        font-size: 0.9em;
      }
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        span:first-child {
          font-size: 0.7em;
          margin-left: 2em;
        }
        span:last-child {
          margin-right: 2em;
          font-weight: bold;
          font-size: 0.8em;
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

      ul {
        height: 100%;
        list-style: none;
        display: flex;
        justify-content: center;
        margin-top: 1em;
        flex-wrap: wrap;
        gap: 1em;
        li {
          background: ${colors.white};
          width: 40%;
          height: 50%;
          display: flex;
          flex-direction: column;
          border-radius: 4px;
          cursor: pointer;
          box-shadow: 2px 2px 0 ${colors.darkGray};
          span {
            text-align: center;
            color: ${colors.darkGray};
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
            border: none;
            text-align: center;
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
