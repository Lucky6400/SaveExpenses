import React from 'react';
import { View, StyleSheet } from 'react-native';
import ExpenseItem from './ExpenseItem';
import { styles as expenseStyles } from '../styles/Expense'
import { useSelector } from 'react-redux';
import { Text } from 'react-native-paper';

const RecentExpenses = () => {
    const expenses = useSelector(state => state.expense.expenses);

    const renderExpenseItem = (expense) => {

        return (
            <ExpenseItem expense={expense} key={expense.id} styles={expenseStyles} />
        );
    };

    return (
        <View style={styles.container}>
            <Text>Recent</Text>
            {expenses.slice(0, 3).map(renderExpenseItem)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 20
    },
    avatar: {
        backgroundColor: '#6200EE',
    },
    listContent: {
        paddingBottom: 16
    },
    item: {
        borderBottomColor: '#8686866d',
        borderBottomWidth: 1
    }
});

export default RecentExpenses;
