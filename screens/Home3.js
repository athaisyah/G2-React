import React, {Component} from 'react';
import {
  FlatList,
  View,
  Text,
  ActivityIndicator,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import axios from 'axios';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import EditDelete from './EditDelete';
import AsyncStorage from '@react-native-community/async-storage';

import {storePhotos} from '../redux/actions/index';
import {connect} from 'redux';

function edit_del() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EditDelete" component={EditDelete} />
    </Stack.Navigator>
  );
}

class Home extends Component {
  state = {photos: []};

  //   componentDidMount() {
  //     axios
  //       .get('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')

  //       .then((response) => this.setState({photos: response.data}))
  //       .catch((error) => console.warn('fetch Error: ', error));
  //   }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
      .then((response) => response.json()) // udah konvert ke json
      .then((responseJson) => {
        this.setState({
          // isLoading: false,
          photos: responseJson,
        });
      });
  }

  getPhotos = async () => {
    try {
      photos = await AsyncStorage.getItem('PhotoDataAsync');
      //   storePhoto(photos);
    } catch (error) {
      console.error(error);
    }
  };

  savePhotos() {
    AsyncStorage.setItem('PhotoDataAsync', this.state.photos);
    console.log('works !');
  }

  //   deletePhoto = async (photoid) => {
  //     try {
  //       let photosJSON = await AsyncStorage.getItem('PhotoDataAsync');
  //       let photosArray = JSON.parse(photosJSON);
  //       alteredPhotos = photosArray.filter(function (e) {
  //         return e.id !== photoid.id;
  //       });
  //       AsyncStorage.setItem('PhotoDataAsync', JSON.stringify(alteredPhotos));
  //       this.setState({
  //         photos: alteredPhotos,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  async deleteData(id) {
    try {
      this.state.photos.splice(id, 1);
      await AsyncStorage.setItem(
        'PhotoDataAsync',
        JSON.stringify(this.state.photos),
      );
      this.setState({
        photos: JSON.parse(await AsyncStorage.getItem('PhotoDataAsync')),
      });
    } catch (error) {
      console.log(error);
    }
  }

  updateData;

  renderPhoto = ({item, index}) => {
    return (
      <View>
        {/* <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('edit_del', {screen: 'EditDelete'})
          }> */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <Button title="X" onPress={this.deleteData.bind(this, index)} />

          <View style={{margin: 5}}>
            <Image
              style={{width: 50, height: 50, borderRadius: 60}}
              source={{uri: item.thumbnailUrl}}
            />
          </View>

          <View style={{justifyContent: 'center'}}>
            <TextInput style={{fontSize: 14}}> {item.title} </TextInput>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 2,
          }}
        />
        {/* </TouchableOpacity> */}
      </View>
    );
  };

  keyExtractor = (photo, index) => photo.id.toString();

  render() {
    if (!this.state.photos) {
      return <ActivityIndicator />;
    }

    return (
      <FlatList
        data={this.state.photos}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderPhoto}
      />
    );
  }
}

// pull data from photos reducer
const mapStateToProps = ({photos}) => {
  return {
    photos: photos.photos,
  };
};

// export default connect(mapStateToProps, {storePhotos})(Home);
export default Home;
