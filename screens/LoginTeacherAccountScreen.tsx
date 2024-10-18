// screens/LoginTeacherAccountScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types'; // Import RootStackParamList for type safety

const LoginTeacherAccountScreen = () => {
  const [email, setEmail] = useState('');
  const [schoolCode, setSchoolCode] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>(); // Initialize navigation

  const handleLogin = () => {
    // Add any validation or authentication logic here if necessary
    navigation.navigate('TeacherHome'); // Navigate to Teacher Home Screen on login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Login to Existing Teacher Account</Text>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>School Code:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter school code"
        placeholderTextColor="#ccc"
        value={schoolCode}
        onChangeText={setSchoolCode}
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#ccc"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeText:{
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

export default LoginTeacherAccountScreen;
