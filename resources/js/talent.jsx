import './bootstrap';

import React from 'react';
import ReactDom from 'react-dom';

import Navbarr from './components/Navbar';


import Talent from './components/Talent';
import Footer from'./components/footer';




if (document.getElementById('navi')) {
    ReactDom.render(<Navbarr />,document.getElementById('navi'));
  
 }


if (document.getElementById('talent')) {
   ReactDom.render(<Talent />,document.getElementById('talent'));
}


 if (document.getElementById('footer')) {
    ReactDom.render(<Footer />,document.getElementById('footer'));
 }
