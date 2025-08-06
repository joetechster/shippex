import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';

export default function LoginButton() {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    padding: 15,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  text: { color: colors.primary, fontSize: 16, fontWeight: '700' },
});
