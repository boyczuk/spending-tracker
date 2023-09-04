import React from 'react';
import ExpenseList from '../components/ExpenseList'
import ExpenseInput from '../components/ExpenseInput';
import ExpensePieChart from '../components/visuals/ExpensePieChart';
import ExpenseLineChart from '../components/visuals/MonthlyExpenseChart';
import '../styles/Home.css'

const HomePage = () => {
  return (
    <div className="page_container">
      <h1 className='page_title'>Finance Center</h1>
      <div className='charts_container'>
        <ExpensePieChart />
        <ExpenseLineChart className="ExpenseLineChart"/>
      </div>
      <ExpenseInput />
      <ExpenseList />
    </div>
  );
};

export default HomePage;