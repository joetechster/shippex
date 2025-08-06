import { StatusBar, StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import useAnimatedHideSplashScreen from '../hooks/useAnimateHideSplashScreen';
import LogoNamed from '../../assets/logo-named.svg';
import LoginButton from '../components/LoginButton';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors } from '../constants/colors';
import { RootStackParamList } from '../navigation/NativeStack';

const AnimatedLogoNamed = Animated.createAnimatedComponent(LogoNamed);
type Landing = NativeStackScreenProps<RootStackParamList, 'Landing'>;

export default function Landing(props: Landing) {
  const { containerStyle, Logo } = useAnimatedHideSplashScreen();
  const insets = useSafeAreaInsets();

  const onLoginButtonPress = () => {
    props.navigation.navigate('Login');
  };

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      {Logo || (
        <View
          style={[
            styles.contentContainer,
            { paddingTop: insets.top, paddingBottom: insets.bottom },
          ]}
        >
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
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { flex: 1, width: '90%', alignSelf: 'center' },
  logoNamed: { margin: 'auto' },
});
