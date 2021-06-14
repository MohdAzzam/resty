import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Form from './Form/Form'
import Main from './Main/Main';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: '',
      url: '',
      results: {}
    };
  }
  // handel = (data) => {
  //   console.log(JSON.stringify(data))
  //   return JSON.stringify(data);

  // }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handler={(method, url, results) => {
          this.setState({method:method, url:url, results:results});
        }
        } />
        <Main results={this.state} />
        <Footer />
      </React.Fragment>
    )
  }

}
export default App;