import React from 'react';
import ExpenseList from '../components/ExpenseList'
import ExpenseInput from '../components/ExpenseInput';
import GraphContainer from '../components/visuals/GraphContainer';
import '../styles/Home.css'

const HomePage = () => {
  return (
    <div>
      <h1 className='page_title'>Finance Center</h1>
        <GraphContainer />
        <ExpenseInput />
        <ExpenseList />
    </div>
  );
};

export default HomePage;