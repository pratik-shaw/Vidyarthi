/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-hooks/exhaustive-deps */
// screens/LoginStudentAccountScreen.tsx
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

const LoginStudentAccountScreen = () => {
  const [email, setEmail] = useState('');
  const [schoolCode, setSchoolCode] = useState('');
  const [idNo, setIdNo] = useState('');
  const [dob, setDob] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
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

  const handleLogin = () => {
    // Navigate to StudentHomeScreen
    navigation.navigate('StudentHome');
  };

  const handleBackToRoles = () => {
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
              onPress={handleBackToRoles}
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
              <Text style={styles.title}>Student Login</Text>
              <Text style={styles.subtitle}>Access your academic portal</Text>
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
                <Text style={styles.label}>Email ID</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor="#8A94A6"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  keyboardType="email-address"
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
                <Text style={styles.label}>ID Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter ID Number"
                  placeholderTextColor="#8A94A6"
                  value={idNo}
                  onChangeText={setIdNo}
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

              <TouchableOpacity style={styles.forgotPasswordLink}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.loginButton} 
                onPress={handleLogin}
                activeOpacity={0.9}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
              
              <View style={styles.newAccountContainer}>
                <Text style={styles.newAccountText}>Don't have an account? </Text>
                <TouchableOpacity>
                  <Text style={styles.newAccountLink}>Register</Text>
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
    marginBottom: 30,
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
  forgotPasswordLink: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#4E54C8',
    fontSize: 14,
    fontWeight: '500',
  },
  loginButton: {
    backgroundColor: '#4E54C8',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  newAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  newAccountText: {
    color: '#8A94A6',
    fontSize: 14,
  },
  newAccountLink: {
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

export default LoginStudentAccountScreen;