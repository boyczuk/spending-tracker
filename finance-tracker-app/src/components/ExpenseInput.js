import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/ExpenseInput.css';

export default function ExpenseInput() {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      description,
      category,
      amount,
      date,
    };
    try {
      await axios.post('http://localhost:5000/api/expenses', formData);

      setDescription('');
      setCategory('');
      setAmount('');
      setDate('');

      console.log('Expense added successfully!');
    } catch (error) {
      console.error('Error submitting the form:', error);
      console.log('Error adding the expense. Please try again later.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { m: 0.5, height: '8ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{ width: '30ch' }}
        id="outlined-basic-description"
        label="description"
        variant="outlined"
        value={description} // Bind the value of the description field to the state variable
        onChange={(event) => setDescription(event.target.value)} // Update the description state variable when the user types in the field
      />
      <TextField
        sx={{ width: '17ch' }}
        id="outlined-basic-category"
        label="category"
        variant="outlined"
        value={category} // Bind the value of the category field to the state variable
        onChange={(event) => setCategory(event.target.value)} // Update the category state variable when the user types in the field
      />
      <TextField
        sx={{ width: '10ch' }}
        id="outlined-basic-amount"
        label="amount"
        variant="outlined"
        value={amount} // Bind the value of the amount field to the state variable
        onChange={(event) => setAmount(event.target.value)} // Update the amount state variable when the user types in the field
      />
      <TextField
        sx={{ width: '15ch' }}
        id="outlined-basic-date"
        label="date"
        variant="outlined"
        value={date} // Bind the value of the date field to the state variable
        onChange={(event) => setDate(event.target.value)} // Update the date state variable when the user types in the field
      />
      <Button type="submit" variant="contained" color="primary" size="small" className='submit__button'>
        Add
      </Button>
    </Box>
  );
}
