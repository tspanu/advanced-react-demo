import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectedExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expensesTotal'


export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    
    return (
        <div>
            <h1>{expensesCount} {expenseWord} totalling {formattedExpensesTotal} </h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectedExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)