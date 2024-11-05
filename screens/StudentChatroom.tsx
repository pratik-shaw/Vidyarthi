// screens/StudentChatroom.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StudentChatroom = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chatroom</Text>
      <Text style={styles.content}>Chatroom content will be displayed here.</Text>
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
  title: {
    fontSize: 24,
    color: '#fff',
  },
  content: {
    color: '#ccc',
  },
});

export default StudentChatroom;
