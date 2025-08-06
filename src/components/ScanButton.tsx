import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';
import ScanIcon from '../../assets/scan.svg';

interface ScanButton {
  onPress: () => any;
  disabled?: boolean;
}

export default function ScanButton(props: ScanButton) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container]}
      onPress={props.onPress}
    >
      <ScanIcon width={24} height={24} />
      <Text style={[styles.text]}>Add Scan</Text>
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
    backgroundColor: colors.primary,
    flex: 1,
  },
  text: { color: colors.white, fontSize: 16 },
});
