import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../types/types'; // Make sure this path matches your project

type TeacherYourClassRouteProp = RouteProp<RootStackParamList, 'TeacherYourClass'>;

const TeacherYourClass = () => {
  const route = useRoute<TeacherYourClassRouteProp>();
  const { className, section, classTeacher, studentsCount, subject } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionHeader}>Class Details</Text>
      <Card style={styles.classCard}>
        <Card.Content>
          <View style={styles.classInfo}>
            <Text style={styles.classText}>Class: <Text style={styles.boldText}>{className}</Text></Text>
            <Text style={styles.classText}>Section: <Text style={styles.boldText}>{section}</Text></Text>
            <Text style={styles.classText}>Class Teacher: <Text style={styles.boldText}>{classTeacher}</Text></Text>
            <Text style={styles.classText}>Subject: <Text style={styles.boldText}>{subject}</Text></Text>
            <Text style={styles.classText}>Total Students: <Text style={styles.boldText}>{studentsCount}</Text></Text>
          </View>
          <Button
            mode="contained"
            style={styles.openClassButton}
            onPress={() => { /* Navigation to class details or other logic */ }}
          >
            View Student Details
          </Button>
          <Button
            mode="contained"
            style={styles.additionalButton} // Same style as the other buttons
            onPress={() => { /* Navigation to class attendance or other logic */ }}
          >
            Take Attendance
          </Button>
          <Button
            mode="contained"
            style={styles.additionalButton}
            onPress={() => { /* Navigation to attendance sheet or other logic */ }}
          >
            Attendance Sheet
          </Button>
          <Button
            mode="contained"
            style={styles.additionalButton}
            onPress={() => { /* Navigation to edit calendar or other logic */ }}
          >
            Edit Calendar
          </Button>
          <Button
            mode="contained"
            style={styles.additionalButton}
            onPress={() => { /* Navigation to student report card or other logic */ }}
          >
            Student Report Card
          </Button>
          <Button
            mode="contained"
            style={styles.additionalButton}
            onPress={() => { /* Navigation to whole class academics or other logic */ }}
          >
            Whole Class Academics
          </Button>
          <Button
            mode="contained"
            style={styles.additionalButton}
            onPress={() => { /* Navigation to chatroom or other logic */ }}
          >
            Chatroom
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1c1c1c',
    flexGrow: 1,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  classCard: {
    backgroundColor: '#2a2a2a',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  classInfo: {
    marginBottom: 15,
  },
  classText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  openClassButton: {
    backgroundColor: '#3b5998',
    marginBottom: 10,
    borderRadius: 5,
  },
  additionalButton: {
    backgroundColor: '#00C853',  // Consistent green shade for all buttons
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default TeacherYourClass;
