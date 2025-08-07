import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomCheckBox from './CustomCheckBox';
import Box from '../../assets/box.svg';
import RightArrow from '../../assets/right-arrow.svg';
import Expand from '../../assets/expand.svg';
import { colors } from '../constants/colors';

export type AWBStatus =
  | 'RECEIVED'
  | 'ERROR'
  | 'DELIVERED'
  | 'CANCELED'
  | 'ON HOLD'
  | string;

export interface Location {
  city: string;
  address: string;
}

export interface AWBItem {
  awbNumber: string;
  status: AWBStatus;
  fromCity: string;
  toCity: string;
  originLocation: Location;
  destinationLocation: Location;
  contactOptions: ('Call' | 'WhatsApp' | string)[];
}

interface ShipmentItem {
  item: AWBItem;
  markAll: boolean;
}
type ColorCode = {
  [k in AWBStatus]: string[];
};
const statusColorCode: ColorCode = {
  RECEIVED: [colors.primary100, colors.primary],
  'ON HOLD': ['#FFF3D5', '#DB7E21'],
  CANCELED: ['#F4F2F8', '#58536E'],
  DELIVERED: ['#E3FAD6', '#208D28'],
  ERROR: ['#FEE3D4', '#D12030'],
};

const ShipmentItem = React.memo(({ item, markAll }: ShipmentItem) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (markAll) setChecked(true);
    else setChecked(false);
  }, [markAll]);

  return (
    <View>
      <View style={styles.container}>
        <CustomCheckBox
          checked={checked}
          onChange={() => setChecked(prev => !prev)}
        />
        <Box width={40} height={40} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>AWB</Text>
          <Text style={styles.number} numberOfLines={1}>
            {item.awbNumber}
          </Text>
          <View style={styles.locationContainer}>
            <Text style={styles.city}>{item.originLocation.city}</Text>
            <RightArrow height={10} />
            <Text style={styles.city}>{item.destinationLocation.city}</Text>
          </View>
        </View>
        <View style={styles.statusContainer}>
          <Text
            style={[
              styles.status,
              {
                color: statusColorCode[item.status][1],
                backgroundColor: statusColorCode[item.status][0],
              },
            ]}
          >
            {item.status}
          </Text>
        </View>
        <View style={styles.expandWrapper}>
          <Expand width={12} />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgGray,
    borderRadius: 10,
    padding: 10,
  },
  infoContainer: { gap: 2, flex: 1 },
  title: {},
  number: { fontWeight: 600, fontSize: 16 },
  city: { fontSize: 10 },
  locationContainer: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  statusContainer: {
    padding: 2,
    borderRadius: 4,
    marginLeft: 'auto',
    backgroundColor: colors.white,
  },
  status: {
    padding: 5,
    fontSize: 10,
    backgroundColor: colors.bgGray,
    borderRadius: 1,
  },
  expandWrapper: {
    backgroundColor: colors.white,
    borderRadius: 40,
    padding: 5,
  },
});

export default ShipmentItem;
