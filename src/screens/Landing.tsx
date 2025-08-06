import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import useAnimatedHideSplashScreen from '../hooks/useAnimateHideSplashScreen';
import LogoNamed from '../../assets/logo-named.svg';
import LoginButton from '../components/LoginButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);
const AnimatedLogoNamed = Animated.createAnimatedComponent(LogoNamed);
const AnimatedLoginButton = Animated.createAnimatedComponent(LoginButton);

export default function Landing() {
  const { containerStyle, Logo } = useAnimatedHideSplashScreen();

  return (
    <AnimatedSafeAreaView style={[styles.container, containerStyle]}>
      {Logo || (
        <>
          <AnimatedLogoNamed
            entering={FadeIn}
            style={styles.logoNamed}
            height={40}
          />
          <AnimatedLoginButton entering={FadeIn.delay(300)} />
        </>
      )}
    </AnimatedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  logoNamed: { margin: 'auto' },
});
