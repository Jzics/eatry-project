import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Laurels, SpecialMenu } from './container/index';

import { Navbar } from './components';
import './App.css';
import Introduction from './container/Introduction/Introduction';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Introduction />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
