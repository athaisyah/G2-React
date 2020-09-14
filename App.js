import {View} from 'react-native';
import React, {Component} from 'react-native';
import {View} from 'react-native';
import Login from './Components/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Login />
      </View>
    );
  }
}

export default App;
