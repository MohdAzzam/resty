import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <Main />
        <Footer />

        {/* <Else condition={this.state.flag}>
          
        </Else> */}

      </React.Fragment>
    )
  }

}
export default App;