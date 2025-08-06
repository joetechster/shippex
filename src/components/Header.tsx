import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Bell from '../../assets/bell.svg';
import LogoNamedBlue from '../../assets/logo-named-blue.svg';
import { colors } from '../constants/colors';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
        width={40}
        height={40}
        borderRadius={40}
        resizeMode="cover"
      />
      <LogoNamedBlue height={20} />
      <TouchableOpacity style={styles.bellContainer}>
        <Bell width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  bellContainer: {
    padding: 10,
    borderRadius: 40,
    backgroundColor: colors.bgGray,
  },
});
