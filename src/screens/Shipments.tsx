import React, { useEffect, useState, useMemo } from 'react';
import {
  FlatList,
  ListRenderItem,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../constants/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../components/Header';
import FilterButton from '../components/FilterButton';
import ScanButton from '../components/ScanButton';
import SearchInput from '../components/SearchInput';
import CustomCheckBox from '../components/CustomCheckBox';
import data from '../../assets/data.json';
import ShipmentItem, { AWBItem } from '../components/ShipmentItem';

export default function Shipments() {
  const [query, setQuery] = useState('');
  const [filteredShipments, setFilteredShipments] = useState<AWBItem[]>(data);
  const [markAll, setMarkAll] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const insets = useSafeAreaInsets();

  // Extract unique statuses from data
  const statuses = useMemo(() => {
    const setStatus = new Set<string>();
    data.forEach(item => setStatus.add(item.status));
    return Array.from(setStatus);
  }, []);

  // Update filtered list whenever query or selectedStatuses change
  useEffect(() => {
    let list = data as AWBItem[];

    // Filter by AWB number search query
    if (query.trim().length > 0) {
      const lowerQuery = query.toLowerCase();
      list = list.filter(item =>
        item.awbNumber.toLowerCase().includes(lowerQuery),
      );
    }

    // Filter by selected statuses
    if (selectedStatuses.length > 0) {
      list = list.filter(item => selectedStatuses.includes(item.status));
    }

    setFilteredShipments(list);
  }, [query, selectedStatuses]);

  const toggleStatus = (status: string) => {
    setSelectedStatuses(prev =>
      prev.includes(status)
        ? prev.filter(s => s !== status)
        : [...prev, status],
    );
  };

  const renderItem: ListRenderItem<AWBItem> = ({ item }) => (
    <ShipmentItem item={item} markAll={markAll} />
  );

  return (
    <>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Header />
        <FlatList
          data={filteredShipments}
          renderItem={renderItem}
          keyExtractor={item => item.awbNumber}
          ListHeaderComponent={() => (
            <View style={{ gap: 20 }}>
              <View>
                <Text style={styles.subtitle}>Hello,</Text>
                <Text style={styles.title}>Ibrahim Shaker</Text>
              </View>

              <SearchInput value={query} onChangeText={setQuery} />

              <View style={styles.filterScanContainer}>
                <FilterButton onPress={() => setModalVisible(true)} />
                <ScanButton onPress={() => {}} />
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
          )}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection={['down']}
        style={styles.modal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        propagateSwipe
      >
        <View style={styles.modalContent}>
          <View style={styles.dragIndicator} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Filters</Text>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
          </View>

          <Text style={{ marginVertical: 20 }}>SHIPMENT STATUS</Text>
          <View style={styles.statusListContainer}>
            {statuses.map(status => {
              const isSelected = selectedStatuses.includes(status);
              return (
                <View
                  key={status}
                  style={{
                    padding: 1,
                    backgroundColor: isSelected ? colors.primary : undefined,
                    borderRadius: 11,
                  }}
                >
                  <TouchableOpacity
                    style={[
                      styles.statusItem,
                      isSelected && styles.statusItemSelected,
                    ]}
                    onPress={() => toggleStatus(status)}
                    activeOpacity={0.8}
                  >
                    <Text
                      style={[
                        styles.statusText,
                        isSelected && styles.statusTextSelected,
                      ]}
                    >
                      {status}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </Modal>

      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, backgroundColor: colors.white },
  title: { fontSize: 25, fontWeight: 'bold' },
  subtitle: { color: '#666' },
  smallTitle: { fontSize: 20, fontWeight: 'bold' },
  filterScanContainer: { flexDirection: 'row', gap: 10 },
  markAll: { color: colors.primary, fontSize: 16 },
  shipmentsMarkAllContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  markAllContainer: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  contentContainer: { gap: 10, paddingVertical: 10 },
  modal: { justifyContent: 'flex-end', margin: 0 },
  modalContent: {
    backgroundColor: colors.white,
    paddingTop: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  dragIndicator: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: 15,
  },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  statusListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 25,
  },
  statusItem: {
    padding: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: colors.bgGray,
  },
  statusItemSelected: { borderColor: colors.primary },
  statusText: {
    fontSize: 16,
    color: colors.darkGray,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  statusTextSelected: { color: colors.primary },
  cancelButton: { paddingVertical: 10 },
  cancelText: { fontSize: 16, color: colors.primary },
  doneButton: { paddingVertical: 10, borderRadius: 6 },
  doneText: { fontSize: 16, color: colors.primary },
});
