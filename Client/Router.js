import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from './HomeScreen';
import VacationTypeDetail from './Vacation/components/VacationTypeDetail';
import VacationView from './Vacation/components/VacationView';


const VacationStack = createStackNavigator(
    {
    Home: HomeScreen,
    Type: VacationTypeDetail,
    },

    {
    initialRouteName : 'Home',
    }
);

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: VacationStack,
    Vacation: VacationView
  }
);


const Root = createAppContainer(TabNavigator);

export default Root