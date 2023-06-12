import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { List, Avatar, Title, Caption, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { dummyExpenses } from '../data/expenses';
import ExpenseItem from './ExpenseItem';
import { styles as expenseStyles } from '../styles/Expense'

const RecentExpenses = () => {

    const renderExpenseItem = (expense) => {
        const handleDelete = () => {
            // Handle delete expense logic
        };

        const handleEdit = () => {
            // Handle edit expense logic
        };

        return (
            <ExpenseItem expense={expense} handleDelete={handleDelete} handleEdit={handleEdit} key={expense.id} styles={expenseStyles} />
        );
    };

    return (
        <View style={styles.container}>
            {dummyExpenses.map(renderExpenseItem)}
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
