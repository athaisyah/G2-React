import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';
import Homesss from './screens/Home3';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

// var React = require('react-native');
var SQLite = require('react-native-sqlite-storage');

const Stack = createStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoggedIn: true,
    };
  }

  render() {
    const {loginNich} = this.props;

    return (
      <NavigationContainer>
        <Stack.Navigator>
          {loginNich ? (
            <Stack.Screen name="Home" component={Homesss} />
          ) : (
            <Stack.Screen name="Login" component={Login} />
            // <Stack.Screen name="Home" component={Homesss} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      // <Home />
      // <Login />
    );
  }
}

// import AuthReducer from '../redux/reducers/authReducer';
// authentication => Ambil dari AllReducers
// isLoggednIn => ambil dari authReducers
const mapStateToProps = (state) => ({
  loginNich: state.authentication.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, null)(App);
// export default App;
