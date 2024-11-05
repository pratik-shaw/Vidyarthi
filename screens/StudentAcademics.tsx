// screens/StudentAcademics.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';
import { BarChart, LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

// Data Structure for storing marks
type MarksData = {
  Maths: number;
  Physics: number;
  Chemistry: number;
  Biology: number;
  Hindi: number;
  History: number;
  Geography: number;
};

type SemesterData = {
  semester1: MarksData;
  semester2: MarksData;
  semester3: MarksData;
};

const marksData: SemesterData = {
  semester1: {
    Maths: 85,
    Physics: 90,
    Chemistry: 88,
    Biology: 92,
    Hindi: 75,
    History: 80,
    Geography: 82,
  },
  semester2: {
    Maths: 87,
    Physics: 85,
    Chemistry: 91,
    Biology: 89,
    Hindi: 78,
    History: 84,
    Geography: 85,
  },
  semester3: {
    Maths: 90,
    Physics: 92,
    Chemistry: 94,
    Biology: 93,
    Hindi: 80,
    History: 87,
    Geography: 88,
  },
};

// Function to calculate the average marks for each subject
const calculateAverages = (data: SemesterData) => {
  const subjects = Object.keys(data.semester1);
  const averages: { [subject: string]: number } = {};

  subjects.forEach((subject) => {
    const totalMarks =
      data.semester1[subject as keyof MarksData] +
      data.semester2[subject as keyof MarksData] +
      data.semester3[subject as keyof MarksData];
    averages[subject] = totalMarks / 3;
  });

  return averages;
};

const StudentAcademics = () => {
  const averages = calculateAverages(marksData);

  const renderChart = (semester: keyof SemesterData) => (
    <View style={styles.chartContainer}>
      <BarChart
        data={{
          labels: Object.keys(marksData[semester]),
          datasets: [
            {
              data: Object.values(marksData[semester]),
            },
          ],
        }}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#000',
          backgroundGradientFrom: '#1c1c1c',
          backgroundGradientTo: '#333',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        verticalLabelRotation={0}
        showValuesOnTopOfBars={true}
        fromZero={true}
        withInnerLines={false}
      />
    </View>
  );

  const renderTable = (semester: keyof SemesterData) => (
    <View style={styles.tableContainer}>
      {Object.entries(marksData[semester]).map(([subject, marks]) => (
        <View key={subject} style={styles.tableRow}>
          <Text style={styles.subjectText}>{subject}</Text>
          <Text style={styles.marksText}>{marks}</Text>
        </View>
      ))}
    </View>
  );

  const renderLineChart = () => (
    <View style={styles.chartContainer}>
      <LineChart
        data={{
          labels: Object.keys(averages),
          datasets: [
            {
              data: Object.values(averages),
            },
          ],
        }}
        width={screenWidth - 40}
        height={220}
        chartConfig={{
          backgroundColor: '#000',
          backgroundGradientFrom: '#1c1c1c',
          backgroundGradientTo: '#333',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        verticalLabelRotation={0}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Card containerStyle={styles.card}>
        <Text style={styles.semesterTitle}>Semester 1</Text>
        {renderChart('semester1')}
        {renderTable('semester1')}
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.semesterTitle}>Semester 2</Text>
        {renderChart('semester2')}
        {renderTable('semester2')}
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.semesterTitle}>Semester 3</Text>
        {renderChart('semester3')}
        {renderTable('semester3')}
      </Card>

      <Card containerStyle={styles.card}>
        <Text style={styles.semesterTitle}>Average Marks</Text>
        {renderLineChart()}
        <View style={styles.averageMarksContainer}>
          {Object.entries(averages).map(([subject, avg]) => (
            <View key={subject} style={styles.tableRow}>
              <Text style={styles.subjectText}>{subject}</Text>
              <Text style={styles.marksText}>{avg.toFixed(2)}</Text>
            </View>
          ))}
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222', // Changed background color to match header
    flex: 1,
  },
  card: {
    backgroundColor: '#1c1c1c',
    padding: 20,
    marginVertical: 10,
    borderRadius: 16,
  },
  semesterTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  subjectText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  tableContainer: {
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  marksText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  averageMarksContainer: {
    marginVertical: 10,
  },
});

export default StudentAcademics;
