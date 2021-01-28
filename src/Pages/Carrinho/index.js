import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom'

import { Container } from './styles';

function Carrinho() {
    const {state} = useLocation()
    const history = useHistory()
    const [list, setList] = useState()

    useEffect(()=>setList(state),[state])


    function handleSendWhatsApp() {
        const budget = list
        .reduce((tot, item)=>tot + (Number(item.price)* item.count), 0)

        const msg = `Olá! Gostaria de fazer uma encomenda no valor de R$${budget.toFixed(2)}.%0aCom as seguintes quantidades:%0a`
      
        let itemList = []
        Object.values(list).map((item) => {
          return  itemList.push(item.count + " " + item.name);
        })
        itemList = itemList.splice(',').join('%0a')

        const formatedMsg = msg + itemList
    
        const number = 557191159027;
    
        window.open(`https://wa.me/${number}?text=${formatedMsg}`);
        
      }

    return <Container >
           <table>
                {list && list.map((item, index)=>(
                    <tr key={index}>
                        <td><img className='card' src={item.urlImage}/></td>
                        <td>{item.count}x </td>
                        <td>{item.name}</td>
                        <td style={{textAlign:'right'}}>R$ {Number(item.price).toFixed(2)}</td>
                    </tr>
                ))}
                <tr id='total'>
                    <td>Total</td>
                    <td></td>
                    <td></td>
                    <td style={{textAlign:'right'}}>R$ {list && 
                        list
                        .reduce((tot, item)=>tot + (Number(item.price)* item.count), 0).toFixed(2)} 
                    </td>
                </tr>
            </table>
            <div id='wrapperButtons'>
                <button onClick={()=>{
                    setList(false)
                    history.goBack()
                }}>Limpar carrinho</button>
                <button onClick={handleSendWhatsApp}>Enviar pedido</button>
            </div>
    </Container>;
}

export default Carrinho;