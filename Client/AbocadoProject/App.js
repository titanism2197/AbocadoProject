import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/home';


const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen,
            navigationOptions: {
              title: 'Home',
              headerBackTitle: 'Back',
            },
          },
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}