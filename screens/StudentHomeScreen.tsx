// screens/StudentHomeScreen.tsx
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types'; // Adjust the path as needed

const screenWidth = Dimensions.get('window').width;

const StudentHomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
        alert(`No action implemented for: ${title}`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.subHeadingText}>Pratik Shaw</Text>
      </View>
      <View style={styles.studentDetailsContainer}>
        <View style={styles.studentInfo}>
          <Text style={styles.studentDetails}>Name: Pratik Shaw</Text>
          <Text style={styles.studentDetails}>Class: 10</Text>
          <Text style={styles.studentDetails}>Section: Science</Text>
          <Text style={styles.studentDetails}>Unique Id: ABS-20222119</Text>
        </View>
        <Image
          style={styles.studentImage}
          source={{ uri: 'https://cdn-icons-png.freepik.com/512/11327/11327618.png' }}
        />
      </View>
      <View style={styles.studentContactContainer}>
        <Text style={styles.contactInfo}>Phone Number: 7003390611</Text>
        <Text style={styles.contactInfo}>Email: main.pratikshaw@gmail.com</Text>
      </View>
      <View style={styles.buttonContainer}>
        {['Attendance', 'Academics', 'Calendar', 'Conduct', 'Chatroom', 'Query', 'Submission'].map((title) => (
          <TouchableOpacity
            key={title}
            style={styles.button}
            onPress={() => handlePress(title)}
          >
            <Text style={styles.buttonText}>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c', // Dark background
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headingText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff', // White color
  },
  subHeadingText: {
    fontSize: 20,
    fontWeight: '300',
    color: '#b0b0b0', // Light grey for subheading
  },
  studentDetailsContainer: {
    flexDirection: 'row',
    backgroundColor: '#333333', // Dark grey background
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  studentInfo: {
    flex: 1,
  },
  studentDetails: {
    fontSize: 16,
    color: '#ffffff', // White color
    marginBottom: 5,
  },
  studentImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ffffff', // White border for image
  },
  studentContactContainer: {
    backgroundColor: '#333333', // Dark grey background
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  contactInfo: {
    fontSize: 16,
    color: '#ffffff', // White color
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#ffffff', // White background
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 12,
    width: screenWidth - 32, // Adjusted width
    alignSelf: 'center',
    alignItems: 'center',
    elevation: 3, // Shadow effect for better look
  },
  buttonText: {
    color: '#000000', // Black text
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StudentHomeScreen;
function alert(_arg0: string) {
  throw new Error('Function not implemented.');
}

