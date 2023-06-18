import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { currencies } from '../data/currency';

export default function ExpenseItem({ styles, handleDelete, handleEdit, expense }) {
    /*
    {"category": {"color": "#FF6384", "icon": "shopping-cart", "name": "Groceries"}, "id": "1687091194154", "price": "2222", "title": "test"}
    */
   
    return (
        <View style={styles.expenseItemContainer} key={expense.id}>
            <View style={styles.expenseItemContent}>
                <Text style={styles.amount}>{currencies.inr}{expense.price}</Text>
                <Icon name={expense.category.icon} size={24} color={expense.category.color} style={styles.icon} />
                <View style={styles.expenseItemText}>
                    <Text style={styles.title}>{expense.title}</Text>
                    <Text style={styles.category}>{expense.category.name}</Text>
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