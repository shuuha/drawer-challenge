import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export const CommonScreen = ({
  title,
  onPress,
}: {
  title: string;
  onPress?: () => void;
}) => {
  return (
    <View style={styles.container}>
      <Pressable style={onPress && styles.pressable} onPress={onPress}>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
  },
});
