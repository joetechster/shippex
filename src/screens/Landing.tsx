import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import useAnimatedHideSplashScreen from '../hooks/useAnimateHideSplashScreen';

export default function Landing() {
  const { containerStyle, Logo } = useAnimatedHideSplashScreen();

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      {Logo}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
