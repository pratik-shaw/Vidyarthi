// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import AdminScreen from './screens/AdminScreen';
import CreateAdminAccountScreen from './screens/CreateAdminAccountScreen';
import LoginAdminAccountScreen from './screens/LoginAdminAccountScreen';
import StudentScreen from './screens/StudentScreen';
import CreateStudentAccountScreen from './screens/CreateStudentAccountScreen';
import LoginStudentAccountScreen from './screens/LoginStudentAccountScreen';
import TeacherScreen from './screens/TeacherScreen';
import CreateTeacherAccountScreen from './screens/CreateTeacherAccountScreen';
import LoginTeacherAccountScreen from './screens/LoginTeacherAccountScreen';
import CreateNewSchool from './screens/CreateNewSchool';
import AdminHomeScreen from './screens/AdminHomeScreen';
import { RootStackParamList } from './types/types';
import StudentHomeScreen from './screens/StudentHomeScreen';
import TeacherHomeScreen from './screens/TeacherHomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerBackTitleVisible: true, // Show back button title
          headerStyle: { backgroundColor: '#1c1c1c' }, // Header background color
          headerTintColor: '#fff', // Back button color
          headerTitle: '', // Remove header title
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="CreateAdminAccount" component={CreateAdminAccountScreen} />
        <Stack.Screen name="LoginAdminAccount" component={LoginAdminAccountScreen} />
        <Stack.Screen name="Student" component={StudentScreen} />
        <Stack.Screen name="CreateStudentAccount" component={CreateStudentAccountScreen} />
        <Stack.Screen name="LoginStudentAccount" component={LoginStudentAccountScreen} />
        <Stack.Screen name="Teacher" component={TeacherScreen} />
        <Stack.Screen name="CreateTeacherAccount" component={CreateTeacherAccountScreen} />
        <Stack.Screen name="LoginTeacherAccount" component={LoginTeacherAccountScreen} />
        <Stack.Screen name="CreateNewSchool" component={CreateNewSchool} />
        <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
        <Stack.Screen name="StudentHome" component={StudentHomeScreen}/>
        <Stack.Screen name="TeacherHome" component={TeacherHomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
