import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from "./src/screens/SearchScreen"
import MoreDetailScreen from "./src/screens/MoreDetailScreen"

const navigator =createStackNavigator({
  
    Search:SearchScreen,
    detail:MoreDetailScreen
},{
    initialRouteName:'Search',
    defaultNavigationOptions:{
        title:'Business Search'
    }
})

export default createAppContainer(navigator)