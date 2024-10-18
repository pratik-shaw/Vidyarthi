// screens/TeacherHomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TeacherHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Teacher Home!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});

export default TeacherHomeScreen;
