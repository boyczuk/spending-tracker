import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function MonthlyExpenseChart() {
  const [monthlyExpenses, setMonthlyExpenses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch the monthly expenses data from your API, replace with your endpoint
        const response = await axios.get('http://localhost:5000/api/monthly-expenses');
        setMonthlyExpenses(response.data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Reformat the data to match the expected format for Recharts
  const chartData = monthlyExpenses.map((expense) => ({
    date: expense.date, // Assuming 'date' field is present in your data
    totalAmount: expense.totalAmount, // This should be the daily total
  }));

  return (
    <div>
      <LineChart width={600} height={300} data={chartData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="totalAmount" name="Total Expense" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default MonthlyExpenseChart;
