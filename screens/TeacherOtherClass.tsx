import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/types'; // Assuming the types file is located at this path

type TeacherOtherClassScreenProps = {
  route: RouteProp<RootStackParamList, 'TeacherOtherClass'>;
};

const TeacherOtherClass: React.FC<TeacherOtherClassScreenProps> = ({ route }) => {
  const { className, section, classTeacher, studentsCount, subject } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Class Details</Text>
      <Card style={styles.classCard}>
        <Card.Content>
          <View style={styles.classInfo}>
            <Text style={styles.classText}>Class Name: <Text style={styles.boldText}>{className}</Text></Text>
            <Text style={styles.classText}>Section: <Text style={styles.boldText}>{section}</Text></Text>
            <Text style={styles.classText}>Class Teacher: <Text style={styles.boldText}>{classTeacher}</Text></Text>
            <Text style={styles.classText}>Students Count: <Text style={styles.boldText}>{studentsCount}</Text></Text>
            <Text style={styles.classText}>Subject: <Text style={styles.boldText}>{subject}</Text></Text>
          </View>
          <Button
            mode="contained"
            style={styles.openClassButton}
            onPress={() => { /* Navigation or other logic here */ }}
          >
            View Student Details
          </Button>
          <Button
            mode="contained"
            style={styles.additionalButton}
            onPress={() => { /* Navigation or other logic here */ }}
          >
            Add Project & Deadline
          </Button>
          <Button
            mode="contained"
            style={styles.additionalButton}
            onPress={() => { /* Navigation or other logic here */ }}
          >
            Add Marks
          </Button>
          <Button
            mode="contained"
            style={styles.additionalButton}
            onPress={() => { /* Navigation or other logic here */ }}
          >
            Assignment Submissions
          </Button>
          <Button
            mode="contained"
            style={styles.additionalButton}
            onPress={() => { /* Navigation or other logic here */ }}
          >
            Report of {className} {subject}
          </Button>
          {/* New Chatroom Button */}
          <Button
            mode="contained"
            style={styles.additionalButton}
            onPress={() => { /* Navigation or other logic here */ }}
          >
            Chatroom of {className} {section}
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1c1c1c',
  },
  header: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
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
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
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
    backgroundColor: '#00C853',  // Updated shade of green
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default TeacherOtherClass;
