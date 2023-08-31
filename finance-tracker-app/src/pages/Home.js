import React from 'react';
import ExpenseList from '../components/ExpenseList'
import ExpenseInput from '../components/ExpenseInput';
import ExpensePieChart from '../components/visuals/ExpensePieChart';
import '../styles/Home.css'

const HomePage = () => {
  return (
    <div>
      <h1 className='page_title'>Finance Center</h1>
        <ExpensePieChart />
        <ExpenseInput />
        <ExpenseList />
    </div>
  );
};

export default HomePage;