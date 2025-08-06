import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';
import FilterIcon from '../../assets/filter.svg';

interface FilterButton {
  onPress: () => any;
  disabled?: boolean;
}

export default function FilterButton(props: FilterButton) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container]}
      onPress={props.onPress}
    >
      <FilterIcon width={24} height={24} />
      <Text style={[styles.text]}>Filters</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.bgGray,
    flex: 1,
  },
  text: { color: colors.darkGray, fontSize: 16 },
});
