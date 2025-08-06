import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { RootStackParamList } from '../../App';

type Login = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: Login) {
  const [url, setUrl] = useState('https://www.brandimic.com');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
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
        disabled
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Username / Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        mode="outlined"
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={() => {}}
        style={styles.button}
        contentStyle={{ paddingVertical: 8 }}
      >
        Login
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  cancel: {
    color: '#3366cc',
    marginBottom: 10,
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
  button: {
    marginTop: 30,
  },
});
