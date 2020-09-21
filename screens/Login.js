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
  ToastAndroid,
} from 'react-native';

import bgImage from '../images/bg1.jpg';
import user from '../images/user.png';
import password from '../images/password.png';
import avatar from '../images/user1.png';

import {connect} from 'react-redux';
import {doLogin} from '../redux/actions/index';
import SQLite from 'react-native-sqlite-storage';
const {width: WIDTH} = Dimensions.get('window');

// const db = SQLite.openDatabase({
//   name: 'datasqlite.db',
// });

// var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase(
  {name: 'sqlitedata.db', createFromLocation: 2},
  () => {
    console.log('openDatabase');
  },
  (e) => {
    console.error(e);
  },
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    // db.transaction(function (txn) {
    //   txn.executeSql(
    //     "SELECT name FROM sqlite_master WHERE type='table' AND name='table_login'",
    //     [],
    //     function (txn, res) {
    //       Alert.alert('item is ===> ' + res.row.length);
    //       console.log('item: ', res.row.length);
    //       if (res.row.length === 0) {
    //         txn.exequteSql('DROP TABLE IF EXISTS table_login', []);
    //         txn.exequteSql(
    //           'CREATE TABLE IF NOT EXISTS table_login(id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT) VALUES (1, "admin", "admin")',
    //         );
    //       }
    //     },
    //   );
    // });
  }

  errorCB(err) {
    console.error('SQL Error: ' + err, ToastAndroid.SHORT);
  }

  success(err) {
    console.log('SQL execute : ' + ToastAndroid.SHORT);
  }

  openCB() {
    console.log('OPEN DATABASE');
  }

  onPressButton = () => {
    /*LOGIN PERSIST*/
    // alert('Login Success!');
    // const {username, password} = this.state;
    // if (username === 'admin' && password === 'admin') {
    //   // alert('Login successful!!!');
    //   this.props.loginWoy();
    //   //   return loginWoy();
    //   //   return alert('Login successful!!!');
    // } else {
    //   return alert('Check your username and password!!!');
    // }
    console.log('dbbbb');
    db.transaction((tx) => {
      var sql =
        "SELECT * FROM user WHERE username='" + this.state.username + "'";
      tx.executeSql(
        sql,
        [],
        (tx, results) => {
          var len = results.rows.length;
          if (len === 0) {
            console.log('No suchh data: ');
          } else {
            var row = results.rows.item(0);
            if (this.state.password === row.password) {
              console.log('passssword: ');
              this.loginWoy();
            } else {
              console.log('test inii');
              this.loginWoy();
              // alert('ffffffff');
            }
          }
        },
        (e) => console.info(e),
      );
    });
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
            name="username"
            onChangeText={(username) => this.setState({username})}
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
            name="password"
            onChangeText={(password) => this.setState({password})}
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  loginWoy: () => dispatch(doLogin()),
});

export default connect(null, mapDispatchToProps)(Login);
// export default Login;

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
