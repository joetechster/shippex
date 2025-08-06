import { useEffect, useState } from 'react';
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
import { StyleSheet, View } from 'react-native';
import { runOnJS } from 'react-native-worklets';

export default function useAnimatedHideSplashScreen() {
  const [isSplashAnimationDone, setIsSplashAnimationDone] = useState(false);
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);
  const progress = useSharedValue(0);

  useEffect(() => {
    setTimeout(BootSplash.hide, 50);

    // Grow the logo half way
    scale.value = withDelay(
      100,
      withSpring(
        3,
        {
          duration: 800,
          dampingRatio: 0.8,
        },
        isFinished => {
          if (isFinished) {
            scale.value = withDelay(800, withTiming(1000, { duration: 1000 }));
            opacity.value = withDelay(800, withTiming(0, { duration: 2000 }));
            progress.value = withDelay(
              800,
              withTiming(1, { duration: 500 }, ifFinished => {
                if (ifFinished) runOnJS(setIsSplashAnimationDone)(true);
              }),
            );
          }
        },
      ),
    );
  }, []);

  const containerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['#ffffff', '#2F50C1'],
    );
    return { backgroundColor };
  });

  const logoStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return {
    containerStyle,
    Logo: !isSplashAnimationDone ? (
      <View style={styles.container}>
        <Animated.View style={logoStyle}>
          <Logo width={50} />
        </Animated.View>
      </View>
    ) : undefined,
  };
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
