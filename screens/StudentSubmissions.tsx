// screens/SubmissionScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SubmissionScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Submission</Text>
            <Text style={styles.content}>Submission details will be displayed here.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c', // Updated background color to match reference
    },
    title: {
        fontSize: 24,
        color: '#fff', // Updated title color
    },
    content: {
        color: '#ccc', // Kept existing content color
    },
});

export default SubmissionScreen;
