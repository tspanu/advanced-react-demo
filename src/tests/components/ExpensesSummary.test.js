import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render 3 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expenseTotal={235}/>)
    expect(wrapper).toMatchSnapshot()
})