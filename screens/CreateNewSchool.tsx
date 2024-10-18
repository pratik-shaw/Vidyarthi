// screens/CreateNewSchoolScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

// Define the navigation prop type
type CreateNewSchoolScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CreateNewSchool'>;

const CreateNewSchoolScreen = () => {
  // State for inputs
  const [schoolName, setSchoolName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [address, setAddress] = useState('');
  const [schoolCode, setSchoolCode] = useState('');
  const [confirmSchoolCode, setConfirmSchoolCode] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const navigation = useNavigation<CreateNewSchoolScreenNavigationProp>(); // Initialize navigation

  const handleSubmit = () => {
    // Perform validation before navigation
    if (schoolCode === confirmSchoolCode) {
      setErrorMessage(''); // Clear error message
      navigation.navigate('AdminHome'); // Navigate to AdminHome on successful submission
    } else {
      setErrorMessage('School codes do not match. Please try again.'); // Set error message
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Register New School</Text>

        {/* Display error message */}
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

        <Text style={styles.label}>Enter School Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter school name"
          placeholderTextColor="#ccc"
          value={schoolName}
          onChangeText={setSchoolName}
        />

        <Text style={styles.label}>Contact No.:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter contact number"
          placeholderTextColor="#ccc"
          keyboardType="phone-pad"
          value={contactNo}
          onChangeText={setContactNo}
        />

        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter address"
          placeholderTextColor="#ccc"
          value={address}
          onChangeText={setAddress}
        />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Generate Unique School Code</Text>

          <Text style={styles.label}>Set School Code:</Text>
          <TextInput
            style={styles.input}
            placeholder="Set school code"
            placeholderTextColor="#ccc"
            value={schoolCode}
            onChangeText={setSchoolCode}
          />

          <Text style={styles.label}>Confirm School Code:</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm school code"
            placeholderTextColor="#ccc"
            value={confirmSchoolCode}
            onChangeText={setConfirmSchoolCode}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#1c1c1c',
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
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
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  card: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default CreateNewSchoolScreen;
