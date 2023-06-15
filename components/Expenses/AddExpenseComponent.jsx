import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddExpenseComponent = ({ handleAddExpense }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [selectedIcon, setSelectedIcon] = useState('food');

    const handleSaveExpense = () => {
        const newExpense = {
            id: Date.now().toString(),
            title,
            price,
            icon: selectedIcon,
        };

        handleAddExpense(newExpense);
        setTitle('');
        setPrice('');
        setSelectedIcon('food');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Expense</Text>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Price"
                keyboardType="numeric"
                value={price}
                onChangeText={(text) => setPrice(text)}
            />
            <Picker
                style={styles.picker}
                selectedValue={selectedIcon}
                onValueChange={(itemValue) => setSelectedIcon(itemValue)}
            >
                <Picker.Item label="Food" value="food" />
                <Picker.Item label="Shopping" value="shopping-cart" />
                <Picker.Item label="Home" value="home" />
                <Picker.Item label="Gift" value="wallet-giftcard" />
            </Picker>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveExpense}>
                <Text style={styles.saveButtonText}>Save Expense</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    picker: {
        marginBottom: 16,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
    },
    saveButton: {
        backgroundColor: '#6200EE',
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default AddExpenseComponent;
