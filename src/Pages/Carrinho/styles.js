import styled from 'styled-components'
import {colors} from '../../styles/colors'

export const Container = styled.div`
 height: 100%;
 min-height:100vh;
 display:flex;
 flex-direction:column;
 justify-content:space-between;
background-image:linear-gradient(to bottom, ${colors.lightBlue}, ${colors.lightGreen});
    table{
        width:100%;        
      #total{
          font-weight:600;
      }
        
    }
    .card{
        object-fit:contain;
        width:50px;
    }
    #wrapperButtons{
        display:flex;
        align-items:center;
        justify-content:space-evenly;
        height:10vh;
        width:100%;
        button{
            width:45%;
            border-radius:4px;
            background-color:${colors.mediumPink};
            font-weight:600;
            height:100%;
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
   
`