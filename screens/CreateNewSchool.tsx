/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-hooks/exhaustive-deps */import React, { useState, useEffect } from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  StatusBar, 
  SafeAreaView,
  Platform,
  Animated,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

type CreateNewSchoolScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreateNewSchool'
>;

const CreateNewSchoolScreen = () => {
  // State for inputs
  const [schoolName, setSchoolName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [address, setAddress] = useState('');
  const [schoolCode, setSchoolCode] = useState('');
  const [confirmSchoolCode, setConfirmSchoolCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigation = useNavigation<CreateNewSchoolScreenNavigationProp>();
  
  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(30);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const handleSubmit = () => {
    // Perform validation before navigation
    if (schoolCode === confirmSchoolCode) {
      setErrorMessage(''); // Clear error message
      navigation.navigate('AdminHome'); // Navigate to AdminHome on successful submission
    } else {
      setErrorMessage('School codes do not match. Please try again.'); // Set error message
    }
  };

  const handleBackToAdmin = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FC" />
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoid}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBackToAdmin}
            >
              <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>
            
            <Animated.View 
              style={[
                styles.headerContainer, 
                { 
                  opacity: fadeAnim, 
                  transform: [{ translateY: slideAnim }]
                }
              ]}
            >
              <Text style={styles.appName}>Vidyarthi</Text>
              <Text style={styles.title}>Register New School</Text>
              <Text style={styles.subtitle}>Create your institution's digital profile</Text>
            </Animated.View>
            
            {errorMessage ? 
              <Animated.View 
                style={[
                  styles.errorContainer,
                  {
                    opacity: fadeAnim
                  }
                ]}
              >
                <Text style={styles.errorText}>{errorMessage}</Text>
              </Animated.View> 
            : null}
            
            <Animated.View 
              style={[
                styles.formContainer,
                {
                  opacity: fadeAnim,
                  transform: [{ translateY: slideAnim }]
                }
              ]}
            >
              <View style={styles.inputGroup}>
                <Text style={styles.label}>School Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter full school name"
                  placeholderTextColor="#8A94A6"
                  value={schoolName}
                  onChangeText={setSchoolName}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Contact Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter contact number"
                  placeholderTextColor="#8A94A6"
                  keyboardType="phone-pad"
                  value={contactNo}
                  onChangeText={setContactNo}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter complete address"
                  placeholderTextColor="#8A94A6"
                  value={address}
                  onChangeText={setAddress}
                  multiline
                  numberOfLines={3}
                  textAlignVertical="top"
                />
              </View>
            </Animated.View>
            
            <Animated.View 
              style={[
                styles.codeContainer,
                {
                  opacity: fadeAnim,
                  transform: [{ translateY: slideAnim }]
                }
              ]}
            >
              <Text style={styles.codeTitle}>Generate Unique School Code</Text>
              <Text style={styles.codeSubtitle}>This code will be used by teachers and students to join</Text>
              
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Set School Code</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Create a unique code"
                  placeholderTextColor="#8A94A6"
                  value={schoolCode}
                  onChangeText={setSchoolCode}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Confirm School Code</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Re-enter the code"
                  placeholderTextColor="#8A94A6"
                  value={confirmSchoolCode}
                  onChangeText={setConfirmSchoolCode}
                />
              </View>

              <TouchableOpacity 
                style={styles.submitButton} 
                onPress={handleSubmit}
                activeOpacity={0.9}
              >
                <Text style={styles.submitButtonText}>Register School</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Need help? Contact support@vidyarthi.edu</Text>
        <Text style={styles.version}>Version 2.4.1</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FC',
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 20,
  },
  backButton: {
    marginBottom: 20,
    paddingVertical: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#3A4276',
    fontWeight: '500',
  },
  headerContainer: {
    marginBottom: 24,
  },
  appName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3A4276',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3A4276',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8A94A6',
    marginBottom: 8,
  },
  errorContainer: {
    backgroundColor: '#FEEAEA',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FFCDD2',
  },
  errorText: {
    color: '#D32F2F',
    fontSize: 14,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 20,
  },
  codeContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
    marginBottom: 20,
  },
  codeTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3A4276',
    marginBottom: 8,
  },
  codeSubtitle: {
    fontSize: 14,
    color: '#8A94A6',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3A4276',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E1E5EE',
    backgroundColor: '#FFFFFF',
    color: '#3A4276',
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: '#4E54C8',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    marginBottom: Platform.OS === 'ios' ? 30 : 20,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  footerText: {
    fontSize: 14,
    color: '#8A94A6',
    marginBottom: 5,
  },
  version: {
    fontSize: 12,
    color: '#B0B7C3',
  },
});

export default CreateNewSchoolScreen;