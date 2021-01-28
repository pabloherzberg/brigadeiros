import React from 'react';
import { Container } from './styles';

import logo from '../../assets/pngs/logo.png'
import instagram from '../../assets/svgs/instagram.svg'
import whatsapp from '../../assets/svgs/whatsapp.svg'

function Header() {
  return <Container >
    <img id='logo' src={logo}/>
    <ul id='social'>
        <li><a href='https://www.instagram.com/brigadeiropelomundo/'><img src={instagram}/></a></li>
        <li><img onClick={()=> window.open(`https://wa.me/557191159027`)} src={whatsapp}/></li>
    </ul>
  </Container>;
}

export default Header;