/* eslint-disable @typescript-eslint/no-shadow */
// screens/StudentConduct.tsx
import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';
import { BarChart } from 'react-native-chart-kit';

// Sample Data for Complaints
type Complaint = {
  date: string;
  complaint: string;
};

type Complaints = {
  [date: string]: Complaint[];
};

// Complaints data for months (You can replace it with dynamic data)
const complaintsData: Complaints = {
  '2024-01-01': [{ date: '2024-05-01', complaint: 'Disruptive in class' }],
  '2024-01-15': [{ date: '2024-05-15', complaint: 'Not completing assignments' }],
  '2024-02-20': [{ date: '2024-05-20', complaint: 'Bullying' }],
  '2024-02-01': [{ date: '2024-05-01', complaint: 'Disruptive in class' }],
  '2024-03-15': [{ date: '2024-05-15', complaint: 'Not completing assignments' }],
  '2024-04-20': [{ date: '2024-05-20', complaint: 'Bullying' }],
  '2024-05-01': [{ date: '2024-05-01', complaint: 'Disruptive in class' }],
  '2024-05-15': [{ date: '2024-05-15', complaint: 'Not completing assignments' }],
  '2024-05-20': [{ date: '2024-05-20', complaint: 'Bullying' }],
  '2024-06-05': [{ date: '2024-06-05', complaint: 'Use of mobile phone in class' }],
  '2024-06-10': [{ date: '2024-06-10', complaint: 'Late for class' }],
  '2024-07-01': [{ date: '2024-07-01', complaint: 'Disruptive in class' }],
  '2024-07-15': [{ date: '2024-07-15', complaint: 'Not completing assignments' }],
  '2024-07-20': [{ date: '2024-07-20', complaint: 'Bullying' }],
  '2024-08-05': [{ date: '2024-08-05', complaint: 'Use of mobile phone in class' }],
  '2024-08-10': [{ date: '2024-08-10', complaint: 'Late for class' }],
  '2024-09-01': [{ date: '2024-09-01', complaint: 'Disruptive in class' }],
  '2024-09-15': [{ date: '2024-09-15', complaint: 'Not completing assignments' }],
  '2024-09-20': [{ date: '2024-09-20', complaint: 'Bullying' }],
  '2024-10-05': [{ date: '2024-10-05', complaint: 'Use of mobile phone in class' }],
  '2024-10-10': [{ date: '2024-10-10', complaint: 'Late for class' }],
  '2024-11-01': [{ date: '2024-11-01', complaint: 'Disruptive in class' }],
  '2024-11-15': [{ date: '2024-11-15', complaint: 'Not completing assignments' }],
  '2024-12-05': [{ date: '2024-12-05', complaint: 'Use of mobile phone in class' }],
  '2024-12-10': [{ date: '2024-12-10', complaint: 'Late for class' }],
  // Add more data here...
};

const StudentConduct = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>(new Date().toISOString().slice(0, 7));

  // Filter complaints for the selected month
  const filteredComplaints: Complaints = useMemo(() => {
    return Object.keys(complaintsData)
      .filter((date) => date.startsWith(selectedMonth))
      .reduce((obj: Complaints, key: string) => {
        obj[key] = complaintsData[key];
        return obj;
      }, {});
  }, [selectedMonth]);

  // Calculate total complaints for the year
  const totalComplaints = Object.keys(complaintsData).length;

  // Calculate complaints per month
  const calculateMonthlyComplaints = (data: Complaints) => {
    const monthlyComplaints: number[] = Array(12).fill(0);

    Object.keys(data).forEach(date => {
      const month = new Date(date).getMonth();
      monthlyComplaints[month]++;
    });

    return monthlyComplaints;
  };

  // Get complaints data for all months
  const monthlyComplaintsData = calculateMonthlyComplaints(complaintsData);

  // Bar chart data for all 12 months
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: monthlyComplaintsData,
      },
    ],
  };

  const handleMonthChange = (month: DateData) => {
    setSelectedMonth(month.dateString.slice(0, 7));
  };

  // Combine all content into a single FlatList
  const renderItem = ({ item }: { item: string }) => {
    if (item === 'calendar') {
      return (
        <View style={styles.card}>
          <Calendar
            theme={{
              calendarBackground: '#1c1c1c',
              textSectionTitleColor: '#fff',
              dayTextColor: '#fff',
              todayTextColor: '#fff',
              monthTextColor: '#fff',
              arrowColor: '#fff',
              textDisabledColor: '#555',
            }}
            onDayPress={(day: DateData) => console.log('Selected day', day)}
            markedDates={Object.keys(filteredComplaints).reduce((acc, date) => {
              acc[date] = { marked: true, dotColor: '#ff0000' };
              return acc;
            }, {} as { [key: string]: { marked: boolean; dotColor: string } })}
            onMonthChange={handleMonthChange}
            markingType={'dot'}
          />
        </View>
      );
    } else if (item === 'counter') {
      return <Text style={styles.counterText}>Total Complaints in Academic Year: {totalComplaints}</Text>;
    } else if (item === 'complaints') {
      return (
        <View style={styles.card}>
          <Text style={styles.heading}>Complaints for {selectedMonth}</Text>
          <FlatList
            data={Object.keys(filteredComplaints)}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <View style={styles.complaintItem}>
                <Text style={styles.dateText}>{new Date(item).toLocaleDateString('en-US')}</Text>
                {filteredComplaints[item].map((complaint) => (
                  <Text key={complaint.complaint} style={styles.complaintText}>{complaint.complaint}</Text>
                ))}
              </View>
            )}
            ListEmptyComponent={<Text style={styles.emptyText}>No complaints for this month.</Text>}
          />
        </View>
      );
    } else if (item === 'barChart') {
      return (
        <View style={styles.card}>
          <Text style={styles.heading}>Complaints Overview for the Year</Text>
          <View style={styles.chartContainer}>
            <BarChart
              data={barChartData}
              width={Dimensions.get('window').width - 32} // Full width minus padding
              height={220}
              fromZero
              chartConfig={{
                backgroundColor: '#1c1c1c',
                backgroundGradientFrom: '#1c1c1c',
                backgroundGradientTo: '#1c1c1c',
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                barPercentage: 0.5,
                decimalPlaces: 0,
              }}
              style={styles.chartStyle}
            />
          </View>
        </View>
      );
    }

    return null;
  };

  // Data for the FlatList
  const data = ['calendar', 'counter', 'complaints', 'barChart'];

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#222', // Changed background color to match header
  },
  card: {
    backgroundColor: '#222', // Kept card background color consistent
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  heading: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  counterText: {
    color: '#fff',
    marginBottom: 16,
  },
  complaintItem: {
    marginBottom: 8,
    borderBottomColor: '#444',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  dateText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  complaintText: {
    color: '#ccc',
    paddingLeft: 16,
  },
  emptyText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 20,
  },
  chartStyle: {
    marginVertical: 16,
  },
  chartContainer: {
    alignItems: 'center', // Center align the chart
  },
});

export default StudentConduct;
