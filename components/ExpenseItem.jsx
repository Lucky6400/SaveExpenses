import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { currencies } from '../data/currency';
import { useDispatch } from 'react-redux';
import { expenseActions } from '../services/expenseSlice';
import { Picker } from '@react-native-picker/picker';
import { categories } from '../data/categories';

export default function ExpenseItem({ styles, expense }) {
    const dispatch = useDispatch();
    const [isEditMode, setIsEditMode] = useState(false);
    const [updatedExpense, setUpdatedExpense] = useState(expense);
    const [name, setName] = useState(expense.category.icon);
    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const handleUpdate = () => {
        dispatch(expenseActions.updateExpense(updatedExpense));
        setIsEditMode(false);
    };

    const handleDelete = () => {
        dispatch(expenseActions.deleteExpense(expense.id));
    };

    return (
        <View style={styles.expenseItemContainer} key={expense.id}>
            <View style={styles.expenseItemContent}>
                <Text style={styles.amount}>{currencies.inr}{isEditMode ? updatedExpense.price : expense.price}</Text>
                <Icon name={isEditMode ? updatedExpense.category.icon : expense.category.icon} size={24} color={isEditMode ? updatedExpense.category.color : expense.category.color} style={styles.icon} />
                <View style={styles.expenseItemText}>
                    {isEditMode ? (
                        <>
                            <TextInput
                                style={styles.titleInput}
                                value={updatedExpense.title}
                                onChangeText={(text) => setUpdatedExpense({ ...updatedExpense, title: text })}
                            />
                            <Picker
                                style={styles.picker}
                                selectedValue={name}
                                onValueChange={(text) => {
                                    setUpdatedExpense({
                                        ...updatedExpense, category: categories.find(v => v.icon === text)
                                        
                                    })
                                    setName(text)
                                }
                                }
                            >
                                {categories.map(v => (
                                    <Picker.Item key={v.name + Date.now()} label={v.name} value={v.icon} />
                                ))}

                            </Picker>
                        </>
                    ) : (
                        <>
                            <Text style={styles.title}>{expense.title}</Text>
                            <Text style={styles.category}>{expense.category.name}</Text>
                            <Text>{expense.date}</Text>
                        </>
                    )}
                </View>
            </View>
            <View style={styles.expenseItemActions}>
                {isEditMode ? (
                    <>
                        <TouchableOpacity onPress={handleUpdate}>
                            <Icon name="done" size={24} color="#6200EE" style={styles.actionIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleEditMode}>
                            <Icon name="cancel" size={24} color="#6200EE" style={styles.actionIcon} />
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <TouchableOpacity onPress={handleDelete}>
                            <Icon name="delete" size={24} color="#6200EE" style={styles.actionIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleEditMode}>
                            <Icon name="edit" size={24} color="#6200EE" style={styles.actionIcon} />
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
    );
}