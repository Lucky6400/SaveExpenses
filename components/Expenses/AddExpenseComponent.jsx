import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { categories } from '../../data/categories';
import { months } from '../../data/months';

const AddExpenseComponent = ({ handleAddExpense, hideModal }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [selectedIcon, setSelectedIcon] = useState('shopping-cart');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleSaveExpense = () => {
        const newExpense = {
            id: Date.now().toString(),
            title,
            price,
            category: categories.find(v => v.icon === selectedIcon),
            date: selectedDate.toString(),
        };

        handleAddExpense(newExpense);
        setTitle('');
        setPrice('');
        setSelectedIcon('shopping-cart');
    };

    const handleDateSelection = (date) => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date));
        // setShowDatePicker(false);
    };

    const handleMonthSelection = (month) => {
        setSelectedDate(new Date(selectedDate.getFullYear(), month, selectedDate.getDate()));
        //  setShowDatePicker(false);
    };

    const handleYearSelection = (year) => {
        setSelectedDate(new Date(year, selectedDate.getMonth(), selectedDate.getDate()));
        //   setShowDatePicker(false);
    };

    const renderDateOptions = () => {
        const options = [];
        const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();

        for (let i = 1; i <= daysInMonth; i++) {
            options.push(
                <TouchableOpacity
                    key={`date_${i}`}
                    style={styles.dateOption}
                    onPress={() => handleDateSelection(i)}
                >
                    <Text style={styles.textInside}>{i}</Text>
                </TouchableOpacity>
            );
        }

        return options;
    };

    const renderMonthOptions = () => {
        const options = [];

        for (let i = 0; i < 12; i++) {
            options.push(
                <TouchableOpacity
                    key={`month_${i}`}
                    style={styles.monthOption}
                    onPress={() => handleMonthSelection(i)}
                >
                    <Text style={styles.textInside}>{months[i]}</Text>
                </TouchableOpacity>
            );
        }

        return options;
    };

    const renderYearOptions = () => {
        const options = [];
        const currentYear = new Date().getFullYear();
        const startYear = currentYear - 10;
        const endYear = currentYear + 10;

        for (let i = startYear; i <= endYear; i++) {
            options.push(
                <TouchableOpacity
                    key={`year_${i}`}
                    style={styles.yearOption}
                    onPress={() => handleYearSelection(i)}
                >
                    <Text style={styles.textInside}>{i}</Text>
                </TouchableOpacity>
            );
        }

        return options;
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
                <Text style={styles.saveButtonText}> Select Date ({selectedDate.toDateString()})</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={handleSaveExpense}>
                <Text style={styles.saveButtonText}>Save Expense</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.backButton} onPress={() => hideModal()}>
                <Text style={styles.saveButtonText}>Back</Text>
            </TouchableOpacity>

            {/* Custom Date Picker Modal */}
            <Modal visible={showDatePicker} transparent>
                <View style={styles.datePickerModal}>
                    <View style={styles.datePickerContainer}>
                        <TouchableOpacity style={styles.dateCont} onPress={() => setShowDatePicker(true)}>
                            <Text style={styles.dateText}>{selectedDate.toDateString()}</Text>
                        </TouchableOpacity>
                        <ScrollView style={styles.pickerColumn}>
                            {renderDateOptions()}
                        </ScrollView>
                        <ScrollView style={styles.pickerColumn}>
                            {renderMonthOptions()}
                        </ScrollView>
                        <ScrollView style={styles.pickerColumn}>
                            {renderYearOptions()}
                        </ScrollView>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setShowDatePicker(false)}>
                            <Text style={styles.saveButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
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
