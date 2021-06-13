import React  from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import User from "./context/User";

function App() {
  return (
    <React.Fragment>
      <User.Context>
      <Header/>
      <Main/>
      <Footer/>
      </User.Context>
    </React.Fragment>
  )
}

export default App;