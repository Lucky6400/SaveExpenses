import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ExpenseItem from '../components/ExpenseItem';
import { dummyExpenses } from '../data/expenses';
import { styles } from '../styles/Expense';

const ExpensesScreen = () => {
  const renderExpenseItem = (expense) => {
    const handleDelete = () => {
      // Handle delete expense logic
    };

    const handleEdit = () => {
      // Handle edit expense logic
    };

    return (
     <ExpenseItem expense={expense} handleDelete={handleDelete} handleEdit={handleEdit} key={expense.id} styles={styles}/>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Expenses</Text>
      {dummyExpenses.map(renderExpenseItem)}
      <TouchableOpacity style={styles.addButton}>
        <Icon name="add" size={36} color="white" style={styles.addButtonIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default ExpensesScreen;
