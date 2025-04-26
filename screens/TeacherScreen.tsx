/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  StatusBar,
  Animated,
  Platform,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

type TeacherScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Teacher'>;

const TeacherScreen = () => {
  const navigation = useNavigation<TeacherScreenNavigationProp>();
  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(30);
  
  // Create animation values for each option button
  const option1Fade = new Animated.Value(0);
  const option1Slide = new Animated.Value(40);
  const option2Fade = new Animated.Value(0);
  const option2Slide = new Animated.Value(40);

  useEffect(() => {
    // Start all animations when component mounts
    Animated.parallel([
      // Header animations
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      
      // Option 1 animations
      Animated.timing(option1Fade, {
        toValue: 1,
        duration: 600,
        delay: 300,
        useNativeDriver: true,
      }),
      Animated.timing(option1Slide, {
        toValue: 0,
        duration: 600,
        delay: 300,
        useNativeDriver: true,
      }),
      
      // Option 2 animations
      Animated.timing(option2Fade, {
        toValue: 1,
        duration: 600,
        delay: 450,
        useNativeDriver: true,
      }),
      Animated.timing(option2Slide, {
        toValue: 0,
        duration: 600,
        delay: 450,
        useNativeDriver: true,
      })
    ]).start();
  }, [fadeAnim, slideAnim, option1Fade, option1Slide, option2Fade, option2Slide]);

  const handleBackToRoles = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FC" />
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
            <Text style={styles.title}>Teacher Portal</Text>
            <Text style={styles.subtitle}>Manage your classes and students</Text>
          </Animated.View>
          
          <View style={styles.optionsContainer}>
            <Animated.View style={{
              opacity: option1Fade,
              transform: [{ translateY: option1Slide }]
            }}>
              <TouchableOpacity 
                style={styles.optionButton} 
                activeOpacity={0.9}
                onPress={() => navigation.navigate('CreateTeacherAccount')}
              >
                <Text style={styles.optionButtonText}>Create New Account</Text>
              </TouchableOpacity>
            </Animated.View>
            
            <Animated.View style={{
              opacity: option2Fade,
              transform: [{ translateY: option2Slide }]
            }}>
              <TouchableOpacity 
                style={styles.optionButton} 
                activeOpacity={0.9}
                onPress={() => navigation.navigate('LoginTeacherAccount')}
              >
                <Text style={styles.optionButtonText}>Login to Existing Account</Text>
              </TouchableOpacity>
            </Animated.View>
            
            <Animated.View style={{ opacity: fadeAnim }}>
              <View style={styles.helperContainer}>
                <Text style={styles.helperText}>Not a teacher? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.helperLink}>Return to Role Selection</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </View>
        </View>
      </ScrollView>
      
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
  optionsContainer: {
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
  optionButton: {
    backgroundColor: '#1CB5E0',  // Changed to the teacher color from the login screen
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  optionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  helperContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  helperText: {
    color: '#8A94A6',
    fontSize: 14,
  },
  helperLink: {
    color: '#1CB5E0',  // Changed to match button color
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

export default TeacherScreen;