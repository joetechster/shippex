import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import BackArrow from '../../assets/back-arrow.svg';
import { TextInput } from 'react-native-paper';
import { colors } from '../constants/colors';
import LoginButton from '../components/LoginButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParamList } from '../navigation/NativeStack';

type Login = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login(props: Login) {
  const [url, setUrl] = useState('https://www.brandimic.com');
  const [email, setEmail] = useState('ali@brandimic.com');
  const [password, setPassword] = useState('testtest');

  const [urlError, setUrlError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const insets = useSafeAreaInsets();

  const validateUrl = (value: string) => {
    const pattern = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;
    return pattern.test(value);
  };

  const validateEmail = (value: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value);
  };

  const validatePassword = (value: string) => {
    return value.length >= 6;
  };

  useEffect(() => {
    setUrlError(url.trim() && !validateUrl(url) ? 'Invalid URL' : '');
    setEmailError(email.trim() && !validateEmail(email) ? 'Invalid email' : '');
    setPasswordError(
      password.trim() && !validatePassword(password)
        ? 'Minimum 6 characters'
        : '',
    );
  }, [url, email, password]);

  const isLoginDisabled =
    !url.trim() ||
    !email.trim() ||
    !password.trim() ||
    urlError !== '' ||
    emailError !== '' ||
    passwordError !== '';

  const onLoginButtonPress = () => {
    props.navigation.replace('Home');
  };

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets.bottom + 20 },
        Platform.OS !== 'ios' && { paddingTop: insets.top + 20 },
      ]}
    >
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
          Please enter your URL, Email, and Password to continue.
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
          error={!!urlError}
        />
        {urlError ? <Text style={styles.errorText}>{urlError}</Text> : null}

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
          error={!!emailError}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

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
          error={!!passwordError}
        />
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}

        <LoginButton
          invert
          onPress={onLoginButtonPress}
          disabled={isLoginDisabled}
        />
      </KeyboardAvoidingView>
      {Platform.OS !== 'ios' && (
        <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginTop: -5,
    marginBottom: 10,
    marginLeft: 5,
    fontSize: 12,
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
