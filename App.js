import {View} from 'react-native';
import React, {Component} from 'react-native';
import {View} from 'react-native';
import Login from './Components/Login';
import Pagination from "./Components/Pagination";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        {/* <Login /> */}
        <Pagination />
      </View>
    );
  }
}

export default App;
