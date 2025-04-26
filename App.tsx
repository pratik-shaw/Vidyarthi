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
import StudentAttendance from './screens/StudentAttendance';
import StudentAcademics from './screens/StudentAcademics';
import StudentCalendar from './screens/StudentCalendar';
import StudentConduct from './screens/StudentConduct';
import StudentChatroom from './screens/StudentChatroom';
import StudentQuery from './screens/StudentQuery';
import StudentSubmission from './screens/StudentSubmissions';
import TeacherYourClass from './screens/TeacherYourClass';
import TeacherOtherClass from './screens/TeacherOtherClass';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitleVisible: true,
          headerStyle: { backgroundColor: '#1c1c1c' },
          headerTintColor: '#fff',
          headerTitle: '',
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
        <Stack.Screen name="StudentHome" component={StudentHomeScreen} />
        <Stack.Screen name="TeacherHome" component={TeacherHomeScreen} />
        <Stack.Screen name="StudentAttendance" component={StudentAttendance} />
        <Stack.Screen name="StudentAcademics" component={StudentAcademics} />
        <Stack.Screen name="StudentCalendar" component={StudentCalendar} />
        <Stack.Screen name="StudentConduct" component={StudentConduct} />
        <Stack.Screen name="StudentChatroom" component={StudentChatroom} />
        <Stack.Screen name="StudentQuery" component={StudentQuery} />
        <Stack.Screen name="StudentSubmission" component={StudentSubmission} />
        <Stack.Screen name="TeacherYourClass" component={TeacherYourClass} />
        <Stack.Screen name="TeacherOtherClass" component={TeacherOtherClass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
