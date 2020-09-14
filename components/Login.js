import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';

import bgImage from '../assets/bg1.jpg';
import user from '../assets/user.png';
import password from '../assets/password.png';
import avatar from '../assets/user1.png';

import Home from './Home';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enable: true,
      username: '',
      password: '',
    };
  }

  onPressLogin = () => {
    if (this.state.username === 'admin' && this.state.password === 'admin') {
      alert('LOGIN are SUCCESS!');
      this.props.changeLogin();
      // return <Home />
    } else {
      alert('Invalid Password!');
    }
  };

  render() {
    return (
      <View>
        <ImageBackground source={bgImage} style={styles.backgrounfContainer}>
          <View style={styles.logoContainer}>
            <Image source={avatar} style={styles.logo}></Image>
            <Text style={styles.logoText}> LOGIN </Text>
          </View>

          <View style={styles.inputContainer}>
            <Image source={user} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter Your Username Here"
              underlineColorAndroid="transparent"
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              onChangeText={(text) => this.setState({username: text})}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image source={password} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter Your Password Here"
              underlineColorAndroid="transparent"
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={{fontSize: 16}}>Forgot Password</Text>
          </View>

          <TouchableOpacity
            title="Login"
            style={styles.btnLogin}
            onPress={this.onPressLogin}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>

          {/* <Button
              title="Login"
              style={styles.btnLogin}
              onPress={this.onPressLogin}
            /> */}

          <View style={styles.inputContainer}>
            <Text style={{fontSize: 20}}> Don't have account? Create </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const {width: WIDTH} = Dimensions.get('window');
const styles = StyleSheet.create({
  backgrounfContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5,
  },
  inputContainer: {marginTop: 10},
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 20,
    paddingLeft: 45,
    borderColor: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37,
    width: 25,
    height: 25,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20,
    borderColor: 'white',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
});
