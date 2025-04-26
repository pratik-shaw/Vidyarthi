/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
// screens/StudentHomeScreen.tsx
import React, { useEffect } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image, 
  Dimensions,
  StatusBar,
  Animated,
  SafeAreaView,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types'; // Adjust the path as needed

const screenWidth = Dimensions.get('window').width;

const StudentHomeScreen = () => {
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
        duration: 600,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const handlePress = (title: string) => {
    switch (title) {
      case 'Attendance':
        navigation.navigate('StudentAttendance');
        break;
      case 'Academics':
        navigation.navigate('StudentAcademics');
        break;
      case 'Calendar':
        navigation.navigate('StudentCalendar');
        break;
      case 'Conduct':
        navigation.navigate('StudentConduct');
        break;
      case 'Chatroom':
        navigation.navigate('StudentChatroom');
        break;
      case 'Query':
        navigation.navigate('StudentQuery');
        break;
      case 'Submission':
        navigation.navigate('StudentSubmission');
        break;
      default:
        // Replace original alert with a more appropriate implementation
        console.log(`No action implemented for: ${title}`);
    }
  };

  const renderFeatureCard = (
    title: string,
    icon: string,
    color: string,
    index: number
  ) => {
    const cardFade = new Animated.Value(0);
    const cardSlide = new Animated.Value(40);

    useEffect(() => {
      Animated.parallel([
        Animated.timing(cardFade, {
          toValue: 1,
          duration: 500,
          delay: 300 + (index * 100),
          useNativeDriver: true,
        }),
        Animated.timing(cardSlide, {
          toValue: 0,
          duration: 500,
          delay: 300 + (index * 100),
          useNativeDriver: true,
        })
      ]).start();
    }, []);

    const getIconName = () => {
      switch (title) {
        case 'Attendance': return '📋';
        case 'Academics': return '📚';
        case 'Calendar': return '📅';
        case 'Conduct': return '🏆';
        case 'Chatroom': return '💬';
        case 'Query': return '❓';
        case 'Submission': return '📝';
        default: return '📄';
      }
    };

    return (
      <Animated.View
        style={[
          styles.featureCardContainer,
          {
            opacity: cardFade,
            transform: [{ translateY: cardSlide }],
          }
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.featureCard, { borderLeftColor: color }]}
          onPress={() => handlePress(title)}
        >
          <View style={styles.featureIconContainer}>
            <Text style={styles.featureIconText}>{getIconName()}</Text>
          </View>
          
          <View style={styles.featureTextContainer}>
            <Text style={styles.featureTitle}>{title}</Text>
          </View>
          
          <View style={styles.featureArrowContainer}>
            <View style={[styles.featureArrow, { backgroundColor: color }]}>
              <Text style={styles.featureArrowText}>→</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  // Array of colors for feature cards that match the color scheme
  const featureColors = [
    '#4E54C8', // Student color from login
    '#4E54C8',
    '#4E54C8',
    '#4E54C8',
    '#4E54C8',
    '#4E54C8',
    '#4E54C8'
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FC" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <Animated.View
            style={[
              styles.appNameContainer,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }]
              }
            ]}
          >
            <Text style={styles.appName}>Vidyarthi</Text>
          </Animated.View>

          <Animated.View
            style={[
              styles.welcomeContainer,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }]
              }
            ]}
          >
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={styles.nameText}>Pratik Shaw</Text>
          </Animated.View>
        </View>

        {/* Profile Card */}
        <Animated.View
          style={[
            styles.profileCardContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          <View style={styles.profileCard}>
            <View style={styles.profileInfo}>
              <View style={styles.profileHeader}>
                <Text style={styles.profileName}>Pratik Shaw</Text>
                <View style={styles.idBadge}>
                  <Text style={styles.idText}>ABS-20222119</Text>
                </View>
              </View>
              
              <View style={styles.profileDetails}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Class:</Text>
                  <Text style={styles.detailValue}>10 (Science)</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Phone:</Text>
                  <Text style={styles.detailValue}>7003390611</Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Email:</Text>
                  <Text style={styles.detailValue}>main.pratikshaw@gmail.com</Text>
                </View>
              </View>
            </View>
            <View style={styles.profileImageContainer}>
              <Image
                style={styles.profileImage}
                source={{ uri: 'https://cdn-icons-png.freepik.com/512/11327/11327618.png' }}
              />
            </View>
          </View>
        </Animated.View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Student Portal</Text>
          
          {['Attendance', 'Academics', 'Calendar', 'Conduct', 'Chatroom', 'Query', 'Submission'].map((title, index) => (
            renderFeatureCard(title, '', featureColors[index % featureColors.length], index)
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Need help? Contact support@vidyarthi.edu</Text>
          <Text style={styles.version}>Student Portal v2.4.1</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FC',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
    padding: 24,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  appNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  appName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#3A4276',
  },
  welcomeContainer: {
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#3A4276',
  },
  nameText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3A4276',
  },
  profileCardContainer: {
    marginBottom: 30,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 4,
  },
  profileCard: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 16,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3A4276',
    marginRight: 10,
  },
  idBadge: {
    backgroundColor: '#F0F1F6',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  idText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3A4276',
  },
  profileDetails: {
    marginTop: 4,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8A94A6',
    width: 50,
  },
  detailValue: {
    fontSize: 14,
    color: '#3A4276',
    flex: 1,
  },
  profileImageContainer: {
    marginLeft: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#F0F1F6',
  },
  featuresSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3A4276',
    marginBottom: 20,
    opacity: 0.8,
  },
  featureCardContainer: {
    marginBottom: 14,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 12,
    borderLeftWidth: 4,
  },
  featureIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F1F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureIconText: {
    fontSize: 18,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3A4276',
  },
  featureArrowContainer: {
    marginLeft: 10,
  },
  featureArrow: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureArrowText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    marginTop: 30,
    marginBottom: Platform.OS === 'ios' ? 30 : 20,
    alignItems: 'center',
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

export default StudentHomeScreen;