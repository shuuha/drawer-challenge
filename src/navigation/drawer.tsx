import {createDrawerNavigator} from '@react-navigation/drawer';
import * as React from 'react';
import {TabNavigator} from './tab-nav';

const Drawer = createDrawerNavigator();

export const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="RootTab"
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
      }}>
      <Drawer.Screen name="RootTab" component={TabNavigator} />
    </Drawer.Navigator>
  );
};
