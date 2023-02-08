import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

export const Button = ({
  title,
  isSelected = false,
  onPress,
}: {
  title: string;
  isSelected?: boolean;
  onPress?: () => void;
}) => (
  <Pressable
    onPress={onPress}
    style={[styles.container, isSelected && styles.buttonSelected]}>
    <Text style={[styles.label, isSelected && styles.labelSelected]}>
      {title}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 120,
    borderRadius: 20,
    opacity: 0.8,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  buttonSelected: {
    backgroundColor: '#3f2537',
  },
  label: {
    color: 'white',
    fontSize: 14,
  },
  labelSelected: {
    color: '#d76a67',
    fontWeight: 'bold',
  },
});
