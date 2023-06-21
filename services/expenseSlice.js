import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    expenses: [],
    currentBudget: 10000,
    budgets: []
}

export const expenseSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addExpense(state, action) {
            state.expenses.unshift(action.payload)
        },
        deleteExpense(state, action) {
            let newExpenses = state.expenses.filter(v => v.id !== action.payload);
            state.expenses = newExpenses
        },
        updateExpense(state, action) {
            let idx = state.expenses.findIndex(exp => exp.id === action.payload.id);
            state.expenses[idx] = action.payload;
        },
        addBudget(state, action) {
            state.budgets.unshift(action.payload);
        },
        deleteBudget(state, action) {
            let newBudgets = state.budgets.filter(v => v.id !== action.payload);
            state.budgets = newBudgets
        },
        setCurrentBudget(state, action) {
            state.currentBudget = action.payload;
        }

    }
})

export const expenseReducer = expenseSlice.reducer
export const expenseActions = expenseSlice.actions