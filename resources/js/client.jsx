import './bootstrap';

import React from 'react';
import ReactDom from 'react-dom';

import Navbarr from './components/Navbar';

import AppClient from './components/ClientF';

import Footer from'./components/footer';




if (document.getElementById('navi')) {
    ReactDom.render(<Navbarr />,document.getElementById('navi'));
  
 }

 if (document.getElementById('App')) {
   ReactDom.render(<AppClient />,document.getElementById('App'));
}


 if (document.getElementById('footer')) {
    ReactDom.render(<Footer />,document.getElementById('footer'));
 }
