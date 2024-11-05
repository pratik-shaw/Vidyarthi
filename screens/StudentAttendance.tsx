import React, { useState, useEffect } from 'react';
import { ScrollView, Dimensions, View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { BarChart } from 'react-native-chart-kit';
import { Picker } from '@react-native-picker/picker';
import { Calendar } from 'react-native-calendars';

const { width } = Dimensions.get('window');

interface MonthData {
  totalSchoolDays: number;
  holidays: number;
  monthPresent: number;
  monthAbsent: number;
}

interface MonthsData {
  [month: string]: MonthData;
}

const StudentAttendance = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'Jan-Jun' | 'Jul-Dec'>('Jan-Jun');
  const [selectedMonth, setSelectedMonth] = useState<string>('January');

  useEffect(() => {
    const date = new Date();
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    setSelectedMonth(monthNames[date.getMonth()]);

    if (date.getMonth() < 6) {
      setSelectedPeriod('Jan-Jun');
    } else {
      setSelectedPeriod('Jul-Dec');
    }
  }, []);

  const monthsData: MonthsData = {
    January: { totalSchoolDays: 20, holidays: 2, monthPresent: 18, monthAbsent: 2 },
    February: { totalSchoolDays: 20, holidays: 1, monthPresent: 19, monthAbsent: 1 },
    March: { totalSchoolDays: 22, holidays: 1, monthPresent: 21, monthAbsent: 1 },
    April: { totalSchoolDays: 21, holidays: 2, monthPresent: 19, monthAbsent: 2 },
    May: { totalSchoolDays: 22, holidays: 0, monthPresent: 22, monthAbsent: 0 },
    June: { totalSchoolDays: 22, holidays: 3, monthPresent: 19, monthAbsent: 3 },
    July: { totalSchoolDays: 23, holidays: 2, monthPresent: 21, monthAbsent: 2 },
    August: { totalSchoolDays: 22, holidays: 1, monthPresent: 21, monthAbsent: 1 },
    September: { totalSchoolDays: 25, holidays: 1, monthPresent: 23, monthAbsent: 1 },
    October: { totalSchoolDays: 25, holidays: 2, monthPresent: 22, monthAbsent: 2 },
    November: { totalSchoolDays: 25, holidays: 1, monthPresent: 24, monthAbsent: 1 },
    December: { totalSchoolDays: 25, holidays: 2, monthPresent: 20, monthAbsent: 2 },
  };

  const chartData = {
    'Jan-Jun': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [
            monthsData.January.monthPresent,
            monthsData.February.monthPresent,
            monthsData.March.monthPresent,
            monthsData.April.monthPresent,
            monthsData.May.monthPresent,
            monthsData.June.monthPresent,
          ],
          color: () => 'rgba(72, 201, 176, 1)', // Teal for present days
          strokeWidth: 2,
        },
        {
          data: [
            monthsData.January.monthAbsent,
            monthsData.February.monthAbsent,
            monthsData.March.monthAbsent,
            monthsData.April.monthAbsent,
            monthsData.May.monthAbsent,
            monthsData.June.monthAbsent,
          ],
          color: () => 'rgba(235, 77, 75, 1)', // Bright red for absent days
          strokeWidth: 2,
        },
      ],
    },
    'Jul-Dec': {
      labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          data: [
            monthsData.July.monthPresent,
            monthsData.August.monthPresent,
            monthsData.September.monthPresent,
            monthsData.October.monthPresent,
            monthsData.November.monthPresent,
            monthsData.December.monthPresent,
          ],
          color: () => 'rgba(72, 201, 176, 1)', // Teal for present days
          strokeWidth: 2,
        },
        {
          data: [
            monthsData.July.monthAbsent,
            monthsData.August.monthAbsent,
            monthsData.September.monthAbsent,
            monthsData.October.monthAbsent,
            monthsData.November.monthAbsent,
            monthsData.December.monthAbsent,
          ],
          color: () => 'rgba(235, 77, 75, 1)', // Bright red for absent days
          strokeWidth: 2,
        },
      ],
    },
  };

  const handlePeriodChange = (value: string) => {
    setSelectedPeriod(value as 'Jan-Jun' | 'Jul-Dec');
  };

  const handleMonthChange = (value: string) => {
    setSelectedMonth(value);
  };

  const currentMonthData = monthsData[selectedMonth];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headingText}>Attendance Overview</Text>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedPeriod}
          onValueChange={handlePeriodChange}
          style={styles.picker}
        >
          <Picker.Item label="Jan-Jun" value="Jan-Jun" />
          <Picker.Item label="Jul-Dec" value="Jul-Dec" />
        </Picker>
      </View>

      <Card style={styles.card}>
        <Card.Title title="Last 6 Months" titleStyle={styles.cardTitle} />
        <Card.Content style={styles.cardContent}>
          <View style={styles.chartContainer}>
            <BarChart
              style={styles.chart}
              data={chartData[selectedPeriod]}
              width={width - 32} // Full width minus padding
              height={220} // Adjusted height
              yAxisLabel=""
              yAxisSuffix=" days"
              yAxisInterval={1}
              chartConfig={{
                backgroundColor: '#1c1c1c', // Dark grey background for chart
                backgroundGradientFrom: '#1c1c1c',
                backgroundGradientTo: '#1c1c1c',
                decimalPlaces: 0,
                color: () => 'rgba(255, 255, 255, 1)',
                labelColor: () => 'rgba(255, 255, 255, 1)',
                style: {
                  borderRadius: 0,
                },
                propsForBackgroundLines: {
                  strokeWidth: 1,
                  stroke: '#D3D3D3', // Dull white for background lines
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#FFFFFF',
                },
              }}
              verticalLabelRotation={0} // Set this to 0 for horizontal labels
            />
          </View>
        </Card.Content>
      </Card>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedMonth}
          onValueChange={handleMonthChange}
          style={styles.picker}
        >
          {Object.keys(monthsData).map(month => (
            <Picker.Item key={month} label={month} value={month} />
          ))}
        </Picker>
      </View>

      <View style={styles.dataContainer}>
        <Card style={styles.dataCard}>
          <Text style={styles.dataText}>Total School Days: {currentMonthData.totalSchoolDays}</Text>
        </Card>
        <Card style={styles.dataCard}>
          <Text style={styles.dataText}>Present Days: {currentMonthData.monthPresent}</Text>
        </Card>
        <Card style={styles.dataCard}>
          <Text style={styles.dataText}>Absent Days: {currentMonthData.monthAbsent}</Text>
        </Card>
        <Card style={styles.dataCard}>
          <Text style={styles.dataText}>Holidays: {currentMonthData.holidays}</Text>
        </Card>
      </View>

      <Text style={styles.headingText}>Calendar</Text>
      <Card style={styles.card}>
        <Calendar
          current={new Date().toISOString().split('T')[0]} // Current date
          markedDates={{
            [selectedMonth]: {
              marked: true,
              dotColor: 'lightcoral',
              activeOpacity: 0.7,
            },
          }}
          theme={{
            backgroundColor: '#1c1c1c',
            calendarBackground: '#1c1c1c',
            textSectionTitleColor: '#FFFFFF',
            dayTextColor: '#FFFFFF',
            todayTextColor: '#FF5733',
            dotColor: '#00BFFF',
            selectedDayBackgroundColor: '#FF5733',
            selectedDayTextColor: '#FFFFFF',
            textDayFontWeight: 'bold',
            textDayFontSize: 14,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 14,
            monthTextColor: '#FFFFFF',
          }}
        />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#1c1c1c',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 10,
  },
  pickerContainer: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: width - 32,
  },
  card: {
    marginVertical: 10,
    backgroundColor: '#2a2a2a',
  },
  cardTitle: {
    color: '#FFFFFF',
  },
  cardContent: {
    padding: 10,
    alignItems: 'center', // Center items inside the card content
  },
  chartContainer: {
    alignItems: 'center', // Center the chart
    width: '100%', // Ensure full width
  },
  chart: {
    borderRadius: 16,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  dataCard: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#3b3b3b',
  },
  dataText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default StudentAttendance;
