// import React, {Component} from 'react';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './Home';
import LoadMore from './screens/LoadMore';
import PullToRefresh from './screens/PullToRefresh';
import GestureHandler from './screens/GestureHandler';

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="LoadMore"
        component={LoadMore}
        options={{title: 'Load More'}}
      />
      <Stack.Screen
        name="PullToRefresh"
        component={PullToRefresh}
        options={{title: 'Pull To Refresh'}}
      />
      <Stack.Screen
        name="GestureHandler"
        component={GestureHandler}
        options={{title: 'Gesture Handler'}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}
