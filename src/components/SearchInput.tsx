import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Searchbar } from 'react-native-paper';
import SearchIcon from '../../assets/search.svg';
import { colors } from '../constants/colors';

interface SearchInput {
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchInput(props: SearchInput) {
  return (
    <Searchbar
      value={props.value}
      onChangeText={props.onChangeText}
      icon={() => <SearchIcon width={24} height={24} />}
      placeholder="Search"
      style={styles.container}
      clearIcon={() => null}
      placeholderTextColor={'gray'}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgGray,
    borderRadius: 10,
  },
});
