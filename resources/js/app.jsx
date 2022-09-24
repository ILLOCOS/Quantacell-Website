import './bootstrap';

import React from 'react';
import ReactDom from 'react-dom';

import Navbarr from './components/Navbar';

import Home from './components/Home';
import Footer from'./components/footer';
// import Client from './components/client';
// import Talent from './components/Talent';

// import Card1 from './components/cardsu';
// import Navbarr from './components/App';
// import CardGrid from './components/cardgrid';


if (document.getElementById('navi')) {
    ReactDom.render(<Navbarr />,document.getElementById('navi'));
  
 }

 if (document.getElementById('home')) {
    ReactDom.render(<Home />,document.getElementById('home'));
 }
 if (document.getElementById('footer')) {
    ReactDom.render(<Footer />,document.getElementById('footer'));
 }

