import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackRoutes} from './routes';
import {CommonScreen} from '../screens';

type RootStackParamList = {
  [HomeStackRoutes.screen1]: undefined;
  [HomeStackRoutes.screen2]: undefined;
};

type Screen1NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  HomeStackRoutes.screen1
>;

const Screen1 = (props: {navigation: Screen1NavigationProp}) => {
  return (
    <CommonScreen
      title="Screen1"
      onPress={() => props.navigation.navigate(HomeStackRoutes.screen2)}
    />
  );
};

const Screen2 = () => {
  return <CommonScreen title="Screen2" />;
};

const Stack = createNativeStackNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={HomeStackRoutes.screen1} component={Screen1} />
      <Stack.Screen name={HomeStackRoutes.screen2} component={Screen2} />
    </Stack.Navigator>
  );
};
