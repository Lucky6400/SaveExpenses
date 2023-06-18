import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { dummyExpenses } from '../data/expenses';
import ExpenseItem from './ExpenseItem';
import { styles as expenseStyles } from '../styles/Expense'
import { useDispatch, useSelector } from 'react-redux';
import { expenseActions } from '../services/expenseSlice';

const RecentExpenses = () => {
    const expenses = useSelector(state => state.expense.expenses);

    const renderExpenseItem = (expense) => {
        const dispatch = useDispatch();
        const handleDelete = () => {
            // Handle delete expense logic
            dispatch(expenseActions.deleteExpense(expense.id))
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
            {expenses.map(renderExpenseItem)}
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
