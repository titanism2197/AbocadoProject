import React from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { List, ListItem, SearchBar, Avatar } from "react-native-elements";
import { StackNavigator } from 'react-navigation';
import { constants } from 'expo';
import HomeScreen from './components/home';


export default StackNavigator({
    Home: { screen: HomeScreen,
            navigationOptions: {
                title: 'Home',
                headerBackTitle: 'Back',
            },
          },
});