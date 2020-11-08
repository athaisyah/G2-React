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
} from 'react-native';

import bgImage from '../images/bg1.jpg';
import user from '../images/user.png';
import password from '../images/password.png';
import avatar from '../images/user1.png';

const {width: WIDTH} = Dimensions.get('window');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPressButton = () => {
    alert('Login Success!');
  };

  render() {
    return (
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
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{fontSize: 16}}>Forgot Password</Text>
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={this.onPressButton}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={{fontSize: 20}}>Don't have account? Create</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default Login;

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
