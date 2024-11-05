import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types'; // Assuming types are in this path

const TeacherHomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Assume this is the logged-in teacher's name and class data
  const teacher = {
    name: 'John Doe',
    yourClass: {
      className: 'Class 8',
      sections: ['A'],
      classTeacher: 'John Doe',
      studentsCount: 30,
      subject: 'Mathematics',
    },
    otherClasses: [
      {
        className: 'Class 7',
        sections: ['B'],
        classTeacher: 'Jane Smith',
        studentsCount: 28,
        subject: 'Science',
      },
      {
        className: 'Class 9',
        sections: ['C'],
        classTeacher: 'Alice Johnson',
        studentsCount: 32,
        subject: 'English',
      },
    ],
  };

  // Determine if it's morning or evening based on current time
  const getTimeGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  const greeting = getTimeGreeting();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.greetingText}>{`${greeting}, ${teacher.name}!`}</Text>

      {/* Your Class Section */}
      <Text style={styles.sectionHeader}>Your Class</Text>
      <Card style={styles.classCard}>
        <Card.Content>
          <View style={styles.classInfo}>
            <Text style={styles.classText}>Class: {teacher.yourClass.className}</Text>
            <Text style={styles.classText}>Sections: {teacher.yourClass.sections.join(', ')}</Text>
            <Text style={styles.classText}>Class Teacher: {teacher.yourClass.classTeacher}</Text>
          </View>
          <Button
            mode="contained"
            style={styles.openClassButton}
            onPress={() =>
              navigation.navigate('TeacherYourClass', {
                className: teacher.yourClass.className,
                section: teacher.yourClass.sections.join(', '),
                classTeacher: teacher.yourClass.classTeacher,
                studentsCount: teacher.yourClass.studentsCount,
                subject: teacher.yourClass.subject,
              })
            }
          >
            Open Class
          </Button>
        </Card.Content>
      </Card>

      {/* Other Classes Section */}
      <Text style={styles.sectionHeader}>Other Classes</Text>
      {teacher.otherClasses.map((classInfo, index) => (
        <Card key={index} style={styles.classCard}>
          <Card.Content>
            <View style={styles.classInfo}>
              <Text style={styles.classText}>Class: {classInfo.className}</Text>
              <Text style={styles.classText}>Sections: {classInfo.sections.join(', ')}</Text>
              <Text style={styles.classText}>Class Teacher: {classInfo.classTeacher}</Text>
            </View>
            <Button
              mode="contained"
              style={styles.openClassButton}
              onPress={() =>
                navigation.navigate('TeacherOtherClass', {
                  className: classInfo.className,
                  section: classInfo.sections.join(', '),
                  classTeacher: classInfo.classTeacher,
                  studentsCount: classInfo.studentsCount,
                  subject: classInfo.subject,
                })
              }
            >
              Open Class
            </Button>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1c1c1c',
    flexGrow: 1,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 10,
  },
  classCard: {
    backgroundColor: '#2a2a2a',
    marginVertical: 10,
  },
  classInfo: {
    marginBottom: 10,
  },
  classText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  openClassButton: {
    backgroundColor: '#3b5998',
  },
});

export default TeacherHomeScreen;
