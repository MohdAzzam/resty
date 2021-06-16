import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './screens/Header/Header';
import Footer from './screens/Footer/Footer';
import Main from './Main';

export default function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  )
}