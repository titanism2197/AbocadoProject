import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './HomeScreen';
import VacationView from './Vacation/components/VacationView';

const TabNavigator = createMaterialTopTabNavigator({
  Home: { screen: HomeScreen },
  Vacation: { screen: VacationView },
});

const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
