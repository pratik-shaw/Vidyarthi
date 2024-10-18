import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

type CreateStudentAccountScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateStudentAccount'
>;

const CreateStudentAccountScreen = () => {
  const [name, setName] = useState('');
  const [classValue, setClassValue] = useState('');
  const [section, setSection] = useState('');
  const [idNo, setIdNo] = useState('');
  const [schoolCode, setSchoolCode] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [dob, setDob] = useState('');

  const navigation = useNavigation<CreateStudentAccountScreenNavigationProp>();

  const handleCreateAccount = () => {
    // Add any additional validation or functionality here if needed
    navigation.navigate('LoginStudentAccount'); // Navigate to LoginStudentAccountScreen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>Create Student Account</Text>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#ccc"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Class:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your class"
        placeholderTextColor="#ccc"
        value={classValue}
        onChangeText={setClassValue}
        keyboardType="numeric" // Numeric keyboard for class input
      />

      <Text style={styles.label}>Section:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your section"
        placeholderTextColor="#ccc"
        value={section}
        onChangeText={text => setSection(text.toUpperCase())} // Automatically convert input to uppercase
      />

      <Text style={styles.label}>ID No.:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your ID number"
        placeholderTextColor="#ccc"
        value={idNo}
        onChangeText={setIdNo}
      />

      <Text style={styles.label}>School Code:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter school code"
        placeholderTextColor="#ccc"
        value={schoolCode}
        onChangeText={setSchoolCode}
      />

      <Text style={styles.label}>Roll No.:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your roll number"
        placeholderTextColor="#ccc"
        value={rollNo}
        onChangeText={setRollNo}
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

      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </ScrollView>
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
    flexGrow: 1,
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

export default CreateStudentAccountScreen;
