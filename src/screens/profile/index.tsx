import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import Animated, {AnimateStyle} from 'react-native-reanimated';
import {Button} from '../../components';
import styles from './styles';

type Props = {
  animatedStyle?: StyleProp<AnimateStyle<StyleProp<ViewStyle>>>;
  onPress?: () => void;
  title?: string;
  containerStyles?: StyleProp<ViewStyle>;
};

export const Profile = (props: Props) => {
  return (
    <Animated.View
      style={[styles.container, props.containerStyles, props.animatedStyle]}>
      <View style={{marginBottom: 20, marginLeft: 40}}>
        <Text style={styles.title}>Beka</Text>
      </View>

      {['Start', 'Your Cart', 'Favourites', 'Your Orders'].map((title, i) => (
        <Button
          // testing version
          onPress={props.onPress}
          isSelected={i === 0}
          title={title}
          key={i}
        />
      ))}
      <View style={styles.divider} />
      <Button title="Sign Out" />
    </Animated.View>
  );
};
