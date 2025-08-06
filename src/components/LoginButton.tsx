import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';
import Animated, {
  EntryOrExitLayoutType,
  FadeIn,
} from 'react-native-reanimated';

interface LoginButton {
  onPress: () => any;
  disabled?: boolean;
  entering?: EntryOrExitLayoutType | undefined;
  invert?: boolean;
}

export default function LoginButton(props: LoginButton) {
  return (
    <Animated.View entering={props.entering}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.container,
          props.invert && styles.containerInvert,
          props.disabled && styles.containerDisabled,
        ]}
        onPress={props.onPress}
      >
        <Text
          style={[
            styles.text,
            props.invert && styles.textInvert,
            props.disabled && styles.textDisabled,
          ]}
        >
          Login
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  containerDisabled: { backgroundColor: colors.lightGray },
  containerInvert: { backgroundColor: colors.primary },
  text: { color: colors.primary, fontSize: 16, fontWeight: '700' },
  textDisabled: { color: colors.darkGray },
  textInvert: { color: colors.white },
});
