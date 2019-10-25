import React from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { List, ListItem, SearchBar, Avatar } from "react-native-elements";
import { createStackNavigator, createAppContainer} from 'react-navigation-stack';
import { constants } from 'expo';
import HomeScreen from './components/home';


const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen,
            navigationOptions: {
              title: 'Home',
              headerBackTitle: 'Back',
            },
          },
});

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}