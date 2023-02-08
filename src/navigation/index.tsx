import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNav} from './drawer';

const Navigation = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default Navigation;
