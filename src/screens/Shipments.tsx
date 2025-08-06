import {
  FlatList,
  ListRenderItem,
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
import React, { useEffect, useState } from 'react';
import SearchInput from '../components/SearchInput';
import CustomCheckBox from '../components/CustomCheckBox';
import data from '../../assets/data.json';
import ShipmentItem, { AWBItem } from '../components/ShipmentItem';

export default function Shipments() {
  const [query, setQuery] = useState('');
  const [markAll, setMarkAll] = useState(false);
  const insets = useSafeAreaInsets();

  const onFilterButtonPressed = () => {};

  const onScanButtonPressed = () => {};

  const ListHeader = () => (
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
      <View style={styles.shipmentsMarkAllContainer}>
        <Text style={styles.smallTitle}>Shipments</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setMarkAll(prev => !prev)}
          style={styles.markAllContainer}
        >
          <CustomCheckBox
            checked={markAll}
            onChange={() => setMarkAll(prev => !prev)}
          />
          <Text style={styles.markAll}>Mark All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderItem: ListRenderItem<AWBItem> = ({ item }) => {
    return <ShipmentItem item={item} markAll={markAll} />;
  };

  return (
    <>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Header />
        <FlatList
          data={data as AWBItem[]}
          renderItem={renderItem}
          ListHeaderComponent={ListHeader}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        />
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
  markAll: {
    color: colors.primary,
    fontSize: 16,
  },
  shipmentsMarkAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  markAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  contentContainer: {
    gap: 10,
    paddingVertical: 10,
  },
});
