import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    expenses: [],
    currentBudget: 0
}

export const expenseSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addExpense(state, action) {
            state.expenses.push(action.payload)
        },
        deleteExpense(state, action) {
            let newExpenses = state.expenses.filter(v => v.id !== action.payload);
            state.expenses = newExpenses
        }
       
    }
})

export const expenseReducer = expenseSlice.reducer
export const expenseActions = expenseSlice.actions