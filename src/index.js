import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Router from './routers/Router'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import 'normalize.css/normalize.css'
import './styles/index.scss'
import 'react-dates/lib/css/_datepicker.css'
import moment from 'moment'

const store = configureStore()

store.dispatch(addExpense({ description: 'Water Bill', amount: 400, createdAt: moment().valueOf() }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 100, createdAt: moment().add(7, 'days').valueOf() }))
store.dispatch(addExpense({ description: 'Rent', amount: 1400, createdAt: moment().subtract(7, 'days').valueOf() }))

const jsx = (
    <Provider store={store}>
        <Router />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))