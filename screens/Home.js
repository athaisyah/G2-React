import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  Image,
  FlatList,
} from 'react-native';

import {connect} from 'react-redux';
import {doLogout} from '../redux/actions/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasource: '',
    };
  }

  onPressButton = () => {
    // alert('Mencoba LOGOUT!!!');
    this.props.logoutWoy();
  };

  getData = async () => {
    console.log('Lagi dicoba');
    try {
      const value = await AsyncStorage.getItem('PhotoDataAsync');
      if (value !== null) {
        // value previously stored
        this.setState({
          datasource: JSON.parse(value),
        });
      } else {
        fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=8')
          .then((response) => response.json())
          .then((responseJson) => {
            console.log('responseeeee1 ', responseJson);

            this.setState({
              datasource: responseJson,
            });
            try {
              AsyncStorage.setItem(
                'PhotoDataAsync',
                JSON.stringify(responseJson),
              );
            } catch (e) {
              // error
            }
          })
          .catch((error) => {
            console.error('errrooornya: ', error);
          });
      }
    } catch (e) {
      //eror
    }
  };

  componentDidMount = () => {
    this.getData.bind(this);
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>INI HOMEEEE!!!!!!!</Text>

        <FlatList
          data={this.state.datasource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <Image
                  style={{width: 50, height: 50}}
                  source={{uri: item.thumbnailUrl}}
                />
                <View>
                  <Text> {item.title} </Text>
                </View>
              </View>

              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 2,
                }}
              />
            </View>
          )}
        />

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={styles.btnLogout}
            onPress={this.onPressButton}>
            <Text style={styles.text}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logoutWoy: () => dispatch(doLogout()),
});

export default connect(null, mapDispatchToProps)(Home);

const {width: WIDTH} = Dimensions.get('window');
const styles = StyleSheet.create({
  btnLogout: {
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
