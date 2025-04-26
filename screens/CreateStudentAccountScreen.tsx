/* eslint-disable eol-last */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
// screens/CreateStudentAccountScreen.tsx
import React, { useState, useEffect } from 'react';
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

  const handleCreateAccount = () => {
    // Add any additional validation or functionality here if needed
    navigation.navigate('LoginStudentAccount'); // Navigate to LoginStudentAccountScreen
  };

  const handleBackToLogin = () => {
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
              onPress={handleBackToLogin}
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
              <Text style={styles.title}>Create Student Account</Text>
              <Text style={styles.subtitle}>Join your school's digital platform</Text>
            </Animated.View>
            
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
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your full name"
                  placeholderTextColor="#8A94A6"
                  value={name}
                  onChangeText={setName}
                />
              </View>

              <View style={styles.rowContainer}>
                <View style={[styles.inputGroup, styles.rowInput]}>
                  <Text style={styles.label}>Class</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter class"
                    placeholderTextColor="#8A94A6"
                    value={classValue}
                    onChangeText={setClassValue}
                    keyboardType="numeric"
                  />
                </View>

                <View style={[styles.inputGroup, styles.rowInput]}>
                  <Text style={styles.label}>Section</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter section"
                    placeholderTextColor="#8A94A6"
                    value={section}
                    onChangeText={text => setSection(text.toUpperCase())}
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>ID Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter ID number"
                  placeholderTextColor="#8A94A6"
                  value={idNo}
                  onChangeText={setIdNo}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>School Code</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter school code"
                  placeholderTextColor="#8A94A6"
                  value={schoolCode}
                  onChangeText={setSchoolCode}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Roll Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter roll number"
                  placeholderTextColor="#8A94A6"
                  value={rollNo}
                  onChangeText={setRollNo}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Date of Birth (Password)</Text>
                <TextInput
                  style={styles.input}
                  placeholder="DD/MM/YYYY"
                  placeholderTextColor="#8A94A6"
                  value={dob}
                  onChangeText={setDob}
                  secureTextEntry
                />
              </View>

              <TouchableOpacity 
                style={styles.createButton} 
                onPress={handleCreateAccount}
                activeOpacity={0.9}
              >
                <Text style={styles.createButtonText}>Create Account</Text>
              </TouchableOpacity>
              
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginStudentAccount')}>
                  <Text style={styles.loginLink}>Login</Text>
                </TouchableOpacity>
              </View>
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    width: '48%',
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
  createButton: {
    backgroundColor: '#4E54C8',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    color: '#8A94A6',
    fontSize: 14,
  },
  loginLink: {
    color: '#4E54C8',
    fontSize: 14,
    fontWeight: '500',
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

export default CreateStudentAccountScreen;