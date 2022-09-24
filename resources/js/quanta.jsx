import './bootstrap';

import React from 'react';
import ReactDom from 'react-dom';

import Navbarr from './components/Navbar';

// import Client from './components/client';
// import Talent from './components/Talent';
import Footer from'./components/footer';
import AboutUs from'./components/about';



if (document.getElementById('navi')) {
    ReactDom.render(<Navbarr />,document.getElementById('navi'));
  
 }

//  if (document.getElementById('client')) {
//    ReactDom.render(<Client />,document.getElementById('client'));
// }
// if (document.getElementById('talent')) {
//    ReactDom.render(<Talent />,document.getElementById('talent'));
// }

if (document.getElementById('aboutus')) {
   ReactDom.render(<AboutUs />,document.getElementById('aboutus'));
}
 if (document.getElementById('footer')) {
    ReactDom.render(<Footer />,document.getElementById('footer'));
 }
