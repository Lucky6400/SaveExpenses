import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { FAB, Dialog, Portal, Button, Provider } from 'react-native-paper';
import { currencies } from '../data/currency';
import { useDispatch, useSelector } from 'react-redux';
import { expenseActions } from '../services/expenseSlice';

const BudgetsScreen = () => {
    const [isDialogVisible, setDialogVisible] = useState(false);
    const budgets = useSelector(s => s.expense.budgets);
    const currentBudget = useSelector(s => s.expense.currentBudget);

    const [budgetName, setBudgetName] = useState('');
    const [budgetAmount, setBudgetAmount] = useState('');

    const showDialog = () => setDialogVisible(true);
    const hideDialog = () => {
        setDialogVisible(false);
        setBudgetName('');
        setBudgetAmount('');
    };
    const dispatch = useDispatch();
    const handleAddBudget = () => {
        if (budgetName && budgetAmount) {
            const newBudget = {
                id: budgets.length + 1,
                name: budgetName,
                amount: budgetAmount,
            };

            // setBudgets([...budgets, newBudget]);
            dispatch(expenseActions.addBudget(newBudget));
            hideDialog();
        }
    };

    const handleDeleteBudget = (budgetId) => {
        dispatch(expenseActions.deleteBudget(budgetId));
    };

    const setDefault = (amount) => {
        
        console.log("amount -->", amount);
        dispatch(expenseActions.setCurrentBudget(parseInt(amount)));
    }

    const renderBudgetItem = (budget) => {
        return (
            <View key={budget.id} style={styles.budgetItem}>
                <View>
                    <Text style={styles.budgetName}>{budget.name}</Text>
                    <Text>{currencies.inr}{budget.amount}</Text>
                </View>
                <View>

                    <Button icon="delete" onPress={() => handleDeleteBudget(budget.id)}>
                        Delete
                    </Button>
                    {budget.amount != currentBudget ?
                        <Button onPress={() => setDefault(budget.amount)} icon="cash-check">
                            Set as default
                        </Button>
                        : <Button icon="cash-check">
                            Current Budget
                        </Button>}

                </View>
            </View>
        );
    };

    return (
        <Provider>
            <View style={styles.container}>
                {budgets.map(renderBudgetItem)}

                <Portal>
                    <Dialog style={{ backgroundColor: '#fff' }} visible={isDialogVisible} onDismiss={hideDialog}>
                        <Dialog.Title style={styles.title}>ADD BUDGET</Dialog.Title>
                        <Dialog.Content>
                            <TextInput
                                style={styles.input}
                                placeholder="Budget Name"
                                autoCorrect={false}
                                autoComplete={"off"}
                                value={budgetName}
                                onChangeText={setBudgetName}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Amount"
                                autoCorrect={false}
                                autoComplete={"off"}
                                keyboardType="numeric"
                                value={budgetAmount}
                                onChangeText={setBudgetAmount}
                            />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideDialog}>Cancel</Button>
                            <Button onPress={handleAddBudget}>Add</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>

                <FAB icon="plus" color="#fff" onPress={showDialog} style={styles.fab} />
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    budgetItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#ccb1f28d',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10
    },
    budgetName: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#606060'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#6200EE',
        borderRadius: 999
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default BudgetsScreen;