import React, {Component} from 'react';
import Login from './components/Login.js';
import Home from './components/Home.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enable: true,
    };
  }

  tab(value) {
    if (value === 'Home') {
      this.setState({
        enable: false,
      });
    } else {
      this.setState({
        enable: true,
      });
    }
  }

  render() {
    return (
      <>
        <Login changeLogin={() => this.tab('Home')} />
      </>
    );
  }
}

export default App;
