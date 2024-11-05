// screens/StudentCalendar.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';

type Event = {
    name: string;
};

type Events = {
    [date: string]: Event[];
};

const events: Events = {
    '2024-08-01': [{ name: 'Team Meeting' }],
    '2024-08-15': [{ name: 'Independence Day Celebration' }, { name: 'Monthly Review' }, { name: 'Workshop' }],
    '2024-08-20': [{ name: 'Project Deadline' }, { name: 'Code Review' }],
    '2024-08-30': [{ name: 'Feedback Session' }, { name: 'Team Building Activity' }, { name: 'Prepare Reports' }],

    '2024-09-01': [{ name: 'New Month Kick-off' }, { name: 'Strategy Meeting' }, { name: 'Client Follow-up' }],
    '2024-09-10': [{ name: 'Teachers Day Celebration' }, { name: 'Staff Training' }, { name: 'Product Launch' }],
    '2024-09-15': [{ name: 'Team Outing' }, { name: 'Performance Review' }, { name: 'Annual Report' }],
    '2024-09-25': [{ name: 'Quarterly Meeting' }, { name: 'Office Cleanup' }, { name: 'Client Presentation' }],

    '2024-10-05': [{ name: 'Workshop' }, { name: 'Team Review' }, { name: 'Office Renovation' }],
    '2024-10-10': [{ name: 'Holiday Planning' }, { name: 'Budget Meeting' }, { name: 'Training Session' }],
    '2024-10-20': [{ name: 'Product Demo' }, { name: 'Team Building' }, { name: 'Customer Feedback' }],
    '2024-10-30': [{ name: 'Halloween Party' }, { name: 'Prepare Next Month' }, { name: 'Client Meeting' }],

    '2024-11-01': [{ name: 'Project Kickoff' }, { name: 'Monthly Strategy' }, { name: 'Marketing Meeting' }],
    '2024-11-10': [{ name: 'Veterans Day Event' }, { name: 'Training Workshop' }, { name: 'Client Check-in' }],
    '2024-11-20': [{ name: 'Team Lunch' }, { name: 'Review Meeting' }, { name: 'End of Month Wrap-up' }],
    '2024-11-30': [{ name: 'Year-End Planning' }, { name: 'Holiday Preparations' }, { name: 'Project Finalization' }],
};

const StudentCalendar = () => {
    const [selectedMonth, setSelectedMonth] = useState<string>(new Date().toISOString().slice(0, 7));

    const filteredEvents: Events = Object.keys(events)
        .filter(date => date.startsWith(selectedMonth))
        .reduce((obj: Events, key: string) => {
            obj[key] = events[key];
            return obj;
        }, {});

    const handleMonthChange = (month: DateData) => {
        setSelectedMonth(month.dateString.slice(0, 7));
    };

    const formatMonthName = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Events in {formatMonthName(selectedMonth)}</Text>

            <View style={styles.calendarCard}>
                <Calendar
                    theme={{
                        calendarBackground: '#1c1c1c',
                        textSectionTitleColor: '#FFF',
                        dayTextColor: '#FFF',
                        todayTextColor: '#FF5733', // Highlight today's date
                        monthTextColor: '#FFF',
                        arrowColor: '#FFF',
                        textDisabledColor: '#555',
                        'stylesheet.calendar.header': {
                            week: {
                                marginTop: 5,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: 10,
                                paddingBottom: 10,
                            },
                        },
                    }}
                    onDayPress={(day: DateData) => console.log('Selected day', day)}
                    markedDates={Object.keys(filteredEvents).reduce((acc, date) => {
                        acc[date] = {
                            marked: true,
                            dotColor: 'red',
                            customStyles: {
                                container: {
                                    backgroundColor: '#1c1c1c',
                                    borderRadius: 50,
                                },
                                text: {
                                    color: '#FFF',
                                    fontWeight: 'bold',
                                },
                            },
                        };
                        return acc;
                    }, {} as { [key: string]: { marked: boolean; dotColor: string; customStyles: { container: {}; text: {} } } })}
                    onMonthChange={handleMonthChange}
                    markingType={'custom'}
                />
            </View>

            <View style={styles.eventsCard}>
                <FlatList
                    data={Object.keys(filteredEvents)}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <View style={styles.eventItem}>
                            <Text style={styles.eventDate}>{new Date(item).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</Text>
                            <FlatList
                                data={filteredEvents[item]}
                                keyExtractor={(event) => event.name}
                                renderItem={({ item: event }) => (
                                    <Text style={styles.eventName}>{event.name}</Text>
                                )}
                            />
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#1c1c1c',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 10,
    },
    calendarCard: {
        backgroundColor: '#2a2a2a',
        borderRadius: 8,
        borderColor: '#FFF',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    eventsCard: {
        backgroundColor: '#2a2a2a',
        borderRadius: 8,
        borderColor: '#FFF',
        borderWidth: 1,
        padding: 10,
        flex: 1,
    },
    eventItem: {
        paddingVertical: 8,
        borderBottomColor: '#555',
        borderBottomWidth: 1,
    },
    eventDate: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    eventName: {
        color: '#BBB',
        paddingLeft: 16,
    },
});

export default StudentCalendar;
