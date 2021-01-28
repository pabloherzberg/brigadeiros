import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-size:22px;
    font-family: 'Roboto', sans-serif;
  }
  img{
    object-fit:contain;
    max-width:100%;
  }
  button{
    border:none;
    width:50%;
    font-size:18px;
  }
`;
