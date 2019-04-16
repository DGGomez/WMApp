import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

const primaryHeader = {
  headerStyle: {
    backgroundColor: theme.color.green,
  },
  headerTintColor: theme.color.white,
  headerTitleStyle: {
    fontWeight: '400',
  },
};

const AuthNavigator = createStackNavigator(
  {
    Login: {
      getScreen: () => require('./LoginScreen').default,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const ShoppingCartNavigator = createStackNavigator({
  ShoppingCart: {
    getScreen: () => require('./ViewOrderScreen').default,
    navigationOptions: {
      headerStyle: {
        backgroundColor: theme.color.white,
      },
    },
  },
});

const HomeStack = createStackNavigator(
  {
    Home: {
      getScreen: () => require('./HomeScreen').default,
    },
    Category: {
      getScreen: () => require('./SettingScreen').default,
    },
    ShoppingCart: {
      screen: ShoppingCartNavigator,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    navigationOptions: { ...primaryHeader, headerRight: <ShoppingCartIcon /> },
  },
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  console.log('navigation', navigation);

  if (
    NavigationService.getCurrentRouteName(navigation.state) === 'ShoppingCart'
  ) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};    
const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Order: {
      getScreen: () => require('./OrderScreen').default,
    },
    OrderView: {
      getScreen: () => require('./ViewOrderScreen').default,
    },
  },
  {
    tabBarComponent: props => <TabBar {...props} />,
  },
);

const MainNavigator = createStackNavigator(
  {
    Tab: TabNavigator
  },
  {
    mode: 'modal',
    navigationOptions: {
      header: null,
    },
  },
);

const AppNavigator = createSwitchNavigator(
  {
//     Splash: {
//       getScreen: () => require('./SplashScreen').default,
//     },
    Auth: AuthNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Main',
  },
);

class Navigation extends Component {
  state = {};
  render() {
    return (
      <AppNavigator ref={r => NavigationService.setTopLevelNavigator(r)} />
    );
  }
}

export default Navigation;
