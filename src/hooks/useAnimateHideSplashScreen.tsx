import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Logo from '../../assets/logo.svg';
import { StyleSheet } from 'react-native';

export default function useAnimatedHideSplashScreen() {
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);
  const progress = useSharedValue(1);

  useEffect(() => {
    BootSplash.hide();

    // Grow the logo half way
    scale.value = withSpring(
      2,
      {
        duration: 500,
      },
      () => {
        scale.value = withDelay(500, withTiming(10, { duration: 500 }));
        opacity.value = withDelay(500, withTiming(10, { duration: 500 }));
        progress.value = withDelay(1000, withTiming(1, { duration: 500 }));
      },
    );
  }, []);

  const containerStyle = useAnimatedStyle(() => {
    'worklet';
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['ffffff', '2F50C1'],
    );
    return { backgroundColor };
  });

  const logoStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return {
    containerStyle,
    Logo: (
      <Animated.View style={logoStyle}>
        <Logo width={50} height={50} />
      </Animated.View>
    ),
  };
}
