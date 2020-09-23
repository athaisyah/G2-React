import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Colors from '../constants/Colors';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Home Screen</Text>
        <View>
          <View style={{marginBottom: 15}}>
            <Button
              title="New Image"
              color={Colors.primary}
              onPress={() => this.props.navigation.navigate('NewImage')}
            />
          </View>

          <View style={{marginBottom: 15}}>
            <Button
              title="Images List"
              color={Colors.primary}
              onPress={() => this.props.navigation.navigate('ImagesList')}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
