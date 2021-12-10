import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserScreen from './src/Screens/UserScreen';
import PostScreen from './src/Screens/PostScreen';
import DetailScreen from './src/Screens/DetailScreen';

const AppNavigator = createStackNavigator({
  Users: {
    screen: UserScreen
  },
  Posts: {
    screen: PostScreen
  },
  Details: {
    screen: DetailScreen
  },
}, {
  initialRouteName: 'Users'
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
