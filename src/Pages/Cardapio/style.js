import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Main = styled.div`
 height: 100%;
 min-height:100vh;
  background-image:linear-gradient(to bottom, ${colors.lightBlue}, ${colors.lightGreen});
  #header{
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    height:10vh;
    position:fixed;
    width:100%;
    background-color:${colors.lightGreen};
    button{
      
      width:45%;
      border-radius:4px;
      background-color:${colors.mediumPink};
      font-weight:600;
      height:90%;
      font-size:14px;
      display:flex;
      align-items:center;
      justify-content:space-evenly;
      color:white;
      img{
        object-fit:contain;
        width:30px;
      }
    }
  }
  #list{
    padding-top:11vh;
    overflow:scroll;
    display:flex;
    height:100%;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    .flavor{
      margin-top:8px;
      background-image:linear-gradient(45deg,${colors.mediumPink}, ${colors.lightPink});
      border-radius:4px;
      width:80%;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:space-evenly;
      color:white;
      img{
        object-fit:contain;
        max-height:120px;
        max-width:100%;
      }
      .wraper{
        display:flex;
        justify-content:space-evenly;
        width:100%;
        input{
          width:80px;
          height:40px;
        }
        button{
          width:80px;
          height:40px;
          font-size:12px;
          border-radius:4px;
          background-color:${colors.lightGreen};
          color:black;
        }
      }
     
    }
  }
`;
