import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Router from './routers/Router'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter }from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/index.scss'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water Bill', amount: 400, createdAt: 0 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 100, createdAt: 1150 }))
store.dispatch(addExpense({ description: 'Rent', amount: 1400, createdAt: 150 }))

const jsx = (
    <Provider store={store}>
        <Router />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))