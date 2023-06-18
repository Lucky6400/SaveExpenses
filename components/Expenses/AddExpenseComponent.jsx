import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { categories } from '../../data/categories';

const AddExpenseComponent = ({ handleAddExpense, hideModal }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [selectedIcon, setSelectedIcon] = useState('shopping-cart');

    const handleSaveExpense = () => {
        const newExpense = {
            id: Date.now().toString(),
            title,
            price,
            category: categories.find(v => v.icon === selectedIcon),
        };

        handleAddExpense(newExpense);
        setTitle('');
        setPrice('');
        setSelectedIcon('shopping-cart');
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
                {categories.map(v => (
                    <Picker.Item key={v.name + Date.now()} label={v.name} value={v.icon} />
                ))}
                {/* <Picker.Item label="Shopping" value="shopping-cart" />
                <Picker.Item label="Home" value="home" />
                <Picker.Item label="Gift" value="wallet-giftcard" /> */}
            </Picker>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveExpense}>
                <Text style={styles.saveButtonText}>Save Expense</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => hideModal()}>
                <Text style={styles.saveButtonText}>Back</Text>
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
    backButton: {
        backgroundColor: '#727272',
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 10
    },
});

export default AddExpenseComponent;
