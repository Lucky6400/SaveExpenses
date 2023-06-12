import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ExpenseItem({ styles, handleDelete, handleEdit, expense }) {
    return (
        <View style={styles.expenseItemContainer} key={expense.id}>
            <View style={styles.expenseItemContent}>
                <Text style={styles.amount}>${expense.amount}</Text>
                <Icon name={expense.icon} size={24} color="#6200EE" style={styles.icon} />
                <View style={styles.expenseItemText}>
                    <Text style={styles.title}>{expense.title}</Text>
                    <Text style={styles.category}>{expense.category}</Text>
                </View>
            </View>
            <View style={styles.expenseItemActions}>
                <TouchableOpacity onPress={handleDelete}>
                    <Icon name="delete" size={24} color="#6200EE" style={styles.actionIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleEdit}>
                    <Icon name="edit" size={24} color="#6200EE" style={styles.actionIcon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}