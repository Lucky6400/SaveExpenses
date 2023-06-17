import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ExpenseItem from '../components/ExpenseItem';
import { dummyExpenses } from '../data/expenses';
import { styles } from '../styles/Expense';
import { Button, Provider, Portal } from 'react-native-paper';
import AddExpenseComponent from '../components/Expenses/AddExpenseComponent';

const ExpensesScreen = () => {
  const renderExpenseItem = (expense) => {
    const handleDelete = () => {
      // Handle delete expense logic
    };

    const handleEdit = () => {
      // Handle edit expense logic
    };

    return (
      <ExpenseItem expense={expense} handleDelete={handleDelete} handleEdit={handleEdit} key={expense.id} styles={styles} />
    );
  };

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20, width: '80%', borderRadius: 8 };

  const handleAddExpense = (newExpense) => {
    // Handle adding the new expense to your expenses list
    console.log('New Expense:', newExpense);
    hideModal();
  };

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <AddExpenseComponent hideModal={hideModal} handleAddExpense={handleAddExpense} />
        </Modal>
      </Portal>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Expenses</Text>
        {dummyExpenses.map(renderExpenseItem)}
        <TouchableOpacity onPress={showModal} style={styles.addButton}>
          <Icon name="add" size={36} color="white" style={styles.addButtonIcon} />
        </TouchableOpacity>
      </View>
    </Provider>
  );
};

export default ExpensesScreen;
