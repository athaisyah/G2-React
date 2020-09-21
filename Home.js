import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      //   <View>
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
              title="Load More"
              onPress={() => this.props.navigation.navigate('LoadMore')}
            />
          </View>

          <View style={{marginBottom: 15}}>
            <Button
              title="Pull To Refresh"
              onPress={() => this.props.navigation.navigate('PullToRefresh')}
            />
          </View>

          <View style={{marginBottom: 15}}>
            <Button
              title="Gesture Handler"
              onPress={() => this.props.navigation.navigate('GestureHandler')}
            />
          </View>
        </View>
      </View>
      //   </View>
    );
  }
}

export default Home;
