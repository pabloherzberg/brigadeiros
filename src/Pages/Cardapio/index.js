import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

//components
import Loading from "../../components/Loading";
import shopping from '../../assets/svgs/shopping-bag.svg'
//funções externas
import firebase from "../../services/firebase";

//estilos
import { Main } from "./style";


export default function Cardapio() {
  const history = useHistory()
  const { state } = useLocation();
  
  const [flavors, setFlavors] = useState(false)
  const [selectedCandies, setSelectedCandies] = useState([])
  const [count, setCount] = useState(0)


  useEffect(() => {
    firebase
      .database()
      .ref(`/pastas/${state}/flavors`)
      .once("value")
      .then(snapshot => {
        const snap = snapshot.val()
        setFlavors(Object.values(snap))
      })
  }, []);
 
  return (
    <Main>
      <div id='header'>
        <button onClick={()=>history.goBack()}>Voltar</button>
        <button 
                style={{background:selectedCandies.length===0 && '#aaabaf'}}
                disabled={selectedCandies.length===0?true:false} 
                onClick={()=>history.push({
          pathname:'/carrinho',
          state: selectedCandies
        })}><img src={shopping}/>Ir para o carrinho</button>   
      </div>
       <div id='list'>
        { 
          flavors ? flavors.map(flavor=>(
                                    <div key={flavor.key} className='flavor'>
                                      <img src={flavor.urlImage} />
                                      <p>{flavor.name}</p>
                                      <p>R$ {Number(flavor.price).toFixed(2)}</p>
                                      
                                      <div className='wraper'>
                                        <input type="number"
                                          placeholder='0' 
                                          onChange={e=>setCount(e.target.value)}
                                        />                                     
                                        <button onClick={()=>{
                                            if(count){
                                            setSelectedCandies([...selectedCandies, {...flavor, count:count}])
                                            setCount(0)}
                                          }
                                        }>Adicionar ao carrinho</button>
                                      </div>
                                    </div>)
                                ):
          <Loading/>
        }
      </div>
      
    </Main>
  );
}
