import * as React from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AnimatedDrawer, Contact} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {tabBarIcons} from './config';
import {TabBarRoutes} from './routes';
import {StackNav} from './stack-nav';

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};
const TabBarIcon =
  (route: RouteProp<ParamListBase, string>) =>
  ({focused, size, color}: TabBarIconProps) => {
    const iconName = tabBarIcons[`${route.name}${focused ? '-focused' : ''}`];
    console.log(route, iconName);
    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  };

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: TabBarIcon(route),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name={TabBarRoutes.start} component={AnimatedDrawer} />
      <Tab.Screen name={TabBarRoutes.home} component={StackNav} />
      <Tab.Screen name={TabBarRoutes.contact} component={Contact} />
    </Tab.Navigator>
  );
};
