import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Main = styled.div`
  height: 100vh;
  background-image:linear-gradient(to bottom, ${colors.lightBlue}, ${colors.lightGreen});

  #list{   
    margin-top:5vh;
    display: flex;
    flex-direction: column;
    align-items:center;
    button{
      height:80px;
      width:80%;
      border-radius:8px;
      background-color:${colors.lightPink};
      margin-top:16px;
      display:flex;
      justify-content:space-evenly;
      align-items:center;
      img{
        object-fit:contain;
        height:90%;
      }
      span{

      }
    }
  }
  
`;
