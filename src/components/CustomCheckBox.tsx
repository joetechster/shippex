import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';

interface CustomCheckBox {
  checked: boolean;
  onChange?: () => any;
  size?: number;
  borderColor?: string;
  checkColor?: string;
}

export default function CustomCheckBox({
  checked,
  onChange,
  size = 20,
  borderColor = '#ccc',
  checkColor = colors.primary,
}: CustomCheckBox) {
  return (
    <TouchableOpacity
      onPress={onChange}
      style={[
        styles.checkboxBase,
        { width: size, height: size, borderColor },
        checked && { backgroundColor: colors.primary100 },
      ]}
      activeOpacity={0.7}
    >
      {/* {checked && (
        <View style={[styles.checkMark, { backgroundColor: checkColor }]} />
      )} */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    borderWidth: 2,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMark: {
    width: 12,
    height: 12,
    borderRadius: 2,
  },
});
