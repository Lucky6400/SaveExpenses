import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ExpenseItem from '../components/ExpenseItem';
import { styles } from '../styles/Expense';
import { Button, Provider, Portal } from 'react-native-paper';
import AddExpenseComponent from '../components/Expenses/AddExpenseComponent';
import { useDispatch, useSelector } from 'react-redux';
import { expenseActions } from '../services/expenseSlice';
import { ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { categories } from '../data/categories';
import DateTimePicker from '@react-native-community/datetimepicker';

const ExpensesScreen = () => {

  const renderExpenseItem = (expense) => {
    return (
      <ExpenseItem expense={expense} key={expense.id} styles={styles} />
    );
  };

  const [visible, setVisible] = useState(false);
  const expenses = useSelector(state => state.expense.expenses);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState('');
  const [category, setCategory] = useState("");
  const containerStyle = { backgroundColor: 'white', padding: 20, width: '80%', borderRadius: 8 };
  const dispatch = useDispatch();
  const handleAddExpense = (newExpense) => {
    // Handle adding the new expense to your expenses list
    console.log('New Expense:', newExpense);
    dispatch(expenseActions.addExpense(newExpense))
    hideModal();
  };
  console.log(expenses, "expenses are these")

  return (
    <Provider>

      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <AddExpenseComponent hideModal={hideModal} handleAddExpense={handleAddExpense} />
        </Modal>
      </Portal>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Expenses</Text>

        <View style={{ flexDirection: 'row' }}>

          <Picker
            style={{ ...styles.picker, width: 200 }}
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Picker.Item label={"All"} value={""} />
            {categories.map(v => (
              <Picker.Item key={v.name + Date.now()} label={v.name} value={v.icon} />
            ))}
          </Picker>
          {!date ?
            <Button style={{ width: '50%', height: 48 }}
              onPress={() => {
                setShowDatePicker(true)
              }}
              title={"Select Date"} mode='contained'>Select Date</Button>
            :
            <Button style={{ width: '50%', height: 48 }}
              onPress={() => {
                setDate('');
              }}
              title={"Select Date"} buttonColor='red' mode='contained'>Clear Date</Button>
          }

        </View>
        {showDatePicker ?
          <DateTimePicker value={new Date()}

            onChange={(e, s) => {
              setShowDatePicker(false);
              setDate(s.toDateString());
            }} />
          : <></>}

        <ScrollView>
          {date ?
            expenses?.filter(v => v?.category?.icon?.includes(category) && new Date(v.date).toString() === new Date(date).toString())?.map(renderExpenseItem)
            :
            expenses?.filter(v => v?.category?.icon?.includes(category))?.map(renderExpenseItem)
          }

        </ScrollView>
        <TouchableOpacity onPress={showModal} style={styles.addButton}>
          <Icon name="add" size={36} color="white" style={styles.addButtonIcon} />
        </TouchableOpacity>
      </View>
    </Provider>
  );
};

export default ExpensesScreen;
