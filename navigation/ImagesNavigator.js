import * as React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import NewImageScreen from '../screens/NewImageScreen';
import ImagesListScreen from '../screens/ImagesListScreen';

const Stack = createStackNavigator();

function ImagesNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="NewImage"
        component={NewImageScreen}
        options={{title: 'New Image'}}
      />
      <Stack.Screen
        name="ImagesList"
        component={ImagesListScreen}
        options={{title: 'Images List'}}
      />
    </Stack.Navigator>
  );
}

export default ImagesNavigator;
