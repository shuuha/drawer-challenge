import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Animated, {AnimateStyle} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

type Props = {
  animatedStyle?: StyleProp<AnimateStyle<StyleProp<ViewStyle>>>;
  onPress?: () => void;
  title?: string;
  containerStyles?: StyleProp<ViewStyle>;
};

export const Landing = ({
  onPress,
  title,
  animatedStyle,
  containerStyles,
}: Props) => {
  return (
    <Animated.View style={[styles.container, containerStyles, animatedStyle]}>
      <View style={styles.headerContainer}>
        <TouchableWithoutFeedback onPress={onPress}>
          <Icon name="menu" size={25} style={styles.headerIcon} />
        </TouchableWithoutFeedback>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Animated.View>
  );
};
