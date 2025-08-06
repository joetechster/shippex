import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../constants/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../components/Header';
import FilterButton from '../components/FilterButton';
import ScanButton from '../components/ScanButton';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import SearchInput from '../components/SearchInput';

export default function Shipments() {
  const [query, setQuery] = useState('');
  const insets = useSafeAreaInsets();

  const onFilterButtonPressed = () => {};

  const onScanButtonPressed = () => {};
  return (
    <>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Header />
        <View style={{ gap: 20 }}>
          <View>
            <Text style={styles.subtitle}>Hello,</Text>
            <Text style={styles.title}>Ibrahim Shaker</Text>
          </View>
          <SearchInput value={query} onChangeText={setQuery} />
          <View style={styles.filterScanContainer}>
            <FilterButton onPress={onFilterButtonPressed} />
            <ScanButton onPress={onScanButtonPressed} />
          </View>
          <View>
            <Text style={styles.smallTitle}>Shipments</Text>
          </View>
        </View>
      </View>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
    </>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, backgroundColor: colors.white },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
  },
  smallTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  filterScanContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
