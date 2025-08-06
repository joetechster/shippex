import { StatusBar, StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import useAnimatedHideSplashScreen from '../hooks/useAnimateHideSplashScreen';
import LogoNamed from '../../assets/logo-named.svg';
import LoginButton from '../components/LoginButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors } from '../constants/colors';
import { RootStackParamList } from '../navigation/NativeStack';

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);
const AnimatedLogoNamed = Animated.createAnimatedComponent(LogoNamed);
type Landing = NativeStackScreenProps<RootStackParamList, 'Landing'>;

export default function Landing(props: Landing) {
  const { containerStyle, Logo } = useAnimatedHideSplashScreen();

  const onLoginButtonPress = () => {
    props.navigation.navigate('Login');
  };

  return (
    <AnimatedSafeAreaView style={[styles.container, containerStyle]}>
      {Logo || (
        <View style={styles.contentContainer}>
          <AnimatedLogoNamed
            entering={FadeIn}
            style={styles.logoNamed}
            height={40}
          />
          <LoginButton
            entering={FadeIn.delay(300)}
            onPress={onLoginButtonPress}
          />
        </View>
      )}
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
    </AnimatedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { flex: 1, width: '90%', alignSelf: 'center' },
  logoNamed: { margin: 'auto' },
});
