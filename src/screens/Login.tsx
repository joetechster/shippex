import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import BackArrow from '../../assets/back-arrow.svg';
import { TextInput, Button } from 'react-native-paper';
import { colors } from '../constants/colors';
import LoginButton from '../components/LoginButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList } from '../navigation/NativeStack';

type Login = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login(props: Login) {
  const [url, setUrl] = useState('https://www.brandimic.com');
  const [email, setEmail] = useState('ali@brandimic.com');
  const [password, setPassword] = useState('testtest');
  const isLoginDisabled = !url.trim() || !email.trim() || !password.trim();
  const insets = useSafeAreaInsets();

  const onLoginButtonPress = () => {
    props.navigation.replace('Home');
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom + 20 }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={
          Platform.OS === 'ios' ? insets.bottom + insets.top : 0
        }
      >
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.cancelContainer}
        >
          <BackArrow color={colors.primary} />
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Please enter your First, Last name and your phone number in order to
          register
        </Text>

        <TextInput
          label="URL"
          value={url}
          mode="outlined"
          style={styles.input}
          onChangeText={setUrl}
          returnKeyType="done"
          textColor={colors.primary}
          outlineStyle={styles.inputOutline}
        />

        <TextInput
          label="Username / Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          textColor={colors.primary}
          returnKeyType="done"
          outlineStyle={styles.inputOutline}
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          mode="outlined"
          textColor={colors.primary}
          style={[styles.input, { marginBottom: 'auto' }]}
          returnKeyType="done"
          outlineStyle={styles.inputOutline}
        />

        <LoginButton
          invert
          onPress={onLoginButtonPress}
          disabled={isLoginDisabled}
        />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  cancelContainer: {
    flexDirection: 'row',
    gap: '10',
    alignItems: 'center',
    marginBottom: 20,
  },
  cancel: {
    color: colors.primary,
    fontSize: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
    marginVertical: 10,
  },
  input: {
    marginVertical: 10,
  },
  inputOutline: { borderRadius: 10 },
  button: {
    marginTop: 30,
  },
});
