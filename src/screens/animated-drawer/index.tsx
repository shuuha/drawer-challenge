import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Landing} from '../home';
import {Profile} from '../profile';

const ANIMATION_DURATION = 1000;
const TRANSALTION_X_OFFSET = 200;
const TRANSALTION_Y_OFFSET = 50;

export const AnimatedDrawer = () => {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);

  const rotate = useDerivedValue(() =>
    interpolate(translationX.value, [0, 1], [0, -0.02]),
  );

  const profileBorderRadius = useDerivedValue(() =>
    interpolate(translationX.value, [0, 0.5, 1], [0, 0.02, 0.08]),
  );

  const profileAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: rotate.value + 'deg',
        },
        {
          translateX: translationX.value,
        },
        {
          translateY: translationY.value,
        },
      ],
      borderTopLeftRadius: profileBorderRadius.value,
    };
  });

  const landingBorderRadius = useDerivedValue(() =>
    interpolate(translationY.value, [0, 10, 50], [0, 30, 50]),
  );

  const landingAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translationY.value,
        },
      ],
      borderTopLeftRadius: landingBorderRadius.value,
    };
  });

  const animateOpen = useCallback(() => {
    translationX.value = withTiming(TRANSALTION_X_OFFSET, {
      duration: ANIMATION_DURATION,
    });
    translationY.value = withTiming(TRANSALTION_Y_OFFSET, {
      duration: ANIMATION_DURATION,
    });
  }, [translationX, translationY]);

  const animateClose = useCallback(() => {
    translationX.value = withTiming(0, {
      duration: ANIMATION_DURATION,
    });
    translationY.value = withTiming(0, {
      duration: ANIMATION_DURATION,
    });
  }, [translationX, translationY]);

  const onMenuPress = () => {
    animateOpen();
  };

  const onProfileItemPress = () => {
    animateClose();
  };

  return (
    <View style={styles.container}>
      <Profile
        onPress={onProfileItemPress}
        animatedStyle={landingAnimatedStyle}
      />
      <Landing
        onPress={onMenuPress}
        title="Start"
        animatedStyle={profileAnimatedStyle}
        containerStyles={styles.landingContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  landingContainerStyle: {
    ...StyleSheet.absoluteFillObject,
  },
});
