// screens/LoginStudentAccountScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

const LoginStudentAccountScreen = () => {
  const [email, setEmail] = useState('');
  const [schoolCode, setSchoolCode] = useState('');
  const [idNo, setIdNo] = useState('');
  const [dob, setDob] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogin = () => {
    // Navigate to StudentHomeScreen
    navigation.navigate('StudentHome');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Login To Existing Student Account</Text>
      <Text style={styles.label}>Email ID:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>School Code:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter school code"
        placeholderTextColor="#ccc"
        value={schoolCode}
        onChangeText={setSchoolCode}
      />

      <Text style={styles.label}>ID No.:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter ID No."
        placeholderTextColor="#ccc"
        value={idNo}
        onChangeText={setIdNo}
      />

      <Text style={styles.label}>Date of Birth (Password):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter date of birth"
        placeholderTextColor="#ccc"
        value={dob}
        onChangeText={setDob}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#2e2e2e',
    color: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginStudentAccountScreen;
