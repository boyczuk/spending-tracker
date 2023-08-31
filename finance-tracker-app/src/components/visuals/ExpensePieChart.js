import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

function ExpensePieChart() {
  const [expenseData, setExpenseData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/api/expenses');
        setExpenseData(response.data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const categoryAmountMap = expenseData.reduce((map, expense) => {
    const { category, amount } = expense;
    if (map[category]) {
      map[category] += amount;
    } else {
      map[category] = amount;
    }
    return map;
  }, {});

  const data = Object.keys(categoryAmountMap).map((category) => ({
    name: category,
    value: parseFloat(categoryAmountMap[category].toFixed(2)),
  }));

  const COLORS = ['#a1dcec', '#daff9b', '#ffb996', '#04946c', '#f1b3dc'];

  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ExpensePieChart;
