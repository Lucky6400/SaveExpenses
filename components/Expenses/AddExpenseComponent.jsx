import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { categories } from '../../data/categories';
import { months } from '../../data/months';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddExpenseComponent = ({ handleAddExpense, hideModal }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [selectedIcon, setSelectedIcon] = useState('shopping-cart');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    const [error, setError] = useState('')
    const handleSaveExpense = () => {
        if (title === '' || price === '') {
            setError('Please enter full details');
            return undefined;
        }
        const newExpense = {
            id: Date.now().toString(),
            title,
            price,
            category: categories.find(v => v.icon === selectedIcon),
            date: selectedDate,
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
            </Picker>
            <TouchableOpacity style={styles.dateButton} onPress={() => setShowDatePicker(true)}>
                <Text style={styles.saveButtonText}> Select Date ({selectedDate})</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={handleSaveExpense}>
                <Text style={styles.saveButtonText}>Save Expense</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => hideModal()}>
                <Text style={styles.saveButtonText}>Back</Text>
            </TouchableOpacity>

            <Text style={{ color: 'red' }}>
                {error && error}
            </Text>
            {/* Custom Date Picker Modal */}
            {showDatePicker ?
                <DateTimePicker value={new Date()}
                
                onChange={(e,s) => {
                    setShowDatePicker(false);
                    setSelectedDate(s.toDateString());
                }}/>
                : <></>}


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
    dateButton: {
        backgroundColor: '#1972ef',
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 10
    },
    datePickerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    datePickerContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 16,
        paddingHorizontal: 32,
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%'
    },
    pickerColumn: {
        width: 60,
        height: 50,
        borderRadius: 10,
        overflow: 'hidden',
    },
    dateOption: {
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: '#189bed66',
        marginHorizontal: 5,

    },
    monthOption: {
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: '#189bed66',
        marginHorizontal: 5,
    },
    yearOption: {
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: '#189bed66',
        marginHorizontal: 5,
    },
    closeButton: {
        width: '100%',
        marginVertical: 20,
        backgroundColor: '#585858',
        paddingVertical: 12,
        borderRadius: 4,
        alignItems: 'center',
    },
    textInside: {
        fontSize: 20,
        fontWeight: 600,
        color: '#0553a1'
    },
    dateCont: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#a1a0a0',
        marginVertical: 10
    },
    dateText: {
        color: '#606060',
        fontWeight: 'bold',
        fontSize: 16,
        width: '100%',
        textAlign: 'center'
    }
});

export default AddExpenseComponent;
