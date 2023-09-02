import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { currencies } from '../../data/currency';
import { useSelector } from 'react-redux';

const DataCard = ({ totalSpentToday, totalSpentMonth }) => {
    const currentBudget = useSelector(s => s.expense.currentBudget)
    const totalSpent = totalSpentMonth;
    const remainingAmount = currentBudget - totalSpent;
    const amountSpentToday = totalSpentToday;
    const today = new Date().toDateString().substring(4);
    return (
        <Card style={{...styles.card, marginTop: 20}}>
            <Text style={styles.heading}>Data Summary</Text>
            <View style={styles.header}>
                <View>
                    <Text style={styles.date}>{today}</Text>
                </View>
                <View style={styles.am}>
                    <Text style={styles.title}>Spent Today</Text>
                    <Text style={styles.date}>{currencies.inr}{amountSpentToday}</Text>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.dataRow}>
                    <Text style={styles.dataLabel}>Total Spent (this month)</Text>
                    <Text style={styles.dataValue}>{currencies.inr}{totalSpent}</Text>
                </View>
                <View style={styles.dataRow}>
                    <Text style={styles.dataLabel}>Monthly Budget</Text>
                    <Text style={styles.dataValue}>{currencies.inr}{currentBudget}</Text>
                </View>
                <View style={styles.dataRow}>
                    <Text style={styles.dataLabel}>Remaining Amount</Text>
                    <Text style={styles.dataValue}>{currencies.inr}{remainingAmount}</Text>
                </View>

            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        margin: 16,
        marginTop: 60
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    title: {
        fontSize: 12,
        color: '#777777',
        fontWeight: 'bold',
    },
    date: {
        fontSize: 24,
        color: '#000',
        fontWeight: 200
    },
    body: {},
    dataRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    dataLabel: {
        fontSize: 13,
        color: '#9a5fed',
        fontWeight: 'bold',
    },
    dataValue: {
        fontSize: 13,
        color: '#000',
        fontWeight: 300
    },
    am: {
        alignItems: 'flex-end',
    },
    heading: {
        width: '100%',
        textAlign: 'center',
        marginBottom: 10,
        textTransform: 'uppercase',
        fontWeight: 600,
        color: '#6200EE'
    }
});

export default DataCard