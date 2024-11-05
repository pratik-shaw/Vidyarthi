// screens/QueryScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QueryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Query</Text>
      <Text style={styles.content}>Queries will be displayed here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c', // Changed to match the reference
  },
  title: {
    fontSize: 24,
    color: '#fff', // Updated title color
  },
  content: {
    color: '#ccc', // Kept existing content color
  },
});

export default QueryScreen;
