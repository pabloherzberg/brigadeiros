import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
    height:30vh;
    display:grid;
    grid-template-columns:1fr 80% 1fr;
    grid-template-rows: 25vh 5vh;
    img{
        object-fit:contain;
        max-height:100%;
        width:100%;
    }
    #logo{
        width:100%;
        grid-column:2/3;
        grid-row:1/2;
    }
    #social{
        grid-column:2/3;
        grid-row:2/3;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        height:100%;
        list-style:none;
        li{
            width:80px;
            height:100%;
        }
    }
`