import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";

import { Main } from "./style";
import Header from '../../components/Header'

import firebase from "../../services/firebase";

export default function Home() {
  const history = useHistory();

  const [options, setOptions] = useState(false)
  
  useEffect(()=>{
    firebase
      .database()
      .ref('pastas')
      .once('value')
      .then(snapshot=>{
        const snap = snapshot.val()
        if(snap){
          const filtered = Object.values(snap).filter(o=>o.status)
          setOptions(filtered)
          console.log(snap)
        }
      })
  },[])

  return (
    <Main>
      <Header/>
      <div id='list'>
        {options && options.map(option=>(
          <button key={option.key} onClick={()=>history.push({
            pathname:'/cardapio',
            state:option.key
          })} className='button'>
        {option.urlImage && <img src={option.urlImage}/>}
            <span>{option.name}</span>
          </button>
        ))}
      </div>
    </Main>
  );
}
